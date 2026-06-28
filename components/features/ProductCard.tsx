import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import Image from "next/image";
import { formatPrice } from "@/lib/format";
import type { ProductSeed } from "@/lib/seed-data/products";

export default function ProductCard({ product }: { product: ProductSeed }) {
  return (
    <Card hoverLift className="h-full flex flex-col">
      <div className="relative mb-4 -mx-6 -mt-6">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {product.badge && (
          <Badge tone="secondary" className="absolute top-3 right-3">
            {product.badge}
          </Badge>
        )}
      </div>
      <h3 className="font-playfair font-semibold text-primary mb-1">{product.name}</h3>
      <div className="mb-2">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
      </div>
      <p className="text-accent font-semibold mt-auto">{formatPrice(product.priceCents)}</p>
    </Card>
  );
}
