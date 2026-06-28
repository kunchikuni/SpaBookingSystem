"use client";

import { useEffect, useMemo, useState } from "react";
import type { ServiceSeed, AddOnSeed } from "@/lib/seed-data/services";
import type { TherapistSeed } from "@/lib/seed-data/therapists";
import { formatPrice, formatDuration } from "@/lib/format";

const STEPS = ["Service", "Therapist", "Date & Time", "Details"];

const CATEGORY_LABELS: Record<string, string> = {
  FACIAL: "Facial Treatments",
  MASSAGE: "Massage Therapy",
  BODY: "Body Treatments",
  PACKAGE: "Packages",
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function buildCalendarGrid(year: number, month: number): (Date | null)[] {
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function toDateParam(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

interface BookingWizardProps {
  services: ServiceSeed[];
  therapists: TherapistSeed[];
  addOns: AddOnSeed[];
  preselectedServiceId?: string;
}

interface CreatedBooking {
  id: string;
  scheduledTimeLabel: string;
  totalPriceCents: number;
}

export default function BookingWizard({
  services,
  therapists,
  addOns,
  preselectedServiceId,
}: BookingWizardProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    preselectedServiceId ?? null,
  );
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [selectedTherapistId, setSelectedTherapistId] = useState<string | null>(null);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    smsReminders: false,
    emailUpdates: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<CreatedBooking | null>(null);

  const selectedService = services.find((s) => s.id === selectedServiceId) ?? null;
  const selectedTherapist = therapists.find((t) => t.id === selectedTherapistId) ?? null;
  const selectedAddons = addOns.filter((a) => selectedAddonIds.includes(a.id));
  const qualifiedTherapists = selectedServiceId
    ? therapists.filter((t) => t.serviceIds.includes(selectedServiceId))
    : [];

  const totalPriceCents =
    (selectedService?.priceCents ?? 0) + selectedAddons.reduce((sum, a) => sum + a.priceCents, 0);

  const categorizedServices = useMemo(() => {
    const groups = new Map<string, ServiceSeed[]>();
    for (const service of services) {
      const list = groups.get(service.category) ?? [];
      list.push(service);
      groups.set(service.category, list);
    }
    return Array.from(groups.entries());
  }, [services]);

  const calendarCells = useMemo(() => buildCalendarGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  // Fetch real availability whenever the therapist or date changes.
  useEffect(() => {
    if (!selectedTherapistId || !selectedDate) {
      setAvailableSlots([]);
      return;
    }
    setLoadingSlots(true);
    const dateParam = toDateParam(selectedDate);
    fetch(`/api/availability?therapistId=${selectedTherapistId}&date=${dateParam}`)
      .then((res) => res.json())
      .then((body) => setAvailableSlots(body.data?.slots ?? []))
      .catch(() => setAvailableSlots([]))
      .finally(() => setLoadingSlots(false));
  }, [selectedTherapistId, selectedDate]);

  function toggleAddon(id: string) {
    setSelectedAddonIds((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }

  function goToMonth(delta: number) {
    let newMonth = viewMonth + delta;
    let newYear = viewYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setViewMonth(newMonth);
    setViewYear(newYear);
  }

  function canAdvance(): boolean {
    if (currentStep === 1) return Boolean(selectedServiceId);
    if (currentStep === 2) return Boolean(selectedTherapistId);
    if (currentStep === 3) return Boolean(selectedDate && selectedTime);
    return true;
  }

  function handleNext() {
    if (!canAdvance()) return;
    setCurrentStep((s) => Math.min(s + 1, 4));
  }

  function handlePrev() {
    setSubmitError(null);
    setCurrentStep((s) => Math.max(s - 1, 1));
  }

  async function handleConfirm() {
    if (!selectedService || !selectedTherapist || !selectedDate || !selectedTime) return;
    if (!form.firstName || !form.lastName || !form.email || !form.phone) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: selectedService.id,
          therapistId: selectedTherapist.id,
          addOnIds: selectedAddonIds,
          date: toDateParam(selectedDate),
          time: selectedTime,
          customer: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
          },
          specialRequests: form.specialRequests || undefined,
          smsReminders: form.smsReminders,
          emailUpdates: form.emailUpdates,
        }),
      });

      const body = await res.json();

      if (!res.ok) {
        // A 409 here means the slot was taken between when the user loaded
        // availability and when they submitted -- a real race condition,
        // not a bug. Send them back to step 3 to pick again.
        setSubmitError(body.error?.message ?? "Something went wrong. Please try again.");
        if (res.status === 409) {
          setCurrentStep(3);
          setSelectedTime(null);
        }
        return;
      }

      setConfirmedBooking(body.data);
    } catch {
      setSubmitError("Couldn't reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (confirmedBooking) {
    return (
      <div className="card-elevated max-w-2xl mx-auto text-center p-10">
        <div className="w-16 h-16 rounded-full bg-success-50 text-success flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
          Booking Request Received
        </h2>
        <p className="text-text-secondary mb-2 leading-relaxed">
          Thanks, {form.firstName}! Your request for <strong>{selectedService?.name}</strong> with{" "}
          <strong>{selectedTherapist?.name}</strong> on{" "}
          <strong>
            {selectedDate?.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </strong>{" "}
          at <strong>{confirmedBooking.scheduledTimeLabel}</strong> is in.
        </p>
        <p className="text-text-secondary text-sm mb-8">
          Confirmation #{confirmedBooking.id.slice(0, 8)} · Total{" "}
          {formatPrice(confirmedBooking.totalPriceCents)}. We'll call or email{" "}
          <strong>{form.email}</strong> to confirm.
        </p>
        <a href="/" className="btn-primary inline-block">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-8">
          {STEPS.map((label, idx) => {
            const stepNum = idx + 1;
            const isActive = stepNum === currentStep;
            const isComplete = stepNum < currentStep;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      isActive || isComplete ? "bg-primary text-white" : "bg-primary-100 text-text-secondary"
                    }`}
                  >
                    {stepNum}
                  </div>
                  <span className={isActive || isComplete ? "text-primary font-medium" : "text-text-secondary"}>
                    {label}
                  </span>
                </div>
                {stepNum < STEPS.length && (
                  <div className="flex-1 h-1 bg-primary-100 mx-4">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: isComplete ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Step 1: Service */}
        {currentStep === 1 && (
          <div className="card">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Select Your Service</h2>
            <div className="space-y-6">
              {categorizedServices.map(([category, categoryServices]) => (
                <div key={category}>
                  <h3 className="text-lg font-playfair font-semibold text-primary mb-3">
                    {CATEGORY_LABELS[category] ?? category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryServices.map((service) => {
                      const isSelected = service.id === selectedServiceId;
                      return (
                        <div
                          key={service.id}
                          onClick={() => {
                            setSelectedServiceId(service.id);
                            setSelectedTherapistId(null);
                          }}
                          className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-primary shadow-gentle bg-primary-50"
                              : "border-primary-100 hover:border-primary hover:shadow-gentle"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-primary">{service.name}</h4>
                            <span className="text-accent font-semibold">{formatPrice(service.priceCents)}</span>
                          </div>
                          <p className="text-text-secondary text-sm mb-2">{service.description}</p>
                          <span className="text-xs text-text-secondary">
                            {formatDuration(service.durationMinutes)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {addOns.length > 0 && (
              <div className="mt-8 pt-6 border-t border-primary-100">
                <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Add-on Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOns.map((addon) => (
                    <label
                      key={addon.id}
                      className="flex items-center space-x-3 p-3 border border-primary-100 rounded-lg cursor-pointer hover:border-primary transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAddonIds.includes(addon.id)}
                        onChange={() => toggleAddon(addon.id)}
                        className="w-4 h-4 text-primary border-primary-200 rounded focus:ring-primary-300"
                      />
                      <span className="flex-1">
                        <span className="font-medium text-primary">{addon.name}</span>
                        <span className="text-accent font-semibold ml-2">+{formatPrice(addon.priceCents)}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Therapist */}
        {currentStep === 2 && (
          <div className="card">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Choose Your Therapist</h2>
            {qualifiedTherapists.length === 0 ? (
              <p className="text-text-secondary">No therapists are currently set up for this service.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qualifiedTherapists.map((therapist) => {
                  const isSelected = therapist.id === selectedTherapistId;
                  return (
                    <div
                      key={therapist.id}
                      onClick={() => {
                        setSelectedTherapistId(therapist.id);
                        setSelectedDate(null);
                        setSelectedTime(null);
                      }}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "border-primary shadow-gentle bg-primary-50"
                          : "border-primary-100 hover:border-primary hover:shadow-gentle"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={therapist.photoUrl}
                          alt={therapist.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-playfair font-semibold text-primary">{therapist.name}</h3>
                          <p className="text-accent text-sm">{therapist.title}</p>
                          <p className="text-xs text-text-secondary">
                            {therapist.rating} ({therapist.reviewCount} reviews)
                          </p>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm">{therapist.speciality}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Step 3: Date & Time */}
        {currentStep === 3 && (
          <div className="card">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Select Date & Time</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Choose Date</h3>
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() => goToMonth(-1)}
                    className="p-2 text-primary hover:bg-primary-50 rounded-lg transition-colors"
                    aria-label="Previous month"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h4 className="text-lg font-playfair font-semibold text-primary">
                    {MONTH_NAMES[viewMonth]} {viewYear}
                  </h4>
                  <button
                    type="button"
                    onClick={() => goToMonth(1)}
                    className="p-2 text-primary hover:bg-primary-50 rounded-lg transition-colors"
                    aria-label="Next month"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="text-center text-sm font-medium text-text-secondary py-2">
                      {d}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((date, idx) => {
                    if (!date) return <div key={idx} />;
                    const isPast = date < today;
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                    return (
                      <button
                        type="button"
                        key={idx}
                        disabled={isPast}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedTime(null);
                        }}
                        className={`h-10 rounded-lg text-sm transition-colors ${
                          isPast
                            ? "text-text-secondary/40 cursor-not-allowed"
                            : isSelected
                            ? "bg-primary text-white font-medium"
                            : "hover:bg-primary-50 text-text-primary"
                        }`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Available Times</h3>
                {!selectedDate ? (
                  <p className="text-text-secondary text-center py-8">Please select a date first</p>
                ) : loadingSlots ? (
                  <p className="text-text-secondary text-center py-8">Checking availability...</p>
                ) : availableSlots.length === 0 ? (
                  <p className="text-text-secondary text-center py-8">
                    No remaining time slots for this day — please choose another date.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {availableSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                          selectedTime === time
                            ? "bg-primary text-white border-primary"
                            : "border-primary-100 hover:border-primary text-text-primary"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Details */}
        {currentStep === 4 && (
          <div className="card">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Your Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-primary mb-2">
                    First Name *
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="special-requests" className="block text-sm font-medium text-primary mb-2">
                  Special Requests or Notes
                </label>
                <textarea
                  id="special-requests"
                  rows={4}
                  value={form.specialRequests}
                  onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                  className="form-input resize-none"
                  placeholder="Any allergies, preferences, or special requirements..."
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={form.smsReminders}
                    onChange={(e) => setForm({ ...form, smsReminders: e.target.checked })}
                    className="w-4 h-4 text-primary border-primary-200 rounded focus:ring-primary-300"
                  />
                  <span className="text-text-primary text-sm">Send SMS appointment reminders</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={form.emailUpdates}
                    onChange={(e) => setForm({ ...form, emailUpdates: e.target.checked })}
                    className="w-4 h-4 text-primary border-primary-200 rounded focus:ring-primary-300"
                  />
                  <span className="text-text-primary text-sm">
                    Receive email updates about promotions and new services
                  </span>
                </label>
              </div>

              {submitError && (
                <div className="bg-error-50 border border-error text-error text-sm rounded-lg p-4">
                  {submitError}
                </div>
              )}

              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2 text-sm">Cancellation Policy</h4>
                <p className="text-text-secondary text-sm">
                  Please provide at least 24 hours notice for cancellations. Late cancellations or
                  no-shows may be subject to a fee.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handlePrev}
            className={`btn-secondary ${currentStep === 1 ? "invisible" : ""}`}
          >
            Previous
          </button>
          <div className="flex-1" />
          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canAdvance()}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConfirm}
              disabled={submitting || !form.firstName || !form.lastName || !form.email || !form.phone}
              className="btn-accent disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? "Booking..." : "Confirm Booking"}
            </button>
          )}
        </div>
      </div>

      {/* Summary sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 card-elevated">
          <h3 className="text-xl font-playfair font-bold text-primary mb-6">Booking Summary</h3>
          <div className="space-y-4">
            {selectedService && (
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-primary">Service</h4>
                  <p className="text-text-secondary text-sm">{selectedService.name}</p>
                  <p className="text-text-secondary text-xs">{formatDuration(selectedService.durationMinutes)}</p>
                </div>
                <span className="text-accent font-semibold">{formatPrice(selectedService.priceCents)}</span>
              </div>
            )}

            {selectedAddons.length > 0 && (
              <div>
                <h4 className="font-semibold text-primary mb-1">Add-ons</h4>
                {selectedAddons.map((a) => (
                  <div key={a.id} className="flex justify-between text-sm text-text-secondary">
                    <span>{a.name}</span>
                    <span>+{formatPrice(a.priceCents)}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTherapist && (
              <div>
                <h4 className="font-semibold text-primary">Therapist</h4>
                <p className="text-text-secondary text-sm">{selectedTherapist.name}</p>
              </div>
            )}

            {selectedDate && selectedTime && (
              <div>
                <h4 className="font-semibold text-primary">Date & Time</h4>
                <p className="text-text-secondary text-sm">
                  {selectedDate.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
                </p>
                <p className="text-text-secondary text-sm">{selectedTime}</p>
              </div>
            )}

            <div className="border-t border-primary-100 pt-4 flex justify-between items-center">
              <span className="text-lg font-playfair font-semibold text-primary">Total</span>
              <span className="text-xl font-bold text-accent">{formatPrice(totalPriceCents)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
