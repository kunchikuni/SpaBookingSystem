export default function TherapistsLoading() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card text-center animate-pulse">
              <div className="h-64 bg-primary-100 rounded-lg mb-6" />
              <div className="h-5 bg-primary-100 rounded w-1/2 mx-auto mb-3" />
              <div className="h-4 bg-primary-100 rounded w-1/3 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
