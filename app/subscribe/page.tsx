import type { Metadata } from "next";
import NewsletterForm from "@/components/features/NewsletterForm";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe for exclusive offers and wellness tips from Essentials by Tanya.",
};

export default function SubscribePage() {
  return (
    <section className="py-24 px-6 bg-primary text-white min-h-[60vh] flex items-center">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold mb-4">Stay Connected with Serenity</h1>
        <p className="text-fluid-base mb-10 opacity-90">
          Subscribe to receive exclusive offers, wellness tips, and updates on our latest
          treatments.
        </p>
        <NewsletterForm variant="dark" />
      </div>
    </section>
  );
}
