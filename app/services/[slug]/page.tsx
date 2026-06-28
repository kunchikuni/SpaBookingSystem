import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/repositories/serviceRepository";
import { getFaqsForPage } from "@/lib/repositories/faqRepository";
import { formatPrice, formatDuration } from "@/lib/format";
import { siteConfig } from "@/lib/site-config";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import Accordion from "@/components/ui/Accordion";

// Dynamic route -- fixes a real legacy bug. The old site had exactly one
// static service_detail.jsx page, so every "Learn More" link landed on the
// same content regardless of which service you clicked.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.description };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqs = getFaqsForPage("SERVICE_DETAIL");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      price: (service.priceCents / 100).toFixed(2),
      priceCurrency: "USD",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="py-6 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-text-secondary">/</span>
            <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">
              Services
            </Link>
            <span className="text-text-secondary">/</span>
            <span className="text-primary font-medium">{service.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <Image
              src={service.imageUrl}
              alt={service.name}
              width={600}
              height={500}
              className="w-full h-96 object-cover rounded-xl"
            />
            {service.isFeatured && (
              <Badge tone="accent" className="absolute top-4 right-4">
                Popular
              </Badge>
            )}
          </div>
          <div>
            <h1 className="text-fluid-2xl font-playfair font-bold text-primary mb-3">{service.name}</h1>
            <div className="mb-4">
              <StarRating rating={service.rating} size="md" />
            </div>
            <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
            <div className="flex items-center gap-6 mb-6">
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wide">From</p>
                <p className="text-2xl font-playfair font-bold text-accent">
                  {formatPrice(service.priceCents)}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wide">Duration</p>
                <p className="text-lg text-text-primary">{formatDuration(service.durationMinutes)}</p>
              </div>
            </div>
            <Link href={`/booking?service=${service.id}`} className="btn-primary inline-block">
              Book This Treatment
            </Link>
          </div>
        </div>
      </section>

      {service.tiers && service.tiers.length > 0 && (
        <section className="py-12 px-6 bg-surface">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">
              Pricing Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.tiers.map((tier) => (
                <div key={tier.name} className="card text-center">
                  <h3 className="text-lg font-playfair font-semibold text-primary mb-2">{tier.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-1">{formatPrice(tier.priceCents)}</p>
                  <p className="text-xs text-text-secondary mb-3">{formatDuration(tier.durationMinutes)}</p>
                  <p className="text-sm text-text-secondary">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.qualifiedTherapists.length > 0 && (
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">
              Performed By
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.qualifiedTherapists.map((t) => (
                <Link
                  href={`/therapists/${t.slug}`}
                  key={t.id}
                  className="card text-center hover-lift block"
                >
                  <Image
                    src={t.photoUrl}
                    alt={t.name}
                    width={200}
                    height={200}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                  />
                  <p className="font-playfair font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 px-6 bg-surface">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">
            Common Questions
          </h2>
          <Accordion
            items={faqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))}
          />
        </div>
      </section>
    </div>
  );
}
