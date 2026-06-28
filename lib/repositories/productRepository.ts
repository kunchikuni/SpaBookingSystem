import { products } from "@/lib/seed-data/products";

export interface ProductListFilters {
  category?: string;
  sort?: "price-asc" | "price-desc" | "rating";
}

export function getAllProducts(filters: ProductListFilters = {}) {
  let result = products.filter(
    (p) => !filters.category || p.category.toLowerCase() === filters.category.toLowerCase(),
  );

  if (filters.sort === "price-asc") result = [...result].sort((a, b) => a.priceCents - b.priceCents);
  if (filters.sort === "price-desc") result = [...result].sort((a, b) => b.priceCents - a.priceCents);
  if (filters.sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

  return result;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}
