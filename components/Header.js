import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-8"}`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-2xl font-playfair font-bold text-primary"
          >
            Essentials by Tanya
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-bold tracking-wider">
          <Link href="/" className="text-unify uppercase relative group">
            HOME
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-unify"></span>
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            ABOUT
          </Link>
          <Link
            href="/best_offers"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            BEST OFFERS
          </Link>
          <Link
            href="/our_procedures"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            OUR PROCEDURES
          </Link>
          <Link
            href="/advices"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            ADVICES
          </Link>
          <Link
            href="/subscribe"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            SUBSCRIBE
          </Link>
          <Link
            href="/gallery"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            GALLERY
          </Link>
          <Link
            href="/products"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            PRODUCTS
          </Link>
          <Link
            href="/contact_location"
            className="text-white hover:text-unify transition-colors uppercase"
          >
            CONTACT
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 px-6 pb-6 pt-4 absolute w-full left-0 top-full">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-unify uppercase font-bold tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white uppercase font-bold tracking-wider"
            >
              About
            </Link>
            <Link
              href="/best_offers"
              className="text-white uppercase font-bold tracking-wider"
            >
              Best Offers
            </Link>
            <Link
              href="/our_procedures"
              className="text-white uppercase font-bold tracking-wider"
            >
              Our Procedures
            </Link>
            <Link
              href="/advices"
              className="text-white uppercase font-bold tracking-wider"
            >
              Advices
            </Link>
            <Link
              href="/subscribe"
              className="text-white uppercase font-bold tracking-wider"
            >
              Subscribe
            </Link>
            <Link
              href="/gallery"
              className="text-white uppercase font-bold tracking-wider"
            >
              Gallery
            </Link>
            <Link
              href="/products"
              className="text-white uppercase font-bold tracking-wider"
            >
              Products
            </Link>
            <Link
              href="/contact_location"
              className="text-white uppercase font-bold tracking-wider"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
