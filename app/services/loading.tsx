export default function ServicesLoading() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-48 bg-primary-100 rounded-lg -mx-6 -mt-6 mb-4" />
              <div className="h-5 bg-primary-100 rounded w-2/3 mb-3" />
              <div className="h-4 bg-primary-100 rounded w-1/3 mb-3" />
              <div className="h-4 bg-primary-100 rounded w-full mb-2" />
              <div className="h-4 bg-primary-100 rounded w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
