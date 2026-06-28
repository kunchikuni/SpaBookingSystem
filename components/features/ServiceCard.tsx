import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import { formatPrice, formatDuration } from "@/lib/format";
import type { ServiceSeed } from "@/lib/seed-data/services";

export default function ServiceCard({ service }: { service: ServiceSeed }) {
  return (
    <Link href={`/services/${service.slug}`}>
      <Card hoverLift className="h-full flex flex-col cursor-pointer">
        <div className="relative mb-4 -mx-6 -mt-6">
          <Image
            src={service.imageUrl}
            alt={service.name}
            width={400}
            height={240}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          {service.isFeatured && (
            <Badge tone="accent" className="absolute top-3 right-3">
              Popular
            </Badge>
          )}
        </div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-playfair font-semibold text-primary">{service.name}</h3>
        </div>
        <StarRating rating={service.rating} />
        <p className="text-text-secondary text-sm my-3 flex-1">{service.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-accent font-semibold">From {formatPrice(service.priceCents)}</span>
          <span className="text-xs text-text-secondary">{formatDuration(service.durationMinutes)}</span>
        </div>
      </Card>
    </Link>
  );
}
