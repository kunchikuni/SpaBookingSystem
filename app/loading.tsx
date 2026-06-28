// Global fallback shown while a page (or the data it depends on) is
// loading. App Router shows this automatically via Suspense -- no
// wiring needed beyond this file existing.
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-primary-100 border-t-primary"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
