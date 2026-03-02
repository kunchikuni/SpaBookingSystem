export default function Therapists() {
  return (
    <div className="py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-playfair font-bold text-primary mb-4">
          Meet Our Expert Therapists
        </h1>
        <p className="text-text-secondary mb-8">
          Our certified professionals bring years of experience and passion for
          wellness to every treatment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card text-center">
            <h3 className="text-xl font-playfair font-semibold">
              Dr. Sophia Martinez
            </h3>
            <p className="text-accent">Lead Aesthetician</p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-playfair font-semibold">
              James Thompson
            </h3>
            <p className="text-accent">Massage Therapist</p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-playfair font-semibold">Lisa Chen</h3>
            <p className="text-accent">Wellness Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
