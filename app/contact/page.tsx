import type { Metadata } from "next";
import { getFaqsForPage } from "@/lib/repositories/faqRepository";
import ContactForm from "@/components/features/ContactForm";
import ParkingInfoButton from "@/components/features/ParkingInfoButton";
import Accordion from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Essentials by Tanya.",
};

export default function ContactPage() {
  const faqs = getFaqsForPage("CONTACT");

  return (
    <div>
      <section className="py-24 px-6 bg-surface text-center">
        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
          Questions about a treatment, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card">
            <h2 className="text-xl font-playfair font-bold text-primary mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-xl font-playfair font-bold text-primary mb-6">Visit Us</h2>
            <div className="space-y-4 text-text-secondary mb-6">
              <p>123 Wellness Avenue</p>
              <p>(555) 123-4567</p>
              <p>info@essentialsbytanya.com</p>
            </div>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between max-w-xs">
                <span className="text-text-secondary">Mon – Fri</span>
                <span className="text-text-primary">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span className="text-text-secondary">Sat</span>
                <span className="text-text-primary">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span className="text-text-secondary">Sun</span>
                <span className="text-text-primary">10:00 AM – 5:00 PM</span>
              </div>
            </div>
            <ParkingInfoButton />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-playfair font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
        </div>
      </section>
    </div>
  );
}
