"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone") || undefined,
          serviceInterest: formData.get("serviceInterest") || undefined,
          preferredContactMethod: formData.get("contact_method") || "EMAIL",
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error?.message ?? "Something went wrong.");
      }

      setSubmitted(true);
      form.reset();
      setMessageLength(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Name *
          </label>
          <input id="name" name="name" type="text" required className="form-input" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email *
          </label>
          <input id="email" name="email" type="email" required className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className="form-input" />
      </div>

      <div>
        <p className="block text-sm font-medium text-primary mb-2">Preferred Contact Method</p>
        <div className="flex gap-6">
          {["email", "phone", "text"].map((method) => (
            <label key={method} className="flex items-center gap-2 text-sm text-text-primary">
              <input
                type="radio"
                name="contact_method"
                value={method.toUpperCase()}
                defaultChecked={method === "email"}
                className="text-primary focus:ring-primary-300"
              />
              {method[0].toUpperCase() + method.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={2000}
          className="form-input resize-none"
          placeholder="Tell us about your needs or questions..."
          onChange={(e) => setMessageLength(e.target.value.length)}
        />
        <p className="text-sm text-text-secondary mt-2 text-right">{messageLength}/2000 characters</p>
      </div>

      {error && (
        <div className="bg-error-50 border border-error text-error text-sm rounded-lg p-4">{error}</div>
      )}

      {submitted && (
        <div className="bg-success-50 border border-success text-success-700 text-sm rounded-lg p-4">
          Thanks for reaching out! We'll get back to you shortly.
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
