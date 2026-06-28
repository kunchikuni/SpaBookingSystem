// Single source of truth for therapist content -- see services.ts for the
// pattern explanation. This consolidates content that was hand-duplicated
// across 5 different legacy page files.

export interface TherapistSeed {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  speciality: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  photoUrl: string;
  serviceIds: string[]; // which services this therapist is qualified to perform
}

export const therapists: TherapistSeed[] = [
  {
    id: "sophia",
    slug: "sophia-martinez",
    name: "Dr. Sophia Martinez",
    title: "Lead Aesthetician & Skincare Specialist",
    bio:
      "Dr. Sophia Martinez leads our skincare team with 15+ years of clinical aesthetics experience. She specializes in advanced facial treatments, anti-aging protocols, and personalized skincare plans designed around each client's unique skin chemistry.",
    speciality: "Skincare & Anti-Aging",
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 127,
    photoUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop",
    serviceIds: ["an-essentials-must", "essentials-acne-attack", "growth-factor-anti-ageing", "essentials-skin-quench", "brightening-glow", "acne-attack-electrical", "hydrating-therapy-electrical", "detox-facial-electrical", "rice-bran-ao", "lacti-firm-30-10", "lacti-firm-90-10", "alpa-peel", "retistore", "retistore-plus", "beta-peel-retinol", "beta-peel-plus", "azeac-peel", "dermaplaning", "full-face-microneedling", "half-face-microneedling"],
  },
  {
    id: "james",
    slug: "james-thompson",
    name: "James Thompson",
    title: "Licensed Massage Therapist",
    bio:
      "James Thompson is a licensed massage therapist with 12+ years of experience in therapeutic, deep tissue, and relaxation massage. He takes a tailored approach to every session, focusing on relieving tension and restoring mobility.",
    speciality: "Therapeutic & Deep Tissue Massage",
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 94,
    photoUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2940&auto=format&fit=crop",
    serviceIds: ["essentials-soothing-massage", "deep-muscle-reliever", "heat-therapy-massage", "back-neck-soothing", "deep-back-neck", "scalp-neck-shoulder", "lower-limbs-massage", "indian-crown-massage"],
  },
  {
    id: "lisa",
    slug: "lisa-chen",
    name: "Lisa Chen",
    title: "Wellness & Aromatherapy Specialist",
    bio:
      "Lisa Chen brings 10+ years of experience in holistic wellness and aromatherapy. She blends essential-oil therapies with mindful touch to help clients de-stress, rebalance, and leave feeling renewed.",
    speciality: "Aromatherapy & Holistic Wellness",
    experienceYears: 10,
    rating: 4.9,
    reviewCount: 156,
    photoUrl:
      "https://images.unsplash.com/photo-1594824488675-58d12c0d5c8a?q=80&w=2787&auto=format&fit=crop",
    serviceIds: ["aroma-infused-massage", "bamboo-massage", "mamas-prenatal-treat", "vajacial", "vaj-peel", "vaj-microneedling", "eyebrow-shape-tint", "eyebrow-shape", "eyelash-tint", "eyebrow-tint"],
  },
  {
    id: "michael",
    slug: "michael-rodriguez",
    name: "Michael Rodriguez",
    title: "Body Treatment Specialist",
    bio:
      "Michael Rodriguez specializes in full-body treatments, with 8+ years of experience in body wraps, exfoliation therapies, and detox protocols that leave skin renewed and refreshed.",
    speciality: "Body Wraps & Detox Treatments",
    experienceYears: 8,
    rating: 4.7,
    reviewCount: 82,
    photoUrl:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2787&auto=format&fit=crop",
    serviceIds: ["body-plan-6", "body-plan-8", "sauna-heat-therapy", "body-polish", "full-body-clean-up", "full-intimate-wax", "front-intimate-wax", "intimate-line", "full-leg-wax", "three-quarter-leg-wax", "half-leg-wax", "full-arm-wax", "underarm-wax", "back-wax", "chest-wax", "stomach-wax", "full-face-wax", "nose-wax", "chin-wax"],
  },
  {
    id: "emma",
    slug: "emma-williams",
    name: "Emma Williams",
    title: "Nail Care & Manicure Expert",
    bio:
      "Emma Williams is our nail care expert, with 6+ years of experience in nail artistry, manicure, and pedicure treatments. She is known for meticulous attention to detail and a steady, gentle hand.",
    speciality: "Nail Artistry & Hand Care",
    experienceYears: 6,
    rating: 4.8,
    reviewCount: 73,
    photoUrl:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2787&auto=format&fit=crop",
    serviceIds: ["acrylic-natural-tips", "acrylic-french-tips", "acrylic-overlay-hard-gel", "sculptured-nails", "acrylic-overlay-gel", "acrylic-backfill", "acrylic-backfill-gel", "nail-fix", "stick-ons-normal-polish", "stick-ons-gel", "3d-nail-art", "nail-hardener-polish", "french-shellac-polish", "ombre-tips", "essentials-manicure", "essentials-manicure-gel", "french-manicure", "paraffin-manicure", "cnd-shellac", "cnd-vinylux", "essentials-foot-works", "french-pedicure", "paraffin-pedicure", "gel-pedicure", "acrylic-pedicure", "spalicious-foot-peel", "acrylic-toe-nails", "gel-paraffin-pedicure"]
  },
  {
    id: "david",
    slug: "david-park",
    name: "David Park",
    title: "Sports Massage Therapist",
    bio:
      "David Park brings 9+ years of experience in sports massage and rehabilitation therapy. He works with athletes and active clients alike to relieve muscle tension, speed recovery, and improve range of motion.",
    speciality: "Sports Therapy & Rehabilitation",
    experienceYears: 9,
    rating: 4.9,
    reviewCount: 108,
    photoUrl:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2787&auto=format&fit=crop",
    serviceIds: ["deep-muscle-reliever", "heat-therapy-massage", "essentials-soothing-massage"],
  },
];
