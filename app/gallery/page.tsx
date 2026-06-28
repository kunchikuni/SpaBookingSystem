import type { Metadata } from "next";
import Image from "next/image";
import { getAllGalleryItems } from "@/lib/repositories/galleryRepository";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look inside Essentials by Tanya.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const items = getAllGalleryItems(category);

  return (
    <div>
      <section className="py-24 px-6 bg-surface text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">Gallery</h1>
        <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
          A look inside our space.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-xl group">
              <Image
                src={item.imageUrl}
                alt={item.altText}
                width={500}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
