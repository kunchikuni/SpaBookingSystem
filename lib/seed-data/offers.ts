export interface OfferSeed {
  id: string;
  title: string;
  description: string;
  originalPriceCents: number;
  discountedPriceCents: number;
  durationMinutes: number | null;
  badge: string;
  imageUrl: string;
}

export const offers: OfferSeed[] = [
  {
    id: "weekend-getaway",
    title: "Weekend Getaway",
    description: "A combined facial and massage treatment designed for a full reset.",
    originalPriceCents: 25000,
    discountedPriceCents: 19900,
    durationMinutes: 120,
    badge: "Save 20%",
    imageUrl: "/assets/img1.jpg",
  },
  {
    id: "bridal-glow",
    title: "Bridal Glow",
    description: "Extended facial, body treatment, and styling prep for your big day.",
    originalPriceCents: 35000,
    discountedPriceCents: 27500,
    durationMinutes: 210,
    badge: "Save 21%",
    imageUrl: "/assets/img2.jpg",
  },
  {
    id: "couples-retreat",
    title: "Couples Retreat",
    description: "Side-by-side massage for two in a private treatment room.",
    originalPriceCents: 30000,
    discountedPriceCents: 22500,
    durationMinutes: 60,
    badge: "Save 25%",
    imageUrl: "/assets/img3.jpg",
  },
  {
    id: "first-time-welcome",
    title: "First-Time Welcome",
    description: "New here? Any 1-hour service comes with a complimentary 15-minute extension.",
    originalPriceCents: 0,
    discountedPriceCents: 0,
    durationMinutes: null,
    badge: "First visit",
    imageUrl: "/assets/img4.jpg",
  },
  {
    id: "vip-wellness-club",
    title: "VIP Wellness Club",
    description: "Monthly membership with priority booking and member-only pricing.",
    originalPriceCents: 0,
    discountedPriceCents: 9900,
    durationMinutes: null,
    badge: "Membership",
    imageUrl: "/assets/img5.jpg",
  },
];
