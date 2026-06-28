import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function BestOffers() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>BestOffers - Essentials by Tanya</title>
      </Head>
      <div>
    {/* Header Navigation */}
    

    {/* Page Header Section */}
    <section className="relative pt-32 pb-20 px-6 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-20" alt="Spa Background" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">Exclusive Best Offers</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Indulge in our limited-time special packages and discounts designed to give you the ultimate relaxation
                experience.
            </p>
        </div>
    </section>

    {/* Offers Grid */}
    <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Promo 1 */}
                <div
                    className="card group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden bg-white border border-primary-100">
                    <div
                        className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-md">
                        Save 20%
                    </div>
                    <div className="h-48 overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-6">
                        <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2940&auto=format&fit=crop"
                            alt="Weekend Gateway Package"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-2">Weekend Gateway Package</h3>
                    <p className="text-text-secondary mb-4 min-h-[80px]">
                        Unwind this weekend with a 60-minute full body massage and our signature facial treatment.
                        Designed to banish stress.
                    </p>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-text-secondary line-through text-sm">$250</span>
                            <span className="text-accent font-bold text-2xl">$199</span>
                        </div>
                        <span className="text-sm text-text-secondary bg-surface px-2 py-1 rounded">2 Hrs</span>
                    </div>
                    <a href="/online_booking_system" className="btn-primary w-full text-center block">Book Now</a>
                </div>

                {/* Promo 2 */}
                <div
                    className="card group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden bg-primary text-white border border-primary-100 shadow-xl">
                    <div
                        className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-md">
                        Most Popular
                    </div>
                    <div className="h-48 overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-6">
                        <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2940&auto=format&fit=crop"
                            alt="Bridal Glow Masterclass"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">Bridal Glow Package</h3>
                    <p className="text-white/80 mb-4 min-h-[80px]">
                        Prepare for your special day with a luxurious package including an organic body scrub,
                        brightening facial, and spa manicure.
                    </p>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-white/50 line-through text-sm">$350</span>
                            <span className="text-accent font-bold text-2xl">$275</span>
                        </div>
                        <span className="text-sm text-primary bg-white/90 px-2 py-1 rounded font-medium">3.5 Hrs</span>
                    </div>
                    <a href="/online_booking_system" className="btn-accent w-full text-center block">Book Now</a>
                </div>

                {/* Promo 3 */}
                <div
                    className="card group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden bg-white border border-primary-100">
                    <div
                        className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-md">
                        Buy 1 Get 1 50%
                    </div>
                    <div className="h-48 overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-6">
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop"
                            alt="Couples Retreat"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-2">Couples Retreat</h3>
                    <p className="text-text-secondary mb-4 min-h-[80px]">
                        Share the serenity. Bring a partner or friend and enjoy a synchronized side-by-side Swedish
                        massage in our paired suite.
                    </p>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-text-secondary line-through text-sm">$300</span>
                            <span className="text-accent font-bold text-2xl">$225</span>
                        </div>
                        <span className="text-sm text-text-secondary bg-surface px-2 py-1 rounded">60 Mins</span>
                    </div>
                    <a href="/online_booking_system" className="btn-primary w-full text-center block">Book Now</a>
                </div>

                {/* Promo 4 */}
                <div
                    className="card group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden bg-white border border-primary-100">
                    <div className="h-48 overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-6">
                        <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop"
                            alt="First-Time Visitor"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-2">First-Time Welcome</h3>
                    <p className="text-text-secondary mb-4 min-h-[80px]">
                        New to Essentials by Tanya? Enjoy a complimentary 15-minute scalp massage with any one-hour
                        service booked.
                    </p>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-accent font-bold text-xl">Bonus Included</span>
                        </div>
                        <span className="text-sm text-text-secondary bg-surface px-2 py-1 rounded">+15 Mins</span>
                    </div>
                    <a href="/online_booking_system" className="btn-primary w-full text-center block">Book Now</a>
                </div>

                {/* Loyalty Program Text Block */}
                <div className="lg:col-span-2 card bg-surface flex flex-col justify-center border-l-4 border-accent">
                    <h3 className="text-3xl font-playfair font-bold text-primary mb-4">Join Our VIP Wellness Club</h3>
                    <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                        Become a member and unlock year-round perks! Members receive a monthly 60-minute service of
                        their choice, 10% off all retail products, and priority booking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <a href="#" className="btn-accent px-8">Join the Club - $99/mo</a>
                        <a href="#"
                            className="text-primary font-semibold hover:text-accent transition-colors underline underline-offset-4">Learn
                            More About Membership</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* Footer */}
    

    {/* JavaScript for Mobile Menu */}
    
</div>
    </>
  );
}
