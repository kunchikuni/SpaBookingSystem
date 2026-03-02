import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ContactLocation() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ContactLocation - Essentials by Tanya</title>
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
                <span className="text-primary font-medium">Contact</span>
            </nav>
        </div>
    </section>

    {/* Hero Section */}
    <section className="py-16 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 400" fill="currentColor">
                <circle cx="100" cy="100" r="60" className="organic-shape-1"/>
                <circle cx="300" cy="150" r="40" className="organic-shape-2"/>
                <circle cx="200" cy="300" r="80" className="organic-shape-3"/>
            </svg>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-fluid-3xl font-playfair font-bold mb-4">
                Get in Touch
            </h1>
            <p className="text-fluid-lg opacity-90 max-w-2xl mx-auto">
                We're here to help you begin your wellness journey. Contact us for appointments, inquiries, or to learn more about our services.
            </p>
        </div>
    </section>

    {/* Main Content */}
    <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="order-2 lg:order-1">
                    <div className="card-elevated">
                        <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-6">
                            Send us a Message
                        </h2>
                        <form id="contact-form" className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                    Full Name *
                                </label>
                                <input type="text" 
                                       id="name" 
                                       name="name" 
                                       className="form-input" 
                                       placeholder="Enter your full name"
                                       required={true}/>
                                <div className="error-message hidden text-error text-sm mt-1"></div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                    Email Address *
                                </label>
                                <input type="email" 
                                       id="email" 
                                       name="email" 
                                       className="form-input" 
                                       placeholder="Enter your email address"
                                       required={true}/>
                                <div className="error-message hidden text-error text-sm mt-1"></div>
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                                    Phone Number
                                </label>
                                <input type="tel" 
                                       id="phone" 
                                       name="phone" 
                                       className="form-input" 
                                       placeholder="(555) 123-4567"/>
                            </div>

                            {/* Service Interest */}
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                                    Service Interest
                                </label>
                                <select id="service" name="service" className="form-input">
                                    <option value="">Select a service</option>
                                    <option value="facial">Facial Treatments</option>
                                    <option value="massage">Massage Therapy</option>
                                    <option value="body">Body Treatments</option>
                                    <option value="packages">Treatment Packages</option>
                                    <option value="consultation">Consultation</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Preferred Contact Method */}
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-3">
                                    Preferred Contact Method
                                </label>
                                <div className="flex flex-wrap gap-4">
                                    <label className="flex items-center">
                                        <input type="radio" name="contact_method" value="email" className="text-primary focus:ring-primary-300" checked/>
                                        <span className="ml-2 text-sm text-text-primary">Email</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="contact_method" value="phone" className="text-primary focus:ring-primary-300"/>
                                        <span className="ml-2 text-sm text-text-primary">Phone</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="contact_method" value="text" className="text-primary focus:ring-primary-300"/>
                                        <span className="ml-2 text-sm text-text-primary">Text Message</span>
                                    </label>
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                    Message *
                                </label>
                                <textarea id="message" 
                                          name="message" 
                                          rows="5" 
                                          className="form-input resize-none" 
                                          placeholder="Tell us about your needs or questions..."
                                          maxLength="500"
                                          required={true}></textarea>
                                <div className="flex justify-between items-center mt-2">
                                    <div className="error-message hidden text-error text-sm"></div>
                                    <div className="text-sm text-text-secondary">
                                        <span id="char-count">0</span>/500 characters
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn-primary w-full hover-lift">
                                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Business Information */}
                <div className="order-1 lg:order-2 space-y-8">
                    {/* Operating Hours */}
                    <div className="card">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="text-xl font-playfair font-semibold text-primary">Business Hours</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 px-3 bg-accent-50 rounded-lg">
                                <span className="font-medium text-primary">Today (Monday)</span>
                                <span className="text-accent font-semibold">9:00 AM - 8:00 PM</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-text-secondary">Tuesday - Friday</span>
                                    <span className="text-text-primary">9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-secondary">Saturday</span>
                                    <span className="text-text-primary">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-text-secondary">Sunday</span>
                                    <span className="text-text-primary">10:00 AM - 5:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="card">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <h3 className="text-xl font-playfair font-semibold text-primary">Contact Information</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-text-primary mb-2">Phone Numbers</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <span className="text-sm text-text-secondary w-20">Main:</span>
                                        <a href="tel:+15551234567" className="text-primary hover:text-accent transition-colors">(555) 123-4567</a>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-sm text-text-secondary w-20">Booking:</span>
                                        <a href="tel:+15551234568" className="text-primary hover:text-accent transition-colors">(555) 123-4568</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-text-primary mb-2">Email Addresses</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <span className="text-sm text-text-secondary w-20">General:</span>
                                        <a href="mailto:info@serenityspa.com" className="text-primary hover:text-accent transition-colors">info@serenityspa.com</a>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-sm text-text-secondary w-20">Booking:</span>
                                        <a href="mailto:booking@serenityspa.com" className="text-primary hover:text-accent transition-colors">booking@serenityspa.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="card">
                        <div className="flex items-center mb-4">
                            <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <h3 className="text-xl font-playfair font-semibold text-primary">Location</h3>
                        </div>
                        <div className="space-y-3">
                            <p className="text-text-primary">
                                123 Wellness Avenue<br/>
                                Spa District, Serenity City<br/>
                                SC 12345
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href="https://maps.google.com/?q=123+Wellness+Avenue" 
                                   target="_blank"
                                   className="btn-secondary text-center">
                                    <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"></path>
                                    </svg>
                                    Get Directions
                                </a>
                                <button onClick="showParkingInfo()" className="bg-surface text-primary border border-primary-200 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                                    <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z"></path>
                                    </svg>
                                    Parking Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Interactive Map Section */}
    <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    Find Us
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Located in the heart of the wellness district with convenient parking and public transportation
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Map Container */}
                <div className="lg:col-span-2">
                    <div className="relative bg-primary-100 rounded-xl overflow-hidden h-96 lg:h-[500px]">
                        {/* Placeholder for Interactive Map */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p className="text-primary font-medium">Interactive Map</p>
                                <p className="text-text-secondary text-sm">123 Wellness Avenue, Spa District</p>
                            </div>
                        </div>
                        {/* Custom Marker */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-soft animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Transportation Info */}
                <div className="space-y-6">
                    <div className="card">
                        <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Transportation</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-text-primary mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z"></path>
                                    </svg>
                                    Parking
                                </h4>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Free valet parking</li>
                                    <li>• Street parking available</li>
                                    <li>• Wellness Center garage (2 blocks)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-text-primary mb-2 flex items-center">
                                    <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Public Transit
                                </h4>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    <li>• Metro Line 3 (Wellness Station)</li>
                                    <li>• Bus routes 15, 22, 34</li>
                                    <li>• 5-minute walk from station</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Nearby Amenities</h3>
                        <ul className="text-sm text-text-secondary space-y-2">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Wellness Café (next door)
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Organic Market (1 block)
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Yoga Studio (2 blocks)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Social Media Section */}
    <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    Connect With Us
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Follow us for wellness tips, behind-the-scenes content, and special offers
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Instagram */}
                <div className="card text-center hover-lift">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Instagram</h3>
                    <p className="text-text-secondary text-sm mb-3">12.5K followers</p>
                    <p className="text-text-secondary text-sm mb-4">Daily wellness inspiration and treatment showcases</p>
                    <a href="#" className="text-accent hover:text-accent-600 transition-colors font-medium">@serenityspa</a>
                </div>

                {/* Facebook */}
                <div className="card text-center hover-lift">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Facebook</h3>
                    <p className="text-text-secondary text-sm mb-3">8.2K followers</p>
                    <p className="text-text-secondary text-sm mb-4">Community updates and wellness tips</p>
                    <a href="#" className="text-accent hover:text-accent-600 transition-colors font-medium">Serenity Spa</a>
                </div>

                {/* YouTube */}
                <div className="card text-center hover-lift">
                    <div className="w-16 h-16 bg-red-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-2">YouTube</h3>
                    <p className="text-text-secondary text-sm mb-3">3.1K subscribers</p>
                    <p className="text-text-secondary text-sm mb-4">Treatment tutorials and spa tours</p>
                    <a href="#" className="text-accent hover:text-accent-600 transition-colors font-medium">Serenity Spa</a>
                </div>
            </div>
        </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-fluid-2xl font-playfair font-bold text-primary mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-fluid-base text-text-secondary">
                    Find answers to common questions about our services and policies
                </p>
            </div>

            <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="card">
                    <button className="faq-toggle w-full text-left flex justify-between items-center" data-target="faq-1">
                        <h3 className="text-lg font-playfair font-semibold text-primary">What should I expect during my first visit?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-1" className="faq-content hidden mt-4 pt-4 border-t border-primary-100">
                        <p className="text-text-secondary leading-relaxed">
                            Your first visit begins with a consultation to understand your needs and preferences. We'll discuss your wellness goals, any concerns, and recommend the best treatments for you. Please arrive 15 minutes early to complete our intake forms and enjoy our relaxation area.
                        </p>
                    </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="card">
                    <button className="faq-toggle w-full text-left flex justify-between items-center" data-target="faq-2">
                        <h3 className="text-lg font-playfair font-semibold text-primary">What is your cancellation policy?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-2" className="faq-content hidden mt-4 pt-4 border-t border-primary-100">
                        <p className="text-text-secondary leading-relaxed">
                            We require 24-hour notice for cancellations or rescheduling. Cancellations made less than 24 hours in advance may be subject to a 50% service charge. No-shows will be charged the full service amount.
                        </p>
                    </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="card">
                    <button className="faq-toggle w-full text-left flex justify-between items-center" data-target="faq-3">
                        <h3 className="text-lg font-playfair font-semibold text-primary">Do you offer gift certificates?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-3" className="faq-content hidden mt-4 pt-4 border-t border-primary-100">
                        <p className="text-text-secondary leading-relaxed">
                            Yes! Gift certificates are available for individual services, treatment packages, or monetary amounts. They can be purchased online or in-person and are valid for one year from the date of purchase.
                        </p>
                    </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="card">
                    <button className="faq-toggle w-full text-left flex justify-between items-center" data-target="faq-4">
                        <h3 className="text-lg font-playfair font-semibold text-primary">What should I bring to my appointment?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-4" className="faq-content hidden mt-4 pt-4 border-t border-primary-100">
                        <p className="text-text-secondary leading-relaxed">
                            Just bring yourself! We provide all necessary linens, robes, and slippers. For facial treatments, please arrive with clean skin (no makeup). We recommend avoiding caffeine and alcohol before your appointment for the best experience.
                        </p>
                    </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="card">
                    <button className="faq-toggle w-full text-left flex justify-between items-center" data-target="faq-5">
                        <h3 className="text-lg font-playfair font-semibold text-primary">Is parking available?</h3>
                        <svg className="w-5 h-5 text-primary transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="faq-5" className="faq-content hidden mt-4 pt-4 border-t border-primary-100">
                        <p className="text-text-secondary leading-relaxed">
                            Yes, we offer complimentary valet parking for all clients. Street parking is also available, and there's a public parking garage two blocks away. Our location is easily accessible by public transportation as well.
                        </p>
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
                <p className="text-sm opacity-75 mt-3">
                    By subscribing, you agree to our 
                    <a href="#" className="underline hover:text-accent transition-colors">Privacy Policy</a>
                </p>
            </form>
        </div>
    </section>

    {/* Footer */}
    

    {/* Parking Info Modal */}
    <div id="parking-modal" className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div className="bg-background rounded-xl max-w-md w-full p-6 relative">
            <button onClick="hideParkingInfo()" className="absolute top-4 right-4 text-text-secondary hover:text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <h3 className="text-xl font-playfair font-bold text-primary mb-4">Parking Information</h3>
            <div className="space-y-4">
                <div>
                    <h4 className="font-medium text-text-primary mb-2">Complimentary Valet</h4>
                    <p className="text-sm text-text-secondary">Available during business hours at our main entrance. Simply hand your keys to our valet attendant.</p>
                </div>
                <div>
                    <h4 className="font-medium text-text-primary mb-2">Street Parking</h4>
                    <p className="text-sm text-text-secondary">Metered parking available on Wellness Avenue and surrounding streets. 2-hour limit during business hours.</p>
                </div>
                <div>
                    <h4 className="font-medium text-text-primary mb-2">Wellness Center Garage</h4>
                    <p className="text-sm text-text-secondary">Located 2 blocks east at 200 Wellness Avenue. $5 flat rate with spa validation.</p>
                </div>
            </div>
        </div>
    </div>

    {/* JavaScript */}
    



</div>
    </>
  );
}
