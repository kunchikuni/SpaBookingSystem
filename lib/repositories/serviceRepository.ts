// Reads from lib/seed-data/ in-memory for now -- see lib/db.ts for why.
// Function signatures here are what stay stable when a real DB connects;
// only the implementation bodies change.

import { services, addOns, type ServiceSeed } from "@/lib/seed-data/services";
import { therapists } from "@/lib/seed-data/therapists";

export interface ServiceListFilters {
  category?: string;
  search?: string;
}

export function getAllServices(filters: ServiceListFilters = {}) {
  const { category, search } = filters;
  return services.filter((s) => {
    const matchesCategory = !category || s.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = !search || s.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

export function getServiceBySlug(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const qualifiedTherapists = therapists.filter((t) => t.serviceIds.includes(service.id));

  return { ...service, qualifiedTherapists };
}

export function getServiceById(id: string): ServiceSeed | null {
  return services.find((s) => s.id === id) ?? null;
}

export function getAllAddOns() {
  return addOns;
}

export function getAddOnById(id: string) {
  return addOns.find((a) => a.id === id) ?? null;
}
