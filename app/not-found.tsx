import Link from "next/link";

// Renders for any notFound() call (e.g. an invalid service or therapist
// slug) and for any URL that doesn't match a route. Previously this would
// have fallen back to Next's bare unstyled default.
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-accent mb-4">404</p>
        <h1 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
          We couldn't find that page
        </h1>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you're looking for may have moved, or the link might be out of date.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/services" className="btn-secondary">
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
