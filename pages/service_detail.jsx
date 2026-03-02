import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ServiceDetail() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ServiceDetail - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Breadcrumb Navigation */}
    <section className="py-4 px-6 bg-surface border-b border-primary-100">
        <div className="container mx-auto max-w-7xl">
            <nav className="flex items-center space-x-2 text-sm">
                <a href="/homepage" className="text-text-secondary hover:text-primary transition-colors">Home</a>
                <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <a href="/services_catalog" className="text-text-secondary hover:text-primary transition-colors">Services</a>
                <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="text-primary font-medium">Signature Facial</span>
            </nav>
        </div>
    </section>

    {/* Hero Section with Image Gallery */}
    <section className="py-8 lg:py-16 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Image Gallery */}
                <div className="order-1 lg:order-1">
                    {/* Main Image */}
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                        <img id="main-image" 
                             src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Signature Facial Treatment" 
                             className="w-full lg:h-[500px] h-80 object-cover transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        
                        {/* Navigation Arrows */}
                        <button id="prev-image" className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-soft hover:bg-white transition-all duration-200">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button id="next-image" className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-soft hover:bg-white transition-all duration-200">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="hidden lg:flex space-x-4 overflow-x-auto pb-2">
                        <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Facial Treatment 1" 
                             className="thumbnail w-20 h-16 object-cover rounded-lg cursor-pointer border-2 border-primary opacity-100 hover:opacity-100 transition-opacity duration-200"
                             data-index="0" />
                        <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Treatment Room" 
                             className="thumbnail w-20 h-16 object-cover rounded-lg cursor-pointer border-2 border-transparent opacity-60 hover:opacity-100 transition-opacity duration-200"
                             data-index="1" />
                        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Spa Environment" 
                             className="thumbnail w-20 h-16 object-cover rounded-lg cursor-pointer border-2 border-transparent opacity-60 hover:opacity-100 transition-opacity duration-200"
                             data-index="2" />
                        <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Products Used" 
                             className="thumbnail w-20 h-16 object-cover rounded-lg cursor-pointer border-2 border-transparent opacity-60 hover:opacity-100 transition-opacity duration-200"
                             data-index="3" />
                    </div>

                    {/* Mobile Swipe Indicators */}
                    <div className="flex lg:hidden justify-center space-x-2 mt-4">
                        <div className="indicator w-2 h-2 rounded-full bg-primary" data-index="0"></div>
                        <div className="indicator w-2 h-2 rounded-full bg-primary-200" data-index="1"></div>
                        <div className="indicator w-2 h-2 rounded-full bg-primary-200" data-index="2"></div>
                        <div className="indicator w-2 h-2 rounded-full bg-primary-200" data-index="3"></div>
                    </div>
                </div>

                {/* Service Information */}
                <div className="order-2 lg:order-2">
                    <div className="mb-6">
                        <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">
                            Signature Facial Treatment
                        </h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
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
                                <span className="text-text-secondary ml-2">(4.9) • 150+ reviews</span>
                            </div>
                        </div>
                        
                        <p className="text-fluid-lg text-text-secondary leading-relaxed mb-6">
                            Experience our most popular facial treatment, customized to your unique skin needs. Using premium organic products and advanced techniques, this luxurious treatment will leave your skin radiant, refreshed, and rejuvenated.
                        </p>

                        {/* Key Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-text-primary">Deep cleansing & purification</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-text-primary">Hydration & nourishment</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-text-primary">Anti-aging benefits</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-text-primary">Instant glow & radiance</span>
                            </div>
                        </div>

                        {/* Treatment Details */}
                        <div className="bg-surface rounded-xl p-6 mb-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">Duration</h4>
                                    <p className="text-text-secondary">60 minutes</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">Price</h4>
                                    <p className="text-text-secondary">Starting from <span className="text-accent font-semibold text-lg">$120</span></p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">Best For</h4>
                                    <p className="text-text-secondary">All skin types</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">Frequency</h4>
                                    <p className="text-text-secondary">Monthly recommended</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Sharing */}
                        <div className="flex items-center space-x-4">
                            <span className="text-text-secondary font-medium">Share:</span>
                            <div className="flex space-x-3">
                                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Main Content with Booking Widget */}
    <section className="py-8 lg:py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Treatment Description */}
                    <div className="mb-12">
                        <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-6">
                            Treatment Overview
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Our Signature Facial is a comprehensive skincare treatment designed to address the unique needs of your skin. This luxurious 60-minute experience combines the latest in skincare technology with time-tested techniques to deliver exceptional results.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                The treatment begins with a thorough skin analysis to determine your specific skin type and concerns. Our expert aestheticians then customize the facial to target your individual needs, whether that's hydration, anti-aging, acne treatment, or overall skin health improvement.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                Using only the finest organic and natural products, this facial includes deep cleansing, gentle exfoliation, extractions if needed, a customized mask, and a nourishing moisturizer with SPF protection. You'll leave with visibly brighter, smoother, and more radiant skin.
                            </p>
                        </div>
                    </div>

                    {/* Expandable Sections */}
                    <div className="space-y-6">
                        {/* Treatment Steps */}
                        <div className="card">
                            <button className="accordion-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="steps-content">
                                <h3 className="text-xl font-playfair font-semibold text-primary">Treatment Steps</h3>
                                <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div id="steps-content" className="accordion-content mt-4 space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Consultation & Skin Analysis</h4>
                                        <p className="text-text-secondary">Detailed assessment of your skin type, concerns, and goals to customize the treatment.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Deep Cleansing</h4>
                                        <p className="text-text-secondary">Thorough cleansing to remove makeup, impurities, and environmental pollutants.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Exfoliation</h4>
                                        <p className="text-text-secondary">Gentle removal of dead skin cells to reveal smoother, brighter skin underneath.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Steam & Extractions</h4>
                                        <p className="text-text-secondary">Steam to open pores followed by professional extractions if needed.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">5</div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Customized Mask</h4>
                                        <p className="text-text-secondary">Targeted mask treatment based on your specific skin needs and concerns.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-semibold text-sm">6</div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">Moisturizing & Protection</h4>
                                        <p className="text-text-secondary">Application of serums, moisturizer, and SPF protection to lock in benefits.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ingredients & Products */}
                        <div className="card">
                            <button className="accordion-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="ingredients-content">
                                <h3 className="text-xl font-playfair font-semibold text-primary">Premium Ingredients & Products</h3>
                                <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div id="ingredients-content" className="accordion-content hidden mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-primary mb-3">Key Ingredients</h4>
                                        <ul className="space-y-2 text-text-secondary">
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Vitamin C for brightening</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Hyaluronic acid for hydration</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Peptides for anti-aging</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Natural botanical extracts</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-3">Product Brands</h4>
                                        <ul className="space-y-2 text-text-secondary">
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>SkinCeuticals</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Dermalogica</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Eminence Organics</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Osmosis Skincare</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contraindications */}
                        <div className="card">
                            <button className="accordion-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="contraindications-content">
                                <h3 className="text-xl font-playfair font-semibold text-primary">Contraindications & Precautions</h3>
                                <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div id="contraindications-content" className="accordion-content hidden mt-4">
                                <div className="bg-warning-50 border border-warning p-4 rounded-lg mb-4">
                                    <p className="text-warning font-medium mb-2">Please inform us if you have any of the following conditions:</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <ul className="space-y-2 text-text-secondary">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                            </svg>
                                            <span>Active acne or skin infections</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                            </svg>
                                            <span>Recent cosmetic procedures</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                            </svg>
                                            <span>Pregnancy or nursing</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                            </svg>
                                            <span>Allergies to specific ingredients</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                            </svg>
                                            <span>Use of retinoid medications</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg className="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                            </svg>
                                            <span>Recent sun exposure or tanning</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Tiers */}
                        <div className="card">
                            <button className="accordion-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="pricing-content">
                                <h3 className="text-xl font-playfair font-semibold text-primary">Pricing Options</h3>
                                <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div id="pricing-content" className="accordion-content hidden mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="border border-primary-200 rounded-lg p-6">
                                        <h4 className="font-semibold text-primary mb-2">Essential</h4>
                                        <div className="text-2xl font-bold text-accent mb-4">$120</div>
                                        <ul className="space-y-2 text-sm text-text-secondary">
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>60-minute treatment</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Basic customization</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Standard products</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="border-2 border-accent rounded-lg p-6 relative">
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">Most Popular</div>
                                        <h4 className="font-semibold text-primary mb-2">Premium</h4>
                                        <div className="text-2xl font-bold text-accent mb-4">$165</div>
                                        <ul className="space-y-2 text-sm text-text-secondary">
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>75-minute treatment</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Full customization</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Premium products</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Facial massage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="border border-primary-200 rounded-lg p-6">
                                        <h4 className="font-semibold text-primary mb-2">Luxury</h4>
                                        <div className="text-2xl font-bold text-accent mb-4">$220</div>
                                        <ul className="space-y-2 text-sm text-text-secondary">
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>90-minute treatment</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Ultra customization</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Luxury products</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>LED light therapy</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Take-home products</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Widget (Sticky on desktop) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <div className="card-elevated">
                            <h3 className="text-xl font-playfair font-semibold text-primary mb-6">Book Your Treatment</h3>
                            
                            {/* Therapist Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-primary mb-2">Select Therapist</label>
                                <select className="form-input">
                                    <option>Dr. Sophia Martinez (Lead Aesthetician)</option>
                                    <option>Lisa Chen (Wellness Specialist)</option>
                                    <option>Any Available</option>
                                </select>
                            </div>

                            {/* Date Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-primary mb-2">Select Date</label>
                                <input type="date" className="form-input" min="2025-01-02"/>
                            </div>

                            {/* Time Slots */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-primary mb-3">Available Times</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="p-3 border border-primary-200 rounded-lg text-sm hover:border-primary hover:bg-primary-50 transition-colors">9:00 AM</button>
                                    <button className="p-3 border border-primary-200 rounded-lg text-sm hover:border-primary hover:bg-primary-50 transition-colors">10:30 AM</button>
                                    <button className="p-3 border border-primary-200 rounded-lg text-sm hover:border-primary hover:bg-primary-50 transition-colors">1:00 PM</button>
                                    <button className="p-3 border border-primary-200 rounded-lg text-sm hover:border-primary hover:bg-primary-50 transition-colors">2:30 PM</button>
                                    <button className="p-3 border border-primary-200 rounded-lg text-sm hover:border-primary hover:bg-primary-50 transition-colors">4:00 PM</button>
                                    <button className="p-3 border border-primary-200 rounded-lg text-sm opacity-50 cursor-not-allowed" disabled={true}>5:30 PM</button>
                                </div>
                            </div>

                            {/* Pricing Summary */}
                            <div className="bg-surface rounded-lg p-4 mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-text-secondary">Signature Facial (Essential)</span>
                                    <span className="font-semibold text-primary">$120</span>
                                </div>
                                <div className="flex justify-between items-center text-sm text-text-secondary">
                                    <span>Duration: 60 minutes</span>
                                </div>
                            </div>

                            {/* Book Now Button */}
                            <button className="btn-accent w-full text-lg py-4 mb-4 hover-lift">
                                Book Now - $120
                            </button>

                            {/* Additional Options */}
                            <div className="text-center space-y-2">
                                <button className="text-primary hover:text-accent transition-colors text-sm underline">
                                    View Package Deals
                                </button>
                                <p className="text-xs text-text-secondary">
                                    Free cancellation up to 24 hours before appointment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Client Testimonials Carousel */}
    <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Real experiences from clients who've experienced our Signature Facial
                </p>
            </div>

            <div className="relative">
                <div id="testimonials-container" className="overflow-hidden">
                    <div id="testimonials-track" className="flex transition-transform duration-500 ease-in-out">
                        {/* Testimonial 1 */}
                        <div className="w-full flex-shrink-0 px-4">
                            <div className="card text-center max-w-4xl mx-auto">
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
                                <blockquote className="text-fluid-lg text-text-secondary italic mb-6 leading-relaxed">
                                    "The Signature Facial at Serenity Spa completely transformed my skin! Dr. Martinez was incredibly knowledgeable and customized the treatment perfectly for my sensitive skin. My complexion has never looked better, and the glow lasted for weeks. I'm already booked for my next appointment!"
                                </blockquote>
                                <div>
                                    <h4 className="font-semibold text-primary text-lg">Sarah Johnson</h4>
                                    <p className="text-sm text-text-secondary">Regular Client • 8 treatments</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="w-full flex-shrink-0 px-4">
                            <div className="card text-center max-w-4xl mx-auto">
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
                                <blockquote className="text-fluid-lg text-text-secondary italic mb-6 leading-relaxed">
                                    "As someone who travels frequently for business, my skin often feels tired and dull. The Signature Facial here has become my go-to treatment. The premium package with LED therapy is incredible – my skin looks refreshed and professional for important meetings. Worth every penny!"
                                </blockquote>
                                <div>
                                    <h4 className="font-semibold text-primary text-lg">Kun Chikuni</h4>
                                    <p className="text-sm text-text-secondary">Business Executive • 5 treatments</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="w-full flex-shrink-0 px-4">
                            <div className="card text-center max-w-4xl mx-auto">
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
                                <blockquote className="text-fluid-lg text-text-secondary italic mb-6 leading-relaxed">
                                    "I have acne-prone skin and was hesitant to try facial treatments, but Lisa was amazing! She explained every step and chose products specifically for my skin concerns. After three months of monthly treatments, my skin has cleared up significantly and feels so much healthier."
                                </blockquote>
                                <div>
                                    <h4 className="font-semibold text-primary text-lg">Emma Rodriguez</h4>
                                    <p className="text-sm text-text-secondary">Wellness Enthusiast • 6 treatments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button id="testimonials-prev" className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-soft hover:bg-white transition-all duration-200">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button id="testimonials-next" className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-soft hover:bg-white transition-all duration-200">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                {/* Carousel Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                    <button className="testimonial-indicator w-3 h-3 rounded-full bg-primary" data-index="0"></button>
                    <button className="testimonial-indicator w-3 h-3 rounded-full bg-primary-200" data-index="1"></button>
                    <button className="testimonial-indicator w-3 h-3 rounded-full bg-primary-200" data-index="2"></button>
                </div>
            </div>
        </div>
    </section>

    {/* Related Services */}
    <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    You Might Also Like
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Enhance your experience with these complementary treatments
                </p>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Related Service 1 */}
                <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                        <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Deep Cleansing Facial" 
                             className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Deep Cleansing Facial</h3>
                    <p className="text-text-secondary text-sm mb-4">Perfect for oily or acne-prone skin with deep pore cleansing.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-accent font-semibold">From $95</span>
                        <span className="text-xs text-text-secondary">45 min</span>
                    </div>
                </div>

                {/* Related Service 2 */}
                <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Relaxation Massage" 
                             className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Relaxation Massage</h3>
                    <p className="text-text-secondary text-sm mb-4">Complement your facial with a soothing full-body massage.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-accent font-semibold">From $130</span>
                        <span className="text-xs text-text-secondary">60 min</span>
                    </div>
                </div>

                {/* Related Service 3 */}
                <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                        <img src="https://images.pixabay.com/photo/2017/08/06/15/13/woman-2593366_1280.jpg" 
                             alt="Wellness Package" 
                             className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Spa Day Package</h3>
                    <p className="text-text-secondary text-sm mb-4">Full day of pampering including facial, massage, and more.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-accent font-semibold">From $285</span>
                        <span className="text-xs text-text-secondary">4 hours</span>
                    </div>
                </div>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto pb-4">
                <div className="flex space-x-6 w-max">
                    {/* Related Service 1 Mobile */}
                    <div className="card hover-lift group cursor-pointer w-64 flex-shrink-0" onClick="window.location.href='service_detail.html'">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                 alt="Deep Cleansing Facial" 
                                 className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                 loading="lazy"
                                 onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        </div>
                        <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Deep Cleansing Facial</h3>
                        <p className="text-text-secondary text-sm mb-4">Perfect for oily or acne-prone skin with deep pore cleansing.</p>
                        <div className="flex justify-between items-center">
                            <span className="text-accent font-semibold">From $95</span>
                            <span className="text-xs text-text-secondary">45 min</span>
                        </div>
                    </div>

                    {/* Related Service 2 Mobile */}
                    <div className="card hover-lift group cursor-pointer w-64 flex-shrink-0" onClick="window.location.href='service_detail.html'">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                 alt="Relaxation Massage" 
                                 className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                 loading="lazy"
                                 onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                        </div>
                        <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Relaxation Massage</h3>
                        <p className="text-text-secondary text-sm mb-4">Complement your facial with a soothing full-body massage.</p>
                        <div className="flex justify-between items-center">
                            <span className="text-accent font-semibold">From $130</span>
                            <span className="text-xs text-text-secondary">60 min</span>
                        </div>
                    </div>

                    {/* Related Service 3 Mobile */}
                    <div className="card hover-lift group cursor-pointer w-64 flex-shrink-0" onClick="window.location.href='service_detail.html'">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img src="https://images.pixabay.com/photo/2017/08/06/15/13/woman-2593366_1280.jpg" 
                                 alt="Wellness Package" 
                                 className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                 loading="lazy"
                                 onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        </div>
                        <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Spa Day Package</h3>
                        <p className="text-text-secondary text-sm mb-4">Full day of pampering including facial, massage, and more.</p>
                        <div className="flex justify-between items-center">
                            <span className="text-accent font-semibold">From $285</span>
                            <span className="text-xs text-text-secondary">4 hours</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <a href="/services_catalog" className="btn-secondary">View All Services</a>
            </div>
        </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Everything you need to know about our Signature Facial treatment
                </p>
            </div>

            <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="card">
                    <button className="faq-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="faq-1">
                        <h3 className="text-left text-lg font-semibold text-primary">How often should I get a Signature Facial?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-1" className="faq-content mt-4">
                        <p className="text-text-secondary leading-relaxed">
                            For optimal results, we recommend scheduling a Signature Facial every 4-6 weeks. This allows your skin's natural renewal cycle to complete while maintaining the benefits of professional treatment. However, the frequency can be adjusted based on your skin type, concerns, and lifestyle factors.
                        </p>
                    </div>
                </div>

                {/* FAQ 2 */}
                <div className="card">
                    <button className="faq-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="faq-2">
                        <h3 className="text-left text-lg font-semibold text-primary">What should I expect during my first visit?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-2" className="faq-content hidden mt-4">
                        <p className="text-text-secondary leading-relaxed">
                            Your first visit will begin with a comprehensive skin consultation where our aesthetician will analyze your skin type, discuss your concerns and goals, and review your skincare routine. We'll then customize the facial treatment specifically for your needs. Please arrive 15 minutes early to complete intake forms and allow time to relax before your treatment.
                        </p>
                    </div>
                </div>

                {/* FAQ 3 */}
                <div className="card">
                    <button className="faq-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="faq-3">
                        <h3 className="text-left text-lg font-semibold text-primary">Are there any side effects or downtime?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-3" className="faq-content hidden mt-4">
                        <p className="text-text-secondary leading-relaxed">
                            The Signature Facial is a gentle treatment with minimal to no downtime. Some clients may experience slight redness immediately after treatment, which typically subsides within 1-2 hours. You can return to your normal activities immediately and apply makeup if desired. We'll provide post-treatment care instructions to maximize your results.
                        </p>
                    </div>
                </div>

                {/* FAQ 4 */}
                <div className="card">
                    <button className="faq-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="faq-4">
                        <h3 className="text-left text-lg font-semibold text-primary">Can I customize the treatment for my skin concerns?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-4" className="faq-content hidden mt-4">
                        <p className="text-text-secondary leading-relaxed">
                            Absolutely! Our Signature Facial is designed to be fully customizable. Whether you're dealing with acne, dryness, signs of aging, sensitivity, or hyperpigmentation, our skilled aestheticians will select the appropriate products, techniques, and add-ons to address your specific concerns and skin goals.
                        </p>
                    </div>
                </div>

                {/* FAQ 5 */}
                <div className="card">
                    <button className="faq-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="faq-5">
                        <h3 className="text-left text-lg font-semibold text-primary">What's included in the different pricing tiers?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-5" className="faq-content hidden mt-4">
                        <p className="text-text-secondary leading-relaxed mb-3">
                            Our three tiers offer different levels of luxury and add-ons:
                        </p>
                        <ul className="text-text-secondary space-y-2">
                            <li><strong>Essential ($120):</strong> 60-minute treatment with standard customization and professional-grade products</li>
                            <li><strong>Premium ($165):</strong> 75-minute treatment with extended facial massage, premium products, and enhanced customization</li>
                            <li><strong>Luxury ($220):</strong> 90-minute treatment with LED light therapy, luxury products, and take-home skincare samples</li>
                        </ul>
                    </div>
                </div>

                {/* FAQ 6 */}
                <div className="card">
                    <button className="faq-header w-full flex items-center justify-between p-0 bg-transparent border-none" data-target="faq-6">
                        <h3 className="text-left text-lg font-semibold text-primary">What is your cancellation policy?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-6" className="faq-content hidden mt-4">
                        <p className="text-text-secondary leading-relaxed">
                            We offer free cancellation up to 24 hours before your scheduled appointment. Cancellations made with less than 24 hours notice or no-shows will be charged 50% of the service fee. We understand that emergencies happen, so please contact us as soon as possible if you need to reschedule.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Call to Action */}
    <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-fluid-2xl font-playfair font-bold mb-4">
                Ready to Experience the Signature Difference?
            </h2>
            <p className="text-fluid-base mb-8 opacity-90">
                Book your personalized Signature Facial today and discover the transformative power of professional skincare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/online_booking_system" className="btn-accent text-lg px-8 py-4 hover-lift">
                    Book Signature Facial
                </a>
                <a href="/services_catalog" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                    Browse All Services
                </a>
            </div>
        </div>
    </section>

    {/* Footer */}
    

    {/* JavaScript for Interactive Features */}
    



</div>
    </>
  );
}
