export default function Contact() {
  return (
    <div className="py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-playfair font-bold text-primary mb-4">
          Get in Touch
        </h1>
        <p className="text-text-secondary mb-8">
          Contact us for appointments, inquiries, and directions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-playfair font-semibold text-primary mb-2">
              Send us a Message
            </h3>
            <p className="text-text-secondary">
              Use the booking page to schedule or email us at
              info@essentialsbytanya.com
            </p>
          </div>

          <div className="card">
            <h3 className="font-playfair font-semibold text-primary mb-2">
              Location
            </h3>
            <p className="text-text-secondary">
              123 Wellness Avenue, Spa District
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
