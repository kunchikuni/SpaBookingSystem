import type { Metadata } from "next";
import { getAllServices } from "@/lib/repositories/serviceRepository";
import ServiceCard from "@/components/features/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Browse facials, massages, and body treatments at Essentials by Tanya.",
};

const CATEGORIES = [
  { value: "", label: "All" },
  { value: "FACIAL", label: "Facial" },
  { value: "MASSAGE", label: "Massage" },
  { value: "BODY", label: "Body" },
];

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const services = getAllServices({ category });

  return (
    <div>
      <section className="py-24 px-6 bg-surface text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">Our Services</h1>
        <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
          Every treatment is performed by a therapist qualified specifically for it — pick a
          service to see who's available.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {CATEGORIES.map((c) => (
              <a
                key={c.value}
                href={c.value ? `/services?category=${c.value}` : "/services"}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  (category ?? "") === c.value
                    ? "bg-primary text-white"
                    : "bg-surface text-text-secondary hover:bg-primary-50"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {services.length === 0 && (
            <p className="text-center text-text-secondary py-12">No services in this category yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
