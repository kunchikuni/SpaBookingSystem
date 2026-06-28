import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import StarRating from "@/components/ui/StarRating";
import type { TherapistSeed } from "@/lib/seed-data/therapists";

export default function TherapistCard({ therapist }: { therapist: TherapistSeed }) {
  return (
    <Link href={`/therapists/${therapist.slug}`}>
      <Card hoverLift className="text-center cursor-pointer h-full">
        <div className="relative mb-6">
          <Image
            src={therapist.photoUrl}
            alt={therapist.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <h3 className="text-xl font-playfair font-semibold text-primary mb-1">{therapist.name}</h3>
        <p className="text-accent font-medium mb-2 text-sm">{therapist.title}</p>
        <div className="flex justify-center mb-3">
          <StarRating rating={therapist.rating} reviewCount={therapist.reviewCount} />
        </div>
        <p className="text-text-secondary text-sm">{therapist.speciality}</p>
      </Card>
    </Link>
  );
}
