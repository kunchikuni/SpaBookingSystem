import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellness Advice",
  description: "Tips from our therapists to help you get the most out of every visit.",
};

const TIPS = [
  {
    title: "Prep Your Skin Before a Facial",
    body:
      "Arrive with a clean face (no makeup) and skip exfoliating products for 48 hours beforehand. This lets your therapist see your skin's natural state and customize the treatment accordingly.",
  },
  {
    title: "Hydrate Before and After a Massage",
    body:
      "Drink water before your appointment and for the rest of the day afterward. Massage encourages circulation and releases tension from muscle tissue — staying hydrated helps your body process that more comfortably.",
  },
  {
    title: "Give Treatments Time to Work",
    body:
      "Results from facials and body treatments build over a series of visits, not just one. Ask your therapist about a recommended cadence if you're targeting something specific.",
  },
  {
    title: "Avoid Caffeine and Alcohol Before Your Visit",
    body:
      "Both can leave you more tense and dehydrated, which works against what a massage or facial is trying to do.",
  },
  {
    title: "Speak Up About Pressure and Comfort",
    body:
      "Whether it's massage pressure, water temperature, or room temperature — your therapist would always rather adjust mid-session than have you sit through something that isn't working for you.",
  },
];

export default function AdvicesPage() {
  return (
    <div>
      <section className="py-24 px-6 bg-background text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-6">Wellness Advice</h1>
        <p className="text-fluid-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
          A few simple tips from our therapists to help you get the most out of every visit.
        </p>
      </section>

      <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-4xl space-y-6">
          {TIPS.map((tip) => (
            <div key={tip.title} className="card">
              <h3 className="text-xl font-playfair font-semibold text-primary mb-3">{tip.title}</h3>
              <p className="text-text-secondary leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-white text-center">
        <h2 className="text-fluid-2xl font-playfair font-bold mb-4">
          Ready to Put These Into Practice?
        </h2>
        <Link href="/booking" className="btn-accent text-lg px-8 py-4 inline-block mt-4">
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
