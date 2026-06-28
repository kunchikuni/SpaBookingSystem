import Link from "next/link";
import Image from "next/image";
import { getAllServices } from "@/lib/repositories/serviceRepository";
import { getAllTherapists } from "@/lib/repositories/therapistRepository";
import { getAllTestimonials } from "@/lib/repositories/testimonialRepository";
import ServiceCard from "@/components/features/ServiceCard";
import StarRating from "@/components/ui/StarRating";
import NewsletterForm from "@/components/features/NewsletterForm";

export default function Home() {
  const featuredServices = getAllServices().filter((s) => s.isFeatured).slice(0, 3);
  const therapists = getAllTherapists().slice(0, 3);
  const testimonials = getAllTestimonials();

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 bg-primary text-white text-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-4">Essentials by Tanya</p>
          <h1 className="text-fluid-3xl font-playfair font-bold mb-6">
            Your sanctuary for beauty, wellness, and rejuvenation
          </h1>
          <p className="text-fluid-base opacity-90 mb-8 leading-relaxed">
            Facials, massage, and body treatments — personalized to you, performed by certified
            therapists who actually have time for you.
          </p>
          <Link href="/booking" className="btn-accent text-lg px-8 py-4 inline-block">
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Featured services */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
              Featured Treatments
            </h2>
            <p className="text-fluid-base text-text-secondary">Our most-loved services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="card">
                <StarRating rating={t.rating} />
                <p className="text-text-secondary leading-relaxed my-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  {t.avatarUrl ? (
                    <Image
                      src={t.avatarUrl}
                      alt={t.customerName}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-medium">
                      {t.customerName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-text-primary text-sm">{t.customerName}</p>
                    {t.role && <p className="text-xs text-text-secondary">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
              Meet Our Expert Therapists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapists.map((t) => (
              <div key={t.id} className="text-center group">
                <Image
                  src={t.photoUrl}
                  alt={t.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-6 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-xl font-playfair font-semibold text-primary mb-2">{t.name}</h3>
                <p className="text-accent font-medium mb-3">{t.title}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/therapists" className="btn-primary">
              Meet All Therapists
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-fluid-2xl font-playfair font-bold mb-4">
            Stay Connected with Serenity
          </h2>
          <p className="text-fluid-base mb-8 opacity-90">
            Subscribe to receive exclusive offers, wellness tips, and updates on our latest
            treatments.
          </p>
          <NewsletterForm variant="dark" />
        </div>
      </section>
    </div>
  );
}
