import type { Metadata } from "next";
import { getAllProducts } from "@/lib/repositories/productRepository";
import ProductCard from "@/components/features/ProductCard";

export const metadata: Metadata = {
  title: "Products",
  description: "Skincare and wellness products from Essentials by Tanya.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string }>;
}) {
  const { category, sort } = await searchParams;
  const products = getAllProducts({
    category,
    sort: sort as "price-asc" | "price-desc" | "rating" | undefined,
  });

  return (
    <div>
      <section className="py-24 px-6 bg-surface text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">Our Products</h1>
        <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
          Take the spa experience home with you.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
