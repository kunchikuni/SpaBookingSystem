import { galleryItems } from "@/lib/seed-data/gallery";

export function getAllGalleryItems(category?: string) {
  return galleryItems.filter((g) => !category || g.category.toLowerCase() === category.toLowerCase());
}
