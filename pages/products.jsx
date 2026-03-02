import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Products - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Page Header Section */}
    <section className="py-20 px-6 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-10" alt="Organic Products Background" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">Our Boutique</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Extend your spa experience at home with our curated selection of premium organic skincare and wellness
                products.
            </p>
        </div>
    </section>

    {/* Products Grid */}
    <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">

            {/* Category Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div className="flex flex-wrap gap-4 mb-6 md:mb-0">
                    <button
                        className="px-6 py-2 rounded-full bg-primary text-white font-medium text-sm transition-colors">All
                        Products</button>
                    <button
                        className="px-6 py-2 rounded-full bg-white text-primary border border-primary/20 hover:border-accent hover:text-accent font-medium text-sm transition-colors">Skincare</button>
                    <button
                        className="px-6 py-2 rounded-full bg-white text-primary border border-primary/20 hover:border-accent hover:text-accent font-medium text-sm transition-colors">Body
                        Care</button>
                    <button
                        className="px-6 py-2 rounded-full bg-white text-primary border border-primary/20 hover:border-accent hover:text-accent font-medium text-sm transition-colors">Essential
                        Oils</button>
                </div>

                <div className="relative">
                    <select
                        className="appearance-none bg-white border border-primary/20 text-primary py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
                        <option>Sort by: Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest Arrivals</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Product Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {/* Product 1 */}
                <div
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-primary/10 group">
                    <div className="relative h-64 overflow-hidden p-6 bg-surface flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2787&auto=format&fit=crop"
                            alt="Revitalizing Face Serum"
                            className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                            Bestseller</div>
                    </div>
                    <div className="p-6">
                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Skincare</p>
                        <h3 className="text-lg font-playfair font-bold text-primary mb-2 line-clamp-1">Revitalizing Face
                            Serum</h3>
                        <div className="flex items-center mb-4">
                            <div className="flex text-accent text-sm">
                                ★★★★★
                            </div>
                            <span className="text-xs text-text-secondary ml-2">(42)</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-primary">$65.00</span>
                            <button className="bg-primary hover:bg-accent text-white p-2 rounded-full transition-colors"
                                title="Add to Cart">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-primary/10 group">
                    <div className="relative h-64 overflow-hidden p-6 bg-surface flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1556228578-8d89b6acd8d5?q=80&w=2787&auto=format&fit=crop"
                            alt="Organic Lavender Body Oil"
                            className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Body Care</p>
                        <h3 className="text-lg font-playfair font-bold text-primary mb-2 line-clamp-1">Lavender Body Oil
                        </h3>
                        <div className="flex items-center mb-4">
                            <div className="flex text-accent text-sm">
                                ★★★★★
                            </div>
                            <span className="text-xs text-text-secondary ml-2">(18)</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-primary">$42.00</span>
                            <button className="bg-primary hover:bg-accent text-white p-2 rounded-full transition-colors"
                                title="Add to Cart">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-primary/10 group">
                    <div className="relative h-64 overflow-hidden p-6 bg-surface flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1608248593842-8021c64fd459?q=80&w=2818&auto=format&fit=crop"
                            alt="Himalayan Bath Salts"
                            className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Bath & Body</p>
                        <h3 className="text-lg font-playfair font-bold text-primary mb-2 line-clamp-1">Himalayan Bath Salts
                        </h3>
                        <div className="flex items-center mb-4">
                            <div className="flex text-accent text-sm">
                                ★★★★☆
                            </div>
                            <span className="text-xs text-text-secondary ml-2">(27)</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-primary">$28.00</span>
                            <button className="bg-primary hover:bg-accent text-white p-2 rounded-full transition-colors"
                                title="Add to Cart">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 4 */}
                <div
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-primary/10 group">
                    <div className="relative h-64 overflow-hidden p-6 bg-surface flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2838&auto=format&fit=crop"
                            alt="Eucalyptus Essential Oil"
                            className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">New
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Essential Oils</p>
                        <h3 className="text-lg font-playfair font-bold text-primary mb-2 line-clamp-1">Eucalyptus Essential
                            Oil</h3>
                        <div className="flex items-center mb-4">
                            <div className="flex text-accent text-sm">
                                ★★★★★
                            </div>
                            <span className="text-xs text-text-secondary ml-2">(12)</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-primary">$22.00</span>
                            <button className="bg-primary hover:bg-accent text-white p-2 rounded-full transition-colors"
                                title="Add to Cart">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
                <nav className="flex items-center space-x-2">
                    <a href="#"
                        className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                    </a>
                    <a href="#" className="px-4 py-2 rounded-md bg-primary text-white font-medium">1</a>
                    <a href="#"
                        className="px-4 py-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface font-medium transition-colors">2</a>
                    <a href="#"
                        className="px-4 py-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface font-medium transition-colors">3</a>
                    <span className="px-4 py-2 text-text-secondary">...</span>
                    <a href="#"
                        className="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </a>
                </nav>
            </div>

        </div>
    </section>

    {/* Footer */}
    

    {/* JavaScript for Mobile Menu */}
    
</div>
    </>
  );
}
