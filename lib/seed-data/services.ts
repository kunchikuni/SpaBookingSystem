// Single source of truth for service content. Consumed two ways:
//  1. lib/repositories/serviceRepository.ts reads this directly (no live DB
//     connected yet -- see docs/ARCHITECTURE.md).
//  2. prisma/seed.ts writes this same data into a real database once one
//     is connected, so the two paths never drift apart.
//
// Fixes a real bug from the legacy site: Anti-Aging Facial was listed at
// $200 on the services catalog page and $150 in the booking wizard --
// the same service, two different hardcoded prices in two files. There's
// exactly one price now because there's exactly one record.

export type ServiceCategory = "FACIAL" | "MASSAGE" | "BODY" | "PACKAGE";

export interface ServiceTierSeed {
  name: string;
  priceCents: number;
  durationMinutes: number;
  description: string;
}

export interface ServiceSeed {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  durationMinutes: number;
  priceCents: number;
  imageUrl: string;
  rating: number;
  isFeatured: boolean;
  tiers?: ServiceTierSeed[];
}

export const services: ServiceSeed[] = [
  {
    id: "signature-facial",
    slug: "signature-facial",
    name: "Signature Facial",
    category: "FACIAL",
    description:
      "Customized facial treatment using premium organic products to cleanse, exfoliate, and nourish your skin for a radiant glow.",
    durationMinutes: 60,
    priceCents: 12000,
    imageUrl: "/assets/img1(4).jpg",
    rating: 4.9,
    isFeatured: true,
    tiers: [
      {
        name: "Essential",
        priceCents: 12000,
        durationMinutes: 60,
        description: "60-minute treatment with standard customization and professional-grade products.",
      },
      {
        name: "Premium",
        priceCents: 16500,
        durationMinutes: 75,
        description: "75-minute treatment with extended facial massage, premium products, and enhanced customization.",
      },
      {
        name: "Luxury",
        priceCents: 22000,
        durationMinutes: 90,
        description: "90-minute treatment with LED light therapy, luxury products, and take-home skincare samples.",
      },
    ],
  },
  {
    id: "anti-aging-facial",
    slug: "anti-aging-facial",
    name: "Anti-Aging Facial",
    category: "FACIAL",
    description:
      "Advanced facial treatment targeting fine lines and wrinkles with peptides and collagen-boosting ingredients.",
    durationMinutes: 75,
    priceCents: 20000,
    imageUrl: "/assets/img9.jpg",
    rating: 4.8,
    isFeatured: false,
  },
  {
    id: "deep-tissue-massage",
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "MASSAGE",
    description:
      "Therapeutic massage targeting deep muscle layers to relieve chronic tension and promote healing and recovery.",
    durationMinutes: 90,
    priceCents: 15000,
    imageUrl: "/assets/img4(2).jpg",
    rating: 4.8,
    isFeatured: true,
  },
  {
    id: "swedish-massage",
    slug: "swedish-massage",
    name: "Swedish Massage",
    category: "MASSAGE",
    description: "Relaxing full-body massage with gentle techniques to ease everyday tension.",
    durationMinutes: 60,
    priceCents: 12000,
    imageUrl: "/assets/img2.jpg",
    rating: 4.7,
    isFeatured: false,
  },
  {
    id: "hot-stone-massage",
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    category: "MASSAGE",
    description: "Relaxing massage using heated stones to melt away tension and promote deep muscle relaxation.",
    durationMinutes: 80,
    priceCents: 16500,
    imageUrl: "/assets/img2.jpg",
    rating: 4.9,
    isFeatured: false,
  },
  {
    id: "aromatherapy-massage",
    slug: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    category: "MASSAGE",
    description:
      "Relaxing massage with essential oils to enhance mood, reduce stress, and promote overall well-being.",
    durationMinutes: 60,
    priceCents: 13500,
    imageUrl: "/assets/img10.jpg",
    rating: 4.6,
    isFeatured: false,
  },
  {
    id: "body-renewal-wrap",
    slug: "body-renewal-wrap",
    name: "Body Renewal Wrap",
    category: "BODY",
    description:
      "Luxurious full-body treatment with exfoliation, nourishing mask, and moisturizing for silky smooth skin.",
    durationMinutes: 75,
    priceCents: 18000,
    imageUrl: "/assets/img6.jpg",
    rating: 4.7,
    isFeatured: false,
  },
];

export interface AddOnSeed {
  id: string;
  name: string;
  priceCents: number;
}

export const addOns: AddOnSeed[] = [
  { id: "aromatherapy", name: "Aromatherapy Enhancement", priceCents: 2500 },
  { id: "hot-stones", name: "Hot Stone Therapy", priceCents: 3500 },
];
