import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function TherapistProfiles() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>TherapistProfiles - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Breadcrumb Navigation */}
    <section className="py-6 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
            <nav className="flex items-center space-x-2 text-sm">
                <a href="/homepage" className="text-text-secondary hover:text-primary transition-colors">Home</a>
                <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="text-primary font-medium">Our Team</span>
            </nav>
        </div>
    </section>

    {/* Hero Section */}
    <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-fluid-3xl font-playfair font-bold text-primary mb-6">
                Meet Our Expert Therapists
            </h1>
            <p className="text-fluid-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Our certified professionals bring years of experience, passion for wellness, and personalized care to every treatment. Each therapist is dedicated to helping you achieve your beauty and wellness goals.
            </p>
        </div>
    </section>

    {/* Therapist Grid Section */}
    <section className="py-16 px-6 bg-surface">
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Therapist Card 1 */}
                <div className="card hover-lift group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Dr. Sophia Martinez" 
                             className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-playfair font-semibold text-primary mb-2">Dr. Sophia Martinez</h3>
                        <p className="text-accent font-medium mb-3">Lead Aesthetician & Skincare Specialist</p>
                        <p className="text-text-secondary text-sm mb-4">15+ years experience in advanced skincare treatments</p>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="text-sm text-text-secondary">4.9 (127 reviews)</span>
                            </div>
                        </div>
                        <button onClick="openTherapistModal('sophia')" className="btn-primary w-full">View Profile</button>
                    </div>
                </div>

                {/* Therapist Card 2 */}
                <div className="card hover-lift group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="James Thompson" 
                             className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-playfair font-semibold text-primary mb-2">James Thompson</h3>
                        <p className="text-accent font-medium mb-3">Licensed Massage Therapist</p>
                        <p className="text-text-secondary text-sm mb-4">12+ years in therapeutic and relaxation massage</p>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="text-sm text-text-secondary">4.8 (94 reviews)</span>
                            </div>
                        </div>
                        <button onClick="openTherapistModal('james')" className="btn-primary w-full">View Profile</button>
                    </div>
                </div>

                {/* Therapist Card 3 */}
                <div className="card hover-lift group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1594824488675-58d12c0d5c8a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Lisa Chen" 
                             className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-playfair font-semibold text-primary mb-2">Lisa Chen</h3>
                        <p className="text-accent font-medium mb-3">Wellness & Aromatherapy Specialist</p>
                        <p className="text-text-secondary text-sm mb-4">10+ years in holistic beauty and wellness</p>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="text-sm text-text-secondary">4.9 (156 reviews)</span>
                            </div>
                        </div>
                        <button onClick="openTherapistModal('lisa')" className="btn-primary w-full">View Profile</button>
                    </div>
                </div>

                {/* Therapist Card 4 */}
                <div className="card hover-lift group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Michael Rodriguez" 
                             className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-playfair font-semibold text-primary mb-2">Michael Rodriguez</h3>
                        <p className="text-accent font-medium mb-3">Body Treatment Specialist</p>
                        <p className="text-text-secondary text-sm mb-4">8+ years in body wraps and detox treatments</p>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="text-sm text-text-secondary">4.7 (82 reviews)</span>
                            </div>
                        </div>
                        <button onClick="openTherapistModal('michael')" className="btn-primary w-full">View Profile</button>
                    </div>
                </div>

                {/* Therapist Card 5 */}
                <div className="card hover-lift group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="Emma Williams" 
                             className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-playfair font-semibold text-primary mb-2">Emma Williams</h3>
                        <p className="text-accent font-medium mb-3">Nail Care & Manicure Expert</p>
                        <p className="text-text-secondary text-sm mb-4">6+ years in nail artistry and hand care</p>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="text-sm text-text-secondary">4.8 (73 reviews)</span>
                            </div>
                        </div>
                        <button onClick="openTherapistModal('emma')" className="btn-primary w-full">View Profile</button>
                    </div>
                </div>

                {/* Therapist Card 6 */}
                <div className="card hover-lift group">
                    <div className="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                             alt="David Park" 
                             className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                             loading="lazy"
                             onerror="this.src='https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; this.onerror=null;" />
                        <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-playfair font-semibold text-primary mb-2">David Park</h3>
                        <p className="text-accent font-medium mb-3">Sports Massage Therapist</p>
                        <p className="text-text-secondary text-sm mb-4">9+ years in sports therapy and rehabilitation</p>
                        <div className="flex justify-center items-center space-x-4 mb-6">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span className="text-sm text-text-secondary">4.9 (108 reviews)</span>
                            </div>
                        </div>
                        <button onClick="openTherapistModal('david')" className="btn-primary w-full">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Therapist Modal */}
    <div id="therapist-modal" className="fixed inset-0 z-50 hidden bg-black/50 backdrop-blur-sm">
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-background border-b border-primary-100 p-6 flex justify-between items-center">
                    <h2 id="modal-title" className="text-2xl font-playfair font-bold text-primary">Therapist Profile</h2>
                    <button onClick="closeTherapistModal()" className="p-2 text-text-secondary hover:text-primary transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div id="modal-content" className="p-6">
                    {/* Content will be dynamically loaded */}
                </div>
            </div>
        </div>
    </div>

    {/* Call to Action Section */}
    <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-fluid-2xl font-playfair font-bold mb-4">
                Ready to Experience Expert Care?
            </h2>
            <p className="text-fluid-base mb-8 opacity-90">
                Book your appointment with one of our certified therapists and begin your journey to wellness and beauty.
            </p>
            <a href="/online_booking_system" className="btn-accent text-lg px-8 py-4 hover-lift">
                Book Your Appointment
            </a>
        </div>
    </section>

    {/* Footer */}
    

    {/* JavaScript */}
    



</div>
    </>
  );
}
