import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ServicesCatalog() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ServicesCatalog - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Breadcrumb Navigation */}
    <section className="py-8 px-6 bg-surface border-b border-primary-100">
        <div className="container mx-auto max-w-7xl">
            <nav className="flex items-center space-x-2 text-sm">
                <a href="/homepage" className="text-text-secondary hover:text-primary transition-colors">Home</a>
                <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="text-primary font-medium">Services</span>
            </nav>
        </div>
    </section>

    {/* Page Header */}
    <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">
                Our Services
            </h1>
            <p className="text-fluid-lg text-text-secondary max-w-2xl mx-auto">
                Discover our comprehensive range of beauty therapy and massage treatments designed to rejuvenate your body, mind, and spirit
            </p>
        </div>
    </section>

    {/* Services Catalog Section */}
    <section className="py-8 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filter Sidebar */}
                <aside className="lg:w-80 flex-shrink-0">
                    {/* Mobile Filter Toggle */}
                    <button id="filter-toggle" className="lg:hidden w-full mb-4 flex items-center justify-between p-4 bg-surface rounded-lg border border-primary-100">
                        <span className="font-medium text-primary">Filters</span>
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"></path>
                        </svg>
                    </button>

                    {/* Filter Panel */}
                    <div id="filter-panel" className="hidden lg:block bg-surface rounded-xl p-6 border border-primary-100">
                        {/* Search Filter */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-primary mb-2">Search Services</label>
                            <div className="relative">
                                <input type="text" 
                                       id="service-search" 
                                       placeholder="Search treatments..." 
                                       className="form-input pl-10"/>
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Categories</h3>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300" checked/>
                                    <span className="ml-3 text-text-primary">All Services</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">Facial Treatments</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">Massage Therapy</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">Body Treatments</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">Wellness Packages</span>
                                </label>
                            </div>
                        </div>

                        {/* Price Range Filter */}
                        <div className="mb-6">
                            <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Price Range</h3>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="radio" name="price" className="border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">All Prices</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="price" className="border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">Under $100</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="price" className="border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">$100 - $200</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="price" className="border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">$200+</span>
                                </label>
                            </div>
                        </div>

                        {/* Duration Filter */}
                        <div className="mb-6">
                            <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Duration</h3>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">30 minutes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">60 minutes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">90 minutes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded border-primary-300 text-primary focus:ring-primary-300"/>
                                    <span className="ml-3 text-text-primary">120+ minutes</span>
                                </label>
                            </div>
                        </div>

                        {/* Therapist Availability */}
                        <div className="mb-6">
                            <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Therapist</h3>
                            <select className="form-input">
                                <option>Any Available</option>
                                <option>Dr. Sophia Martinez</option>
                                <option>James Thompson</option>
                                <option>Lisa Chen</option>
                            </select>
                        </div>

                        {/* Clear Filters */}
                        <button className="w-full btn-secondary">Clear All Filters</button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {/* Sort and Results Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-text-secondary">Showing <span className="font-medium text-primary">12</span> services</span>
                            {/* Active Filter Chips */}
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary">
                                    All Categories
                                    <button className="ml-2 hover:text-primary-600">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <label className="text-sm text-text-secondary">Sort by:</label>
                            <select className="form-input w-auto min-w-0">
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Duration</option>
                                <option>Alphabetical</option>
                            </select>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                            <div className="relative overflow-hidden rounded-lg mb-6">
                                <img src="/public/assets/img1(4).jpg" 
                                     alt="Signature Facial Treatment" 
                                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                     loading="lazy"
                                     onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">Popular</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Signature Facial</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Customized facial treatment using premium organic products to cleanse, exfoliate, and nourish your skin for a radiant glow.
                            </p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-accent font-semibold text-lg">From $120</span>
                                <span className="text-sm text-text-secondary">60 minutes</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <div className="flex text-accent text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-text-secondary ml-1">(4.9)</span>
                                </div>
                                <button className="btn-primary text-sm px-4 py-2">Learn More</button>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                            <div className="relative overflow-hidden rounded-lg mb-6">
                                <img src="/public/assets/img4(2).jpg    " 
                                     alt="Deep Tissue Massage" 
                                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                     loading="lazy"
                                     onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Deep Tissue Massage</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Therapeutic massage targeting deep muscle layers to relieve chronic tension and promote healing and recovery.
                            </p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-accent font-semibold text-lg">From $150</span>
                                <span className="text-sm text-text-secondary">90 minutes</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <div className="flex text-accent text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-text-secondary ml-1">(4.8)</span>
                                </div>
                                <button className="btn-primary text-sm px-4 py-2">Learn More</button>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                            <div className="relative overflow-hidden rounded-lg mb-6">
                                <img src="/public/assets/img6.jpg" 
                                     alt="Body Renewal Wrap" 
                                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                     loading="lazy"
                                     onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Body Renewal Wrap</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Luxurious full-body treatment with exfoliation, nourishing mask, and moisturizing for silky smooth skin.
                            </p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-accent font-semibold text-lg">From $180</span>
                                <span className="text-sm text-text-secondary">75 minutes</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <div className="flex text-accent text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-text-secondary ml-1">(4.7)</span>
                                </div>
                                <button className="btn-primary text-sm px-4 py-2">Learn More</button>
                            </div>
                        </div>

                        {/* Service Card 4 */}
                        <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                            <div className="relative overflow-hidden rounded-lg mb-6">
                                <img src="/public/assets/img2.jpg" 
                                     alt="Hot Stone Massage" 
                                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                     loading="lazy"
                                     onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Hot Stone Massage</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Relaxing massage using heated stones to melt away tension and promote deep muscle relaxation.
                            </p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-accent font-semibold text-lg">From $165</span>
                                <span className="text-sm text-text-secondary">80 minutes</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <div className="flex text-accent text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-text-secondary ml-1">(4.9)</span>
                                </div>
                                <button className="btn-primary text-sm px-4 py-2">Learn More</button>
                            </div>
                        </div>

                        {/* Service Card 5 */}
                        <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                            <div className="relative overflow-hidden rounded-lg mb-6">
                                <img src="/public/assets/img9.jpg" 
                                     alt="Anti-Aging Facial" 
                                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                     loading="lazy"
                                     onerror="this.src='https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-medium">New</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Anti-Aging Facial</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Advanced facial treatment targeting fine lines and wrinkles with peptides and collagen-boosting ingredients.
                            </p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-accent font-semibold text-lg">From $200</span>
                                <span className="text-sm text-text-secondary">75 minutes</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <div className="flex text-accent text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-text-secondary ml-1">(4.8)</span>
                                </div>
                                <button className="btn-primary text-sm px-4 py-2">Learn More</button>
                            </div>
                        </div>

                        {/* Service Card 6 */}
                        <div className="card hover-lift group cursor-pointer" onClick="window.location.href='service_detail.html'">
                            <div className="relative overflow-hidden rounded-lg mb-6">
                                <img src="/public/assets/img10.jpg" 
                                     alt="Aromatherapy Massage" 
                                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                     loading="lazy"
                                     onerror="this.src='https://images.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg'; this.onerror=null;" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-xl font-playfair font-semibold text-primary mb-3">Aromatherapy Massage</h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Relaxing massage with essential oils to enhance mood, reduce stress, and promote overall well-being.
                            </p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-accent font-semibold text-lg">From $135</span>
                                <span className="text-sm text-text-secondary">60 minutes</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <div className="flex text-accent text-sm">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs text-text-secondary ml-1">(4.6)</span>
                                </div>
                                <button className="btn-primary text-sm px-4 py-2">Learn More</button>
                            </div>
                        </div>
                    </div>
                    

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="btn-secondary px-8 py-3">Load More Services</button>
                    </div>
                </main>
            </div>
        </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-fluid-2xl font-playfair font-bold mb-4">
                Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-fluid-base mb-8 opacity-90">
                Book your appointment today and experience the transformative power of our professional treatments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/online_booking_system" className="btn-accent text-lg px-8 py-4 hover-lift">
                    Book Appointment
                </a>
                <a href="/contact_location" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                    Contact Us
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
