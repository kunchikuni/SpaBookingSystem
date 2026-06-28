"use client";

import { useEffect } from "react";

// Catches any rendering error thrown by a Server or Client Component
// within app/. Must be a Client Component -- this is a Next.js
// requirement for error boundaries, not a style choice.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In a real deployment this is where an error-tracking call would go
    // (Sentry, etc.) -- logging to console for now since none is wired up.
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-error mb-4">Something went wrong</p>
        <h1 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
          We hit a snag loading this page
        </h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Please try again. If this keeps happening, give us a call and we'll help directly.
        </p>
        <button onClick={() => reset()} className="btn-primary">
          Try Again
        </button>
      </div>
    </div>
  );
}
