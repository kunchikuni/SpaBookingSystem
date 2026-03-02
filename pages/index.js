import Link from "next/link";
import { useRouter } from "next/router";

function handleImgError(e, fallback) {
  e.currentTarget.src = fallback;
  e.currentTarget.onerror = null;
}

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/public/assets/img3.jpg"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) =>
              handleImgError(
                e,
                "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
              )
            }
          />
          <div className="absolute inset-0 bg-primary-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="text-fluid-3xl font-playfair font-bold text-white mb-6 leading-tight">
            Discover Your Inner Radiance
          </h1>
          <p className="text-fluid-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience luxury beauty therapy and massage services in our serene
            sanctuary.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/online_booking_system" className="btn-accent text-lg px-8 py-4 hover-lift">
              Book Your Treatment
            </Link>
            <Link href="/services_catalog" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
              Featured Treatments
            </h2>
            <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
              Indulge in our signature treatments designed to restore balance
              and enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Signature Facial",
                desc: "Customized facial treatment using premium organic products to cleanse, exfoliate, and nourish your skin.",
                img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940",
              },
              {
                title: "Deep Tissue Massage",
                desc: "Therapeutic massage targeting deep muscle layers to relieve tension and promote healing.",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940",
              },
              {
                title: "Body Renewal Wrap",
                desc: "Luxurious full-body treatment with exfoliation, mask, and moisturizing for silky smooth skin.",
                img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940",
              },
            ].map((s, idx) => (
              <article
                key={s.title}
                className="card hover-lift group cursor-pointer"
                onClick={() => router.push("/service_detail")}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) =>
                      handleImgError(
                        e,
                        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
                      )
                    }
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {s.desc}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold text-lg">
                    From $120
                  </span>
                  <span className="text-sm text-text-secondary">
                    60 minutes
                  </span>
                </div>
              </article>
            ))}
          </div>

            <div className="text-center mt-12">
            <Link href="/services_catalog" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Testimonials (simplified) */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-fluid-base text-text-secondary">
              Discover why our clients choose Essentials by Tanya for their
              wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Sarah Johnson", "Michael Chen", "Emma Rodriguez"].map(
              (name, i) => (
                <div key={name} className="card text-center">
                  <div className="mb-6">
                    <img
                      src={`https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3`}
                      alt={name}
                      className="w-16 h-16 rounded-full mx-auto object-cover"
                      loading="lazy"
                      onError={(e) =>
                        handleImgError(
                          e,
                          "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
                        )
                      }
                    />
                  </div>
                  <p className="text-text-secondary italic mb-4 leading-relaxed">
                    "A wonderful experience—professional and relaxing."
                  </p>
                  <h4 className="font-semibold text-primary">{name}</h4>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
