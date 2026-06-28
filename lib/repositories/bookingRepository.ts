// In-memory storage for now -- resets whenever the server restarts. This
// is the one repository where that actually matters operationally (real
// bookings need to survive a restart), so it's the first thing that
// should move to a real database once one is connected. Function
// signatures are written as if they were already async/DB-backed so that
// migration doesn't change any caller.

import { randomUUID } from "crypto";
import { getServiceById } from "@/lib/repositories/serviceRepository";
import { getAddOnById } from "@/lib/repositories/serviceRepository";
import { getTherapistById } from "@/lib/repositories/therapistRepository";

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";

export interface Booking {
  id: string;
  customer: Customer;
  serviceId: string;
  therapistId: string;
  scheduledStart: string; // ISO string
  scheduledTimeLabel: string; // e.g. "2:30 PM" -- matches lib/availability.ts labels
  status: BookingStatus;
  totalPriceCents: number;
  addOnIds: string[];
  specialRequests?: string;
  smsReminders: boolean;
  emailUpdates: boolean;
  createdAt: string;
}

const customers: Customer[] = [];
const bookings: Booking[] = [];

function upsertCustomer(input: Omit<Customer, "id">): Customer {
  const existing = customers.find((c) => c.email.toLowerCase() === input.email.toLowerCase());
  if (existing) {
    existing.firstName = input.firstName;
    existing.lastName = input.lastName;
    existing.phone = input.phone;
    return existing;
  }
  const created: Customer = { id: randomUUID(), ...input };
  customers.push(created);
  return created;
}

export interface CreateBookingInput {
  serviceId: string;
  therapistId: string;
  addOnIds: string[];
  date: string; // YYYY-MM-DD
  time: string; // matches a label from lib/availability.ts, e.g. "2:30 PM"
  customer: Omit<Customer, "id">;
  specialRequests?: string;
  smsReminders?: boolean;
  emailUpdates?: boolean;
}

export class BookingValidationError extends Error {}

export function createBooking(input: CreateBookingInput): Booking {
  const service = getServiceById(input.serviceId);
  if (!service) throw new BookingValidationError("Unknown service.");

  const therapist = getTherapistById(input.therapistId);
  if (!therapist) throw new BookingValidationError("Unknown therapist.");

  if (!therapist.serviceIds.includes(service.id)) {
    throw new BookingValidationError(
      `${therapist.name} doesn't perform ${service.name}. Choose a different therapist or service.`,
    );
  }

  const addOnTotal = input.addOnIds.reduce((sum, id) => {
    const addOn = getAddOnById(id);
    if (!addOn) throw new BookingValidationError(`Unknown add-on: ${id}`);
    return sum + addOn.priceCents;
  }, 0);

  const alreadyBooked = bookings.some(
    (b) =>
      b.therapistId === input.therapistId &&
      b.scheduledTimeLabel === input.time &&
      b.scheduledStart.startsWith(input.date) &&
      b.status !== "CANCELLED",
  );
  if (alreadyBooked) {
    throw new BookingValidationError(
      "That time was just taken by another booking. Please pick a different slot.",
    );
  }

  const customer = upsertCustomer(input.customer);

  const booking: Booking = {
    id: randomUUID(),
    customer,
    serviceId: service.id,
    therapistId: therapist.id,
    scheduledStart: `${input.date}T00:00:00`,
    scheduledTimeLabel: input.time,
    status: "PENDING",
    totalPriceCents: service.priceCents + addOnTotal,
    addOnIds: input.addOnIds,
    specialRequests: input.specialRequests,
    smsReminders: input.smsReminders ?? false,
    emailUpdates: input.emailUpdates ?? false,
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  return booking;
}

export function getBookingById(id: string): Booking | null {
  return bookings.find((b) => b.id === id) ?? null;
}

export function getBookedTimesForTherapistOnDate(therapistId: string, date: string): string[] {
  return bookings
    .filter(
      (b) =>
        b.therapistId === therapistId &&
        b.scheduledStart.startsWith(date) &&
        b.status !== "CANCELLED",
    )
    .map((b) => b.scheduledTimeLabel);
}
