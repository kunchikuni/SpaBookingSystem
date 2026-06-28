import type { Metadata } from "next";
import { getAllTherapists } from "@/lib/repositories/therapistRepository";
import TherapistCard from "@/components/features/TherapistCard";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the certified therapists at Essentials by Tanya.",
};

export default function TherapistsPage() {
  const therapists = getAllTherapists();

  return (
    <div>
      <section className="py-24 px-6 bg-surface text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">
          Meet Our Expert Therapists
        </h1>
        <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
          Certified professionals bringing years of experience and genuine care to every
          treatment.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
      </section>
    </div>
  );
}
