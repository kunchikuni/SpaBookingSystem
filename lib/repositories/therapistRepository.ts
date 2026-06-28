import { therapists } from "@/lib/seed-data/therapists";
import { services } from "@/lib/seed-data/services";

export function getAllTherapists() {
  return therapists;
}

export function getTherapistBySlug(slug: string) {
  const therapist = therapists.find((t) => t.slug === slug);
  if (!therapist) return null;

  const qualifiedServices = services.filter((s) => therapist.serviceIds.includes(s.id));
  return { ...therapist, qualifiedServices };
}

export function getTherapistById(id: string) {
  return therapists.find((t) => t.id === id) ?? null;
}

export function getTherapistsForService(serviceId: string) {
  return therapists.filter((t) => t.serviceIds.includes(serviceId));
}
