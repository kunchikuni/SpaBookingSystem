import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Gallery() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Gallery - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Page Header Section */}
    <section className="py-20 px-6 bg-surface">
        <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">Our Sanctuary</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Take a visual journey through our tranquil environment, state-of-the-art facilities, and premium
                treatments.
            </p>
        </div>
    </section>

    {/* Gallery Grid */}
    <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
            {/* Filter Options (Static for UI Demo) */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                    className="px-6 py-2 rounded-full bg-primary text-white font-medium text-sm transition-colors">All</button>
                <button
                    className="px-6 py-2 rounded-full bg-white text-primary border border-primary/20 hover:border-accent hover:text-accent font-medium text-sm transition-colors">Interior</button>
                <button
                    className="px-6 py-2 rounded-full bg-white text-primary border border-primary/20 hover:border-accent hover:text-accent font-medium text-sm transition-colors">Treatments</button>
                <button
                    className="px-6 py-2 rounded-full bg-white text-primary border border-primary/20 hover:border-accent hover:text-accent font-medium text-sm transition-colors">Products</button>
            </div>

            {/* Masonry-style Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Row 1 */}
                <div className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer aspect-[4/3]">
                    <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2940&auto=format&fit=crop"
                        alt="Spa Interior Relaxation Area"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl tracking-wider">Relaxation Area</span>
                    </div>
                </div>

                <div
                    className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer sm:row-span-2 aspect-[3/4] sm:aspect-auto">
                    <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop"
                        alt="Massage Therapy Room"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl tracking-wider">Treatment Suites</span>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer aspect-[4/3]">
                    <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop"
                        alt="Facial Treatment"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl tracking-wider">Facial Therapy</span>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer aspect-[4/3]">
                    <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2944&auto=format&fit=crop"
                        alt="Hot Stone Massage"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl tracking-wider">Hot Stone Therapy</span>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer aspect-[4/3]">
                    <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop"
                        alt="Spa Products"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl tracking-wider">Organic Products</span>
                    </div>
                </div>

                {/* Row 3 */}
                <div
                    className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer sm:col-span-2 aspect-[21/9] sm:aspect-[21/9]">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5adee9f50?q=80&w=2940&auto=format&fit=crop"
                        alt="Couples Massage Room"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl tracking-wider">Couples Suite</span>
                    </div>
                </div>

                <div
                    className="group relative overflow-hidden rounded-xl shadow-sm cursor-pointer aspect-[4/3] sm:aspect-auto height-full">
                    <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2940&auto=format&fit=crop"
                        alt="Reception Area"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-playfair text-xl tracking-wider">Welcome Area</span>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <p className="text-lg text-text-secondary mb-6">Ready to experience this in person?</p>
                <a href="/online_booking_system" className="btn-primary inline-flex items-center space-x-2">
                    <span>Book Your Visit Today</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    {/* Footer */}
    

    {/* JavaScript for Mobile Menu */}
    
</div>
    </>
  );
}
