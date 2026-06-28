import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/repositories/serviceRepository";
import { formatPrice, formatDuration } from "@/lib/format";
import PriceListRow from "@/components/ui/PriceListRow";
import Badge from "@/components/ui/Badge";

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

const CATEGORY_LABELS: Record<string, string> = {
  FACIAL: "Facials",
  MASSAGE: "Massages",
  BODY: "Body treatments",
  PACKAGE: "Packages",
};

const RIBBON_BY_CATEGORY: Record<string, "primary" | "secondary" | "accent"> = {
  FACIAL: "secondary",
  MASSAGE: "primary",
  BODY: "accent",
  PACKAGE: "primary",
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

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
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

          <div className="space-y-12">
            {Array.from(grouped.entries()).map(([cat, catServices]) => (
              <div key={cat}>
                <h2 className="text-2xl font-playfair font-bold text-primary mb-5 underline decoration-secondary underline-offset-8">
                  {CATEGORY_LABELS[cat] ?? cat}
                </h2>
                <div className="space-y-3">
                  {catServices.map((service) => (
                    <PriceListRow
                      key={service.id}
                      name={service.name}
                      detail={formatDuration(service.durationMinutes)}
                      price={formatPrice(service.priceCents)}
                      ribbonTone={RIBBON_BY_CATEGORY[cat] ?? "primary"}
                      href={`/services/${service.slug}`}
                      badge={
                        service.isFeatured ? (
                          <Badge tone="accent" className="text-[10px]">
                            Popular
                          </Badge>
                        ) : undefined
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {services.length === 0 && (
            <p className="text-center text-text-secondary py-12">No services in this category yet.</p>
          )}

          <div className="text-center mt-12">
            <Link href="/booking" className="btn-primary">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
