import type { Metadata } from "next";
import { getAllOffers } from "@/lib/repositories/offerRepository";
import OfferCard from "@/components/features/OfferCard";

export const metadata: Metadata = {
  title: "Best Offers",
  description: "Current packages and offers at Essentials by Tanya.",
};

export default function BestOffersPage() {
  const offers = getAllOffers();

  return (
    <div>
      <section className="py-24 px-6 bg-surface text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">Best Offers</h1>
        <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
          It's your time to relax — current packages and member offers.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>
    </div>
  );
}
