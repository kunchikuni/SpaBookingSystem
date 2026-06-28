import type { Metadata } from "next";
import { getAllServices, getAllAddOns } from "@/lib/repositories/serviceRepository";
import { getAllTherapists } from "@/lib/repositories/therapistRepository";
import BookingWizard from "@/components/features/BookingWizard";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Schedule your treatment at Essentials by Tanya.",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  // Fetched directly from the repository layer (this is a Server
  // Component) -- the client component only hits the API for the parts
  // that genuinely need a round trip: availability and submitting.
  const services = getAllServices();
  const therapists = getAllTherapists();
  const addOns = getAllAddOns();

  return (
    <div>
      <section className="py-6 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-text-secondary hover:text-primary transition-colors">
              Home
            </a>
            <span className="text-text-secondary">/</span>
            <span className="text-primary font-medium">Book Appointment</span>
          </nav>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">
              Book Your Appointment
            </h1>
            <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
              Schedule your perfect spa experience with our easy booking system
            </p>
          </div>

          <BookingWizard
            services={services}
            therapists={therapists}
            addOns={addOns}
            preselectedServiceId={service}
          />
        </div>
      </section>
    </div>
  );
}
