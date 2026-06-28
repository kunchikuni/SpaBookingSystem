export interface FaqSeed {
  id: string;
  question: string;
  answer: string;
  page: "GENERAL" | "CONTACT" | "SERVICE_DETAIL";
  sortOrder: number;
}

export const faqs: FaqSeed[] = [
  // Contact page FAQs
  {
    id: "c1",
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit begins with a consultation to understand your needs and preferences. We'll discuss your wellness goals, any concerns, and recommend the best treatments for you. Please arrive 15 minutes early to complete our intake forms and enjoy our relaxation area.",
    page: "CONTACT",
    sortOrder: 1,
  },
  {
    id: "c2",
    question: "What is your cancellation policy?",
    answer:
      "We require 24-hour notice for cancellations or rescheduling. Cancellations made less than 24 hours in advance may be subject to a 50% service charge. No-shows will be charged the full service amount.",
    page: "CONTACT",
    sortOrder: 2,
  },
  {
    id: "c3",
    question: "Do you offer gift certificates?",
    answer:
      "Yes! Gift certificates are available for individual services, treatment packages, or monetary amounts. They can be purchased online or in-person and are valid for one year from the date of purchase.",
    page: "CONTACT",
    sortOrder: 3,
  },
  {
    id: "c4",
    question: "What should I bring to my appointment?",
    answer:
      "Just bring yourself! We provide all necessary linens, robes, and slippers. For facial treatments, please arrive with clean skin (no makeup). We recommend avoiding caffeine and alcohol before your appointment for the best experience.",
    page: "CONTACT",
    sortOrder: 4,
  },
  {
    id: "c5",
    question: "Is parking available?",
    answer:
      "Yes, we offer complimentary valet parking for all clients. Street parking is also available, and there's a public parking garage two blocks away. Our location is easily accessible by public transportation as well.",
    page: "CONTACT",
    sortOrder: 5,
  },
  // Service detail FAQs (general enough to show on any service's page)
  {
    id: "s1",
    question: "How often should I book this treatment?",
    answer:
      "For most facial and massage treatments, we recommend every 4-6 weeks to maintain results while letting your body's natural renewal cycle complete. Your therapist can suggest a cadence suited to your specific goals.",
    page: "SERVICE_DETAIL",
    sortOrder: 1,
  },
  {
    id: "s2",
    question: "Are there any side effects or downtime?",
    answer:
      "Most of our treatments have minimal to no downtime. Some clients experience slight redness after facials, which typically subsides within 1-2 hours. You can return to normal activities immediately afterward.",
    page: "SERVICE_DETAIL",
    sortOrder: 2,
  },
  {
    id: "s3",
    question: "Can treatments be customized for my specific needs?",
    answer:
      "Absolutely. Every treatment is adapted to your skin type, muscle tension, or specific concerns during your consultation with the therapist.",
    page: "SERVICE_DETAIL",
    sortOrder: 3,
  },
];
