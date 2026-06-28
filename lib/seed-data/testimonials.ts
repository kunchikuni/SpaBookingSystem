export interface TestimonialSeed {
  id: string;
  customerName: string;
  role: string | null;
  quote: string;
  rating: number;
  avatarUrl: string | null;
  serviceId: string | null;
}

export const testimonials: TestimonialSeed[] = [
  {
    id: "t1",
    customerName: "Sarah Johnson",
    role: "Regular Client",
    quote:
      "I've been coming here for two years and every visit feels just as good as the first. The team genuinely remembers what you like.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2787&auto=format&fit=crop",
    serviceId: "signature-facial",
  },
  {
    id: "t2",
    customerName: "Michael Chen",
    role: "Business Executive",
    quote:
      "Professional service and exceptional results. My skin has never looked better after their facial treatments.",
    rating: 5,
    avatarUrl: null,
    serviceId: "signature-facial",
  },
  {
    id: "t3",
    customerName: "Emma Rodriguez",
    role: "Wellness Enthusiast",
    quote:
      "A true sanctuary of wellness. The massage therapy helped me recover from months of stress and tension.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    serviceId: "deep-tissue-massage",
  },
];
