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
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) =>
              handleImgError(
                e,
                "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
              )
            }
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto py-24 mt-16">
          <div className="inline-block mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] uppercase pb-2 border-b-[3px] border-unify">
              Hot Summer
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Relaxing Massage
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-white mb-10 drop-shadow-md">
            30% OFF
          </p>
          <div className="flex justify-center">
            <button className="bg-unify hover:bg-[#7a9e19] text-white text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" onClick={() => router.push("/services_catalog")}>
              Learn More
            </button>
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
