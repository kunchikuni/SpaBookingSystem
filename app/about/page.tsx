import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story behind Essentials by Tanya.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="py-24 px-6 bg-background text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-6">Our Story</h1>
        <p className="text-fluid-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
          Essentials by Tanya is your sanctuary for beauty, wellness, and rejuvenation — a calm,
          welcoming space designed around one simple idea: that taking care of yourself
          shouldn't feel like one more thing on your to-do list.
        </p>
      </section>

      <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
              Personalized Care
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Every treatment starts with a conversation. Our therapists tailor each session to
              your skin, your stress levels, and your goals.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
              Certified Specialists
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Our team brings decades of combined experience — see their full profiles on our{" "}
              <Link href="/therapists" className="text-accent hover:underline">
                Our Team
              </Link>{" "}
              page.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">A Calm Space</h3>
            <p className="text-text-secondary leading-relaxed">
              Warm lighting, quiet rooms, and a team that's never rushing you out the door.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-white text-center">
        <h2 className="text-fluid-2xl font-playfair font-bold mb-4">Come See for Yourself</h2>
        <p className="text-fluid-base mb-8 opacity-90">
          Book a treatment and experience the Essentials by Tanya difference.
        </p>
        <Link href="/booking" className="btn-accent text-lg px-8 py-4 inline-block">
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
