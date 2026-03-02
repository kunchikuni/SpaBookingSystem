import Link from "next/link";

export default function Services() {
  return (
    <div className="py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-playfair font-bold text-primary mb-4">
          Our Services
        </h1>
        <p className="text-text-secondary mb-8">
          Discover our comprehensive range of beauty therapy and massage
          treatments designed to rejuvenate your body, mind, and spirit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-playfair font-semibold">
              Signature Facial
            </h3>
            <p className="text-text-secondary">
              Customized facial treatment using premium organic products.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-playfair font-semibold">
              Deep Tissue Massage
            </h3>
            <p className="text-text-secondary">
              Therapeutic massage targeting deep muscle layers.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-playfair font-semibold">
              Body Renewal Wrap
            </h3>
            <p className="text-text-secondary">
              Full-body exfoliation and mask treatment.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/service_detail" className="btn-primary">View Service Details</Link>
        </div>
      </div>
    </div>
  );
}
