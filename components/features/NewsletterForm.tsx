"use client";

import { useState } from "react";

export default function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error?.message ?? "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    variant === "dark"
      ? "flex-1 px-4 py-3 rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent"
      : "form-input flex-1";

  if (submitted) {
    return (
      <p className={variant === "dark" ? "text-sm bg-white/10 rounded-lg p-3" : "text-sm text-success"}>
        Thanks, {email}! You're on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={inputClass}
        />
        <button type="submit" disabled={submitting} className="btn-accent whitespace-nowrap disabled:opacity-60">
          {submitting ? "Joining..." : "Subscribe Now"}
        </button>
      </div>
      {error && <p className="text-sm text-error mt-2">{error}</p>}
    </form>
  );
}
