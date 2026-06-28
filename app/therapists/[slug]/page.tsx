import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTherapistBySlug } from "@/lib/repositories/therapistRepository";
import StarRating from "@/components/ui/StarRating";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const therapist = getTherapistBySlug(slug);
  if (!therapist) return {};
  return { title: therapist.name, description: therapist.bio };
}

export default async function TherapistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const therapist = getTherapistBySlug(slug);
  if (!therapist) notFound();

  return (
    <div>
      <section className="py-6 px-6 bg-surface">
        <div className="container mx-auto max-w-5xl">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-text-secondary">/</span>
            <Link href="/therapists" className="text-text-secondary hover:text-primary transition-colors">
              Our Team
            </Link>
            <span className="text-text-secondary">/</span>
            <span className="text-primary font-medium">{therapist.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <Image
            src={therapist.photoUrl}
            alt={therapist.name}
            width={500}
            height={500}
            className="w-full h-96 object-cover rounded-xl"
          />
          <div>
            <h1 className="text-fluid-2xl font-playfair font-bold text-primary mb-2">
              {therapist.name}
            </h1>
            <p className="text-accent font-medium mb-3">{therapist.title}</p>
            <div className="mb-4">
              <StarRating rating={therapist.rating} reviewCount={therapist.reviewCount} size="md" />
            </div>
            <p className="text-text-secondary leading-relaxed mb-2">{therapist.bio}</p>
            <p className="text-sm text-text-secondary mb-6">
              Speciality: <span className="text-text-primary">{therapist.speciality}</span> ·{" "}
              {therapist.experienceYears}+ years experience
            </p>
            <Link href="/booking" className="btn-primary inline-block">
              Book with {therapist.name.split(" ")[0]}
            </Link>
          </div>
        </div>
      </section>

      {therapist.qualifiedServices.length > 0 && (
        <section className="py-12 px-6 bg-surface">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-6 text-center">
              Services {therapist.name.split(" ")[0]} Performs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {therapist.qualifiedServices.map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`} className="card hover-lift block">
                  <p className="font-playfair font-semibold text-primary">{s.name}</p>
                  <p className="text-sm text-text-secondary">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
