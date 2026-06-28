import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function OnlineBookingSystem() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>OnlineBookingSystem - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Breadcrumbs */}
    <section className="py-6 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
            <nav className="flex items-center space-x-2 text-sm">
                <a href="/homepage" className="text-text-secondary hover:text-primary transition-colors">Home</a>
                <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="text-primary font-medium">Book Appointment</span>
            </nav>
        </div>
    </section>

    {/* Main Booking Section */}
    <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-4">
                    Book Your Appointment
                </h1>
                <p className="text-fluid-base text-text-secondary max-w-2xl mx-auto">
                    Schedule your perfect spa experience with our easy booking system
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Booking Steps (Main Content) */}
                <div className="lg:col-span-2">
                    {/* Progress Indicator */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <div id="step-1-indicator" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">1</div>
                                <span id="step-1-text" className="text-primary font-medium">Service</span>
                            </div>
                            <div className="flex-1 h-1 bg-primary-100 mx-4">
                                <div id="progress-1" className="h-full bg-primary w-0 transition-all duration-300"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div id="step-2-indicator" className="w-8 h-8 rounded-full bg-primary-100 text-text-secondary flex items-center justify-center text-sm font-medium">2</div>
                                <span id="step-2-text" className="text-text-secondary">Therapist</span>
                            </div>
                            <div className="flex-1 h-1 bg-primary-100 mx-4">
                                <div id="progress-2" className="h-full bg-primary w-0 transition-all duration-300"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div id="step-3-indicator" className="w-8 h-8 rounded-full bg-primary-100 text-text-secondary flex items-center justify-center text-sm font-medium">3</div>
                                <span id="step-3-text" className="text-text-secondary">Date & Time</span>
                            </div>
                            <div className="flex-1 h-1 bg-primary-100 mx-4">
                                <div id="progress-3" className="h-full bg-primary w-0 transition-all duration-300"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div id="step-4-indicator" className="w-8 h-8 rounded-full bg-primary-100 text-text-secondary flex items-center justify-center text-sm font-medium">4</div>
                                <span id="step-4-text" className="text-text-secondary">Details</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 1: Service Selection */}
                    <div id="step-1" className="booking-step">
                        <div className="card">
                            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Select Your Service</h2>
                            
                            {/* Search and Filter */}
                            <div className="mb-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1 relative">
                                        <input type="text" id="service-search" placeholder="Search services..." 
                                               className="form-input pl-10"/>
                                        <svg className="w-5 h-5 text-text-secondary absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                    <select id="service-filter" className="form-input">
                                        <option value="">All Categories</option>
                                        <option value="facial">Facial Treatments</option>
                                        <option value="massage">Massage Therapy</option>
                                        <option value="body">Body Treatments</option>
                                        <option value="packages">Spa Packages</option>
                                    </select>
                                </div>
                            </div>

                            {/* Service Categories */}
                            <div className="space-y-6">
                                {/* Facial Treatments */}
                                <div className="service-category" data-category="facial">
                                    <h3 className="text-xl font-playfair font-semibold text-primary mb-4">Facial Treatments</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="service-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                             data-service="signature-facial" data-price="120" data-duration="60">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-primary">Signature Facial</h4>
                                                <span className="text-accent font-semibold">$120</span>
                                            </div>
                                            <p className="text-text-secondary text-sm mb-2">Customized facial treatment with premium organic products</p>
                                            <span className="text-xs text-text-secondary">60 minutes</span>
                                        </div>
                                        <div className="service-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                             data-service="anti-aging-facial" data-price="150" data-duration="75">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-primary">Anti-Aging Facial</h4>
                                                <span className="text-accent font-semibold">$150</span>
                                            </div>
                                            <p className="text-text-secondary text-sm mb-2">Advanced treatment targeting fine lines and wrinkles</p>
                                            <span className="text-xs text-text-secondary">75 minutes</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Massage Therapy */}
                                <div className="service-category" data-category="massage">
                                    <h3 className="text-xl font-playfair font-semibold text-primary mb-4">Massage Therapy</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="service-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                             data-service="deep-tissue-massage" data-price="150" data-duration="90">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-primary">Deep Tissue Massage</h4>
                                                <span className="text-accent font-semibold">$150</span>
                                            </div>
                                            <p className="text-text-secondary text-sm mb-2">Therapeutic massage targeting deep muscle layers</p>
                                            <span className="text-xs text-text-secondary">90 minutes</span>
                                        </div>
                                        <div className="service-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                             data-service="swedish-massage" data-price="120" data-duration="60">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-primary">Swedish Massage</h4>
                                                <span className="text-accent font-semibold">$120</span>
                                            </div>
                                            <p className="text-text-secondary text-sm mb-2">Relaxing full-body massage with gentle techniques</p>
                                            <span className="text-xs text-text-secondary">60 minutes</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Body Treatments */}
                                <div className="service-category" data-category="body">
                                    <h3 className="text-xl font-playfair font-semibold text-primary mb-4">Body Treatments</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="service-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                             data-service="body-wrap" data-price="180" data-duration="75">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-primary">Body Renewal Wrap</h4>
                                                <span className="text-accent font-semibold">$180</span>
                                            </div>
                                            <p className="text-text-secondary text-sm mb-2">Full-body treatment with exfoliation and moisturizing</p>
                                            <span className="text-xs text-text-secondary">75 minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Add-on Services */}
                            <div className="mt-8 pt-6 border-t border-primary-100">
                                <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Add-on Services</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="flex items-center space-x-3 p-3 border border-primary-100 rounded-lg cursor-pointer hover:border-primary transition-colors">
                                        <input type="checkbox" className="addon-checkbox" data-addon="aromatherapy" data-price="25"/>
                                        <div className="flex-1">
                                            <span className="font-medium text-primary">Aromatherapy Enhancement</span>
                                            <span className="text-accent font-semibold ml-2">+$25</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center space-x-3 p-3 border border-primary-100 rounded-lg cursor-pointer hover:border-primary transition-colors">
                                        <input type="checkbox" className="addon-checkbox" data-addon="hot-stones" data-price="35"/>
                                        <div className="flex-1">
                                            <span className="font-medium text-primary">Hot Stone Therapy</span>
                                            <span className="text-accent font-semibold ml-2">+$35</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Therapist Selection */}
                    <div id="step-2" className="booking-step hidden">
                        <div className="card">
                            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Choose Your Therapist</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Therapist 1 */}
                                <div className="therapist-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                     data-therapist="sophia-martinez">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                             alt="Dr. Sophia Martinez" 
                                             className="w-16 h-16 rounded-full object-cover"
                                             loading="lazy"
                                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                                        <div>
                                            <h3 className="font-playfair font-semibold text-primary">Dr. Sophia Martinez</h3>
                                            <p className="text-accent text-sm">Lead Aesthetician</p>
                                            <div className="flex items-center mt-1">
                                                <div className="flex text-accent text-xs">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                    <span className="ml-1">4.9 (127 reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary text-sm mb-3">15+ years experience in advanced skincare treatments</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-success bg-success-50 px-2 py-1 rounded">Available Today</span>
                                        <span className="text-sm text-text-secondary">Specializes in Facial Treatments</span>
                                    </div>
                                </div>

                                {/* Therapist 2 */}
                                <div className="therapist-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                     data-therapist="james-thompson">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                             alt="James Thompson" 
                                             className="w-16 h-16 rounded-full object-cover"
                                             loading="lazy"
                                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                                        <div>
                                            <h3 className="font-playfair font-semibold text-primary">James Thompson</h3>
                                            <p className="text-accent text-sm">Massage Therapist</p>
                                            <div className="flex items-center mt-1">
                                                <div className="flex text-accent text-xs">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                    <span className="ml-1">4.8 (89 reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary text-sm mb-3">Certified in deep tissue and therapeutic massage</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-success bg-success-50 px-2 py-1 rounded">Available Today</span>
                                        <span className="text-sm text-text-secondary">Specializes in Massage Therapy</span>
                                    </div>
                                </div>

                                {/* Therapist 3 */}
                                <div className="therapist-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                     data-therapist="lisa-chen">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img src="https://images.unsplash.com/photo-1594824488675-58d12c0d5c8a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                             alt="Lisa Chen" 
                                             className="w-16 h-16 rounded-full object-cover"
                                             loading="lazy"
                                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                                        <div>
                                            <h3 className="font-playfair font-semibold text-primary">Lisa Chen</h3>
                                            <p className="text-accent text-sm">Wellness Specialist</p>
                                            <div className="flex items-center mt-1">
                                                <div className="flex text-accent text-xs">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                    <span className="ml-1">4.9 (156 reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary text-sm mb-3">Holistic approach with aromatherapy certification</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-warning bg-warning-50 px-2 py-1 rounded">Limited Availability</span>
                                        <span className="text-sm text-text-secondary">Specializes in Body Treatments</span>
                                    </div>
                                </div>

                                {/* Any Available Therapist Option */}
                                <div className="therapist-option p-4 border border-primary-100 rounded-lg cursor-pointer hover:border-primary hover:shadow-gentle transition-all duration-200" 
                                     data-therapist="any-available">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-playfair font-semibold text-primary">Any Available Therapist</h3>
                                            <p className="text-accent text-sm">Best Match for Your Service</p>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary text-sm mb-3">We'll assign the best available therapist for your treatment</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-success bg-success-50 px-2 py-1 rounded">More Availability</span>
                                        <span className="text-sm text-text-secondary">Flexible Scheduling</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Date & Time Selection */}
                    <div id="step-3" className="booking-step hidden">
                        <div className="card">
                            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Select Date & Time</h2>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Calendar */}
                                <div>
                                    <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Choose Date</h3>
                                    <div className="calendar-container">
                                        <div className="flex items-center justify-between mb-4">
                                            <button id="prev-month" className="p-2 text-primary hover:bg-primary-50 rounded-lg transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                                </svg>
                                            </button>
                                            <h4 id="current-month" className="text-lg font-playfair font-semibold text-primary">January 2025</h4>
                                            <button id="next-month" className="p-2 text-primary hover:bg-primary-50 rounded-lg transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 mb-2">
                                            <div className="text-center text-sm font-medium text-text-secondary py-2">Sun</div>
                                            <div className="text-center text-sm font-medium text-text-secondary py-2">Mon</div>
                                            <div className="text-center text-sm font-medium text-text-secondary py-2">Tue</div>
                                            <div className="text-center text-sm font-medium text-text-secondary py-2">Wed</div>
                                            <div className="text-center text-sm font-medium text-text-secondary py-2">Thu</div>
                                            <div className="text-center text-sm font-medium text-text-secondary py-2">Fri</div>
                                            <div className="text-center text-sm font-medium text-text-secondary py-2">Sat</div>
                                        </div>
                                        <div id="calendar-grid" className="grid grid-cols-7 gap-1">
                                            {/* Calendar dates will be generated by JavaScript */}
                                        </div>
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div>
                                    <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Available Times</h3>
                                    <div id="time-slots" className="space-y-2">
                                        <p className="text-text-secondary text-center py-8">Please select a date first</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Client Information */}
                    <div id="step-4" className="booking-step hidden">
                        <div className="card">
                            <h2 className="text-2xl font-playfair font-bold text-primary mb-6">Your Information</h2>
                            
                            <form id="client-form" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-primary mb-2">First Name *</label>
                                        <input type="text" id="first-name" name="firstName" required={true} className="form-input"/>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-primary mb-2">Last Name *</label>
                                        <input type="text" id="last-name" name="lastName" required={true} className="form-input"/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address *</label>
                                        <input type="email" id="email" name="email" required={true} className="form-input"/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
                                        <input type="tel" id="phone" name="phone" required={true} className="form-input"/>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="special-requests" className="block text-sm font-medium text-primary mb-2">Special Requests or Notes</label>
                                    <textarea id="special-requests" name="specialRequests" rows="4" 
                                              placeholder="Any allergies, preferences, or special requirements..."
                                              className="form-input resize-none"></textarea>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-playfair font-semibold text-primary">Preferences</h3>
                                    
                                    <label className="flex items-center space-x-3">
                                        <input type="checkbox" id="sms-reminders" name="smsReminders" className="w-4 h-4 text-primary border-primary-200 rounded focus:ring-primary-300"/>
                                        <span className="text-text-primary">Send SMS appointment reminders</span>
                                    </label>
                                    
                                    <label className="flex items-center space-x-3">
                                        <input type="checkbox" id="email-updates" name="emailUpdates" className="w-4 h-4 text-primary border-primary-200 rounded focus:ring-primary-300"/>
                                        <span className="text-text-primary">Receive email updates about promotions and new services</span>
                                    </label>
                                </div>

                                <div className="bg-primary-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-primary mb-2">Cancellation Policy</h4>
                                    <p className="text-text-secondary text-sm">
                                        Please provide at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        <button id="prev-step" className="btn-secondary hidden">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Previous
                        </button>
                        <div className="flex-1"></div>
                        <button id="next-step" className="btn-primary">
                            Next
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <button id="confirm-booking" className="btn-accent hidden">
                            Confirm Booking
                        </button>
                    </div>
                </div>

                {/* Booking Summary Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <div className="card-elevated">
                            <h3 className="text-xl font-playfair font-bold text-primary mb-6">Booking Summary</h3>
                            
                            <div className="space-y-4">
                                {/* Selected Service */}
                                <div id="summary-service" className="hidden">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-semibold text-primary">Service</h4>
                                            <p id="selected-service-name" className="text-text-secondary text-sm"></p>
                                            <p id="selected-service-duration" className="text-text-secondary text-xs"></p>
                                        </div>
                                        <span id="selected-service-price" className="text-accent font-semibold"></span>
                                    </div>
                                </div>

                                {/* Selected Add-ons */}
                                <div id="summary-addons" className="hidden">
                                    <h4 className="font-semibold text-primary mb-2">Add-ons</h4>
                                    <div id="selected-addons" className="space-y-1"></div>
                                </div>

                                {/* Selected Therapist */}
                                <div id="summary-therapist" className="hidden">
                                    <h4 className="font-semibold text-primary">Therapist</h4>
                                    <p id="selected-therapist-name" className="text-text-secondary text-sm"></p>
                                </div>

                                {/* Selected Date & Time */}
                                <div id="summary-datetime" className="hidden">
                                    <h4 className="font-semibold text-primary">Date & Time</h4>
                                    <p id="selected-date" className="text-text-secondary text-sm"></p>
                                    <p id="selected-time" className="text-text-secondary text-sm"></p>
                                </div>

                                {/* Total */}
                                <div className="border-t border-primary-100 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-playfair font-semibold text-primary">Total</span>
                                        <span id="total-price" className="text-xl font-bold text-accent">$0</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-6 pt-6 border-t border-primary-100">
                                <div className="space-y-3">
                                    <a href="/services_catalog" className="block text-center text-primary hover:text-accent transition-colors text-sm">
                                        View All Services
                                    </a>
                                    <a href="/therapist_profiles" className="block text-center text-primary hover:text-accent transition-colors text-sm">
                                        Meet Our Therapists
                                    </a>
                                    <a href="/contact_location" className="block text-center text-primary hover:text-accent transition-colors text-sm">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    

    {/* JavaScript for Booking System */}
    



</div>
    </>
  );
}
