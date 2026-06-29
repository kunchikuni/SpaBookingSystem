import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/format";
import type { ServiceSeed } from "@/lib/seed-data/services";

export default function ServiceCard({ service }: { service: ServiceSeed }) {
  return (
    <div className="bg-background h-full flex flex-col">
      <Link href={`/services/${service.slug}`} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/services/${service.slug}`}>
          <h3 className="text-lg font-playfair text-text-primary mb-2 hover:text-primary transition-colors">
            {service.name}
          </h3>
        </Link>
        <p className="font-playfair text-secondary text-sm uppercase tracking-wide mb-3">
          Starts at {formatPrice(service.priceCents)}
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
          {service.description}
        </p>
        <Link
          href={`/booking?service=${service.id}`}
          className="self-start bg-secondary-100 text-text-primary text-xs font-medium uppercase tracking-wider px-6 py-3 hover:bg-secondary-200 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
