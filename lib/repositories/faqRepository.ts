import { faqs } from "@/lib/seed-data/faqs";

export function getFaqsForPage(page: "GENERAL" | "CONTACT" | "SERVICE_DETAIL") {
  return faqs.filter((f) => f.page === page).sort((a, b) => a.sortOrder - b.sortOrder);
}
