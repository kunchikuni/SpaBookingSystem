// Single source of truth for business info used across metadata, JSON-LD
// structured data, and the footer -- previously this was hardcoded
// separately in Footer.tsx and would need to be hardcoded again for SEO.

export const siteConfig = {
  name: "Essentials by Tanya",
  description:
    "Your sanctuary for beauty, wellness, and rejuvenation. Book treatments, meet our therapists, and explore our spa boutique.",
  url: "https://essentialsbytanya.example.com", // placeholder -- replace once a real domain is live
  address: {
    street: "123 Wellness Avenue",
    locality: "Your City",
    region: "Your State",
  },
  phone: "(555) 123-4567",
  email: "info@essentialsbytanya.com",
  hours: [
    { day: "Monday-Friday", open: "09:00", close: "20:00" },
    { day: "Saturday", open: "08:00", close: "18:00" },
    { day: "Sunday", open: "10:00", close: "17:00" },
  ],
};
