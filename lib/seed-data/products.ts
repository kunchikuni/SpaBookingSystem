export interface ProductSeed {
  id: string;
  slug: string;
  name: string;
  category: string;
  priceCents: number;
  rating: number;
  reviewCount: number;
  badge: string | null;
  imageUrl: string;
}

export const products: ProductSeed[] = [
  {
    id: "hydrating-cleanser",
    slug: "hydrating-cleanser",
    name: "Hydrating Gel Cleanser",
    category: "skincare",
    priceCents: 3200,
    rating: 4.7,
    reviewCount: 41,
    badge: "Bestseller",
    imageUrl: "/assets/img1.jpg",
  },
  {
    id: "vitamin-c-serum",
    slug: "vitamin-c-serum",
    name: "Brightening Vitamin C Serum",
    category: "skincare",
    priceCents: 4800,
    rating: 4.8,
    reviewCount: 67,
    badge: "New",
    imageUrl: "/assets/img2.jpg",
  },
  {
    id: "calming-clay-mask",
    slug: "calming-clay-mask",
    name: "Calming Clay Mask",
    category: "skincare",
    priceCents: 2800,
    rating: 4.6,
    reviewCount: 29,
    badge: null,
    imageUrl: "/assets/img3.jpg",
  },
  {
    id: "lavender-massage-oil",
    slug: "lavender-massage-oil",
    name: "Lavender Aromatherapy Massage Oil",
    category: "wellness",
    priceCents: 2400,
    rating: 4.9,
    reviewCount: 53,
    badge: "Bestseller",
    imageUrl: "/assets/img6.jpg",
  },
  {
    id: "spa-candle-set",
    slug: "spa-candle-set",
    name: "Spa Candle Set (3-pack)",
    category: "wellness",
    priceCents: 3600,
    rating: 4.5,
    reviewCount: 22,
    badge: null,
    imageUrl: "/assets/img9.jpg",
  },
  {
    id: "mineral-spf-moisturizer",
    slug: "mineral-spf-moisturizer",
    name: "Mineral SPF 30 Daily Moisturizer",
    category: "skincare",
    priceCents: 3800,
    rating: 4.7,
    reviewCount: 36,
    badge: null,
    imageUrl: "/assets/img10.jpg",
  },
];
