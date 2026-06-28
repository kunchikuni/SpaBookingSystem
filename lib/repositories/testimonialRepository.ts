import { testimonials } from "@/lib/seed-data/testimonials";

export function getAllTestimonials(serviceId?: string) {
  return testimonials.filter((t) => !serviceId || t.serviceId === serviceId);
}
