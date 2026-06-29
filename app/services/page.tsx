import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/repositories/serviceRepository";
import ServiceCard from "@/components/features/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Browse facials, massages, and body treatments at Essentials by Tanya.",
};

const CATEGORIES = [
  { value: "", label: "All" },
  { value: "FACIAL", label: "Facials" },
  { value: "FACIAL_ELECTRICAL", label: "Facial Electricals" },
  { value: "MASSAGE", label: "Massages" },
  { value: "BODY", label: "Body" },
  { value: "WAXING", label: "Waxing" },
  { value: "CHEMICAL_PEEL", label: "Chemical Peels" },
  { value: "SPECIALIZED", label: "Specialized" },
  { value: "VAJACIAL", label: "Vajacial" },
  { value: "LASHES_BROWS", label: "Lashes & Brows" },
  { value: "NAILS", label: "Artificial Nails" },
  { value: "MANICURE", label: "Manicure" },
  { value: "PEDICURE", label: "Pedicure" },
  { value: "PACKAGE", label: "Packages" },
];

const CATEGORY_LABELS: Record<string, string> = {
  FACIAL: "Facials",
  FACIAL_ELECTRICAL: "Facial Electricals",
  MASSAGE: "Massages",
  BODY: "Body",
  WAXING: "Waxing",
  CHEMICAL_PEEL: "Chemical Peels",
  SPECIALIZED: "Specialized Treatments",
  VAJACIAL: "Vajacial",
  LASHES_BROWS: "Lashes & Brows",
  NAILS: "Artificial Nails",
  MANICURE: "Manicure",
  PEDICURE: "Pedicure",
  PACKAGE: "Packages",
};

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const services = getAllServices({ category });

  const grouped = new Map<string, typeof services>();
  for (const service of services) {
    const list = grouped.get(service.category) ?? [];
    list.push(service);
    grouped.set(service.category, list);
  }

  return (
    <div>
      <section className="py-24 px-6 bg-surface text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">Our Services</h1>
        <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
          Every treatment is performed by a therapist qualified specifically for it — pick a
          service to see who's available.
        </p>
      </section>

      <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {CATEGORIES.map((c) => (
              <a
                key={c.value}
                href={c.value ? `/services?category=${c.value}` : "/services"}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  (category ?? "") === c.value
                    ? "bg-primary text-white"
                    : "bg-background text-text-secondary hover:bg-primary-50"
                }`}
              >
                {c.label}
              </a>
            ))}
          </div>

          <div className="space-y-20">
            {Array.from(grouped.entries()).map(([cat, catServices]) => (
              <div key={cat}>
                <h2 className="text-2xl font-playfair font-bold text-primary mb-8 text-center underline decoration-secondary underline-offset-8">
                  {CATEGORY_LABELS[cat] ?? cat}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {catServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {services.length === 0 && (
            <p className="text-center text-text-secondary py-12">No services in this category yet.</p>
          )}

          <div className="text-center mt-16">
            <Link href="/booking" className="btn-primary">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
