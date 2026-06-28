import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Homepage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Homepage - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img src="/public/assets/img3.jpg" 
                 className="w-full h-full object-cover"
                 loading="lazy"
                 onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
            <div className="absolute inset-0 bg-primary-900/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-fluid-3xl font-playfair font-bold text-white mb-6 leading-tight">
                Discover Your Inner Radiance
            </h1>
            <p className="text-fluid-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience luxury beauty therapy and massage services in our serene sanctuary. Professional treatments designed to rejuvenate your body, mind, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/online_booking_system" className="btn-accent text-lg px-8 py-4 hover-lift">
                    Book Your Treatment
                </a>
                <a href="/services_catalog" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                    Explore Services
                </a>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>

    {/* Services Preview Section */}
    <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    Featured Treatments
                </h2>
                <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
                    Indulge in our signature treatments designed to restore balance and enhance your natural beauty
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Card 1 */}
                <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                    <div className="relative overflow-hidden rounded-lg mb-6">
                        <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Facial treatment" 
                             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Signature Facial</h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                        Customized facial treatment using premium organic products to cleanse, exfoliate, and nourish your skin.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-accent font-semibold text-lg">From $120</span>
                        <span className="text-sm text-text-secondary">60 minutes</span>
                    </div>
                </div>

                {/* Service Card 2 */}
                <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                    <div className="relative overflow-hidden rounded-lg mb-6">
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Massage therapy" 
                             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Deep Tissue Massage</h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                        Therapeutic massage targeting deep muscle layers to relieve tension and promote healing.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-accent font-semibold text-lg">From $150</span>
                        <span className="text-sm text-text-secondary">90 minutes</span>
                    </div>
                </div>

                {/* Service Card 3 */}
                <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                    <div className="relative overflow-hidden rounded-lg mb-6">
                        <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Body treatment" 
                             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Body Renewal Wrap</h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                        Luxurious full-body treatment with exfoliation, mask, and moisturizing for silky smooth skin.
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-accent font-semibold text-lg">From $180</span>
                        <span className="text-sm text-text-secondary">75 minutes</span>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <a href="/services_catalog" className="btn-secondary">View All Services</a>
            </div>
        </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Discover why our clients choose Serenity Spa for their wellness journey
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="card text-center">
                    <div className="mb-6">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Sarah Johnson" 
                             className="w-16 h-16 rounded-full mx-auto object-cover"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                    </div>
                    <div className="flex justify-center mb-4">
                        <div className="flex text-accent">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-text-secondary italic mb-4 leading-relaxed">
                        "The most relaxing experience I've ever had. The therapists are incredibly skilled and the atmosphere is pure tranquility."
                    </p>
                    <h4 className="font-semibold text-primary">Sarah Johnson</h4>
                    <p className="text-sm text-text-secondary">Regular Client</p>
                </div>

                {/* Testimonial 2 */}
                <div className="card text-center">
                    <div className="mb-6">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Michael Chen" 
                             className="w-16 h-16 rounded-full mx-auto object-cover"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                    </div>
                    <div className="flex justify-center mb-4">
                        <div className="flex text-accent">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-text-secondary italic mb-4 leading-relaxed">
                        "Professional service and exceptional results. My skin has never looked better after their facial treatments."
                    </p>
                    <h4 className="font-semibold text-primary">Michael Chen</h4>
                    <p className="text-sm text-text-secondary">Business Executive</p>
                </div>

                {/* Testimonial 3 */}
                <div className="card text-center">
                    <div className="mb-6">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Emma Rodriguez" 
                             className="w-16 h-16 rounded-full mx-auto object-cover"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                    </div>
                    <div className="flex justify-center mb-4">
                        <div className="flex text-accent">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                    </div>
                    <p className="text-text-secondary italic mb-4 leading-relaxed">
                        "A true sanctuary of wellness. The massage therapy helped me recover from months of stress and tension."
                    </p>
                    <h4 className="font-semibold text-primary">Emma Rodriguez</h4>
                    <p className="text-sm text-text-secondary">Wellness Enthusiast</p>
                </div>
            </div>
        </div>
    </section>

    {/* Therapist Introduction Section */}
    <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    Meet Our Expert Therapists
                </h2>
                <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
                    Our certified professionals bring years of experience and passion for wellness to every treatment
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Therapist 1 */}
                <div className="text-center group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Dr. Sophia Martinez" 
                             className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-2">Dr. Sophia Martinez</h3>
                    <p className="text-accent font-medium mb-3">Lead Aesthetician</p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        15+ years experience in advanced skincare treatments and dermatological therapies
                    </p>
                </div>

                {/* Therapist 2 */}
                <div className="text-center group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="James Thompson" 
                             className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-2">James Thompson</h3>
                    <p className="text-accent font-medium mb-3">Massage Therapist</p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        Certified in deep tissue, Swedish, and therapeutic massage techniques
                    </p>
                </div>

                {/* Therapist 3 */}
                <div className="text-center group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1594824488675-58d12c0d5c8a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Lisa Chen" 
                             className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-2">Lisa Chen</h3>
                    <p className="text-accent font-medium mb-3">Wellness Specialist</p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        Holistic approach to beauty and wellness with aromatherapy certification
                    </p>
                </div>
            </div>

            <div className="text-center mt-12">
                <a href="/therapist_profiles" className="btn-primary">Meet All Therapists</a>
            </div>
        </div>
    </section>

    {/* Gallery Showcase Section */}
    <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    Our Serene Environment
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Step into our tranquil sanctuary designed for your ultimate relaxation
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Gallery Image 1 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt="Treatment room" 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                         loading="lazy"
                         onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                {/* Gallery Image 2 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
                    <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt="Relaxation area" 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                         loading="lazy"
                         onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                {/* Gallery Image 3 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
                    <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt="Reception area" 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                         loading="lazy"
                         onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                {/* Gallery Image 4 */}
                <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square">
                    <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         alt="Massage room" 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                         loading="lazy"
                         onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Newsletter Section */}
    <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-fluid-2xl font-playfair font-bold mb-4">
                Stay Connected with Serenity
            </h2>
            <p className="text-fluid-base mb-8 opacity-90">
                Subscribe to receive exclusive offers, wellness tips, and updates on our latest treatments
            </p>
            
            <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                    <input type="email" 
                           placeholder="Enter your email address" 
                           className="flex-1 px-4 py-3 rounded-lg text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent"
                           required={true}/>
                    <button type="submit" className="btn-accent whitespace-nowrap">
                        Subscribe Now
                    </button>
                </div>
            </form>
        </div>
    </section>

    {/* Footer */}
    

    {/* JavaScript for Mobile Menu */}
    



</div>
    </>
  );
}
