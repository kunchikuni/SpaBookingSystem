import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import { formatPrice, formatDuration } from "@/lib/format";
import type { OfferSeed } from "@/lib/seed-data/offers";

export default function OfferCard({ offer }: { offer: OfferSeed }) {
  const hasDiscount = offer.originalPriceCents > offer.discountedPriceCents;

  return (
    <Card hoverLift className="h-full flex flex-col">
      <div className="relative mb-4 -mx-6 -mt-6">
        <Image
          src={offer.imageUrl}
          alt={offer.title}
          width={400}
          height={220}
          className="w-full h-44 object-cover rounded-t-xl"
        />
        <Badge tone="accent" className="absolute top-3 right-3">
          {offer.badge}
        </Badge>
      </div>
      <h3 className="text-lg font-playfair font-semibold text-primary mb-2">{offer.title}</h3>
      <p className="text-text-secondary text-sm mb-3 flex-1">{offer.description}</p>
      <div className="flex items-center justify-between">
        <div>
          {hasDiscount && (
            <span className="text-text-secondary text-sm line-through mr-2">
              {formatPrice(offer.originalPriceCents)}
            </span>
          )}
          <span className="text-accent font-semibold">{formatPrice(offer.discountedPriceCents)}</span>
        </div>
        {offer.durationMinutes && (
          <span className="text-xs text-text-secondary">{formatDuration(offer.durationMinutes)}</span>
        )}
      </div>
    </Card>
  );
}
