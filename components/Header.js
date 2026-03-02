import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const current = window.scrollY;
      if (current > lastScrollY.current && current > 100 && !open) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header className={`fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-primary-100 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <svg
            className="w-10 h-10 text-primary"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M20 2C11.163 2 4 9.163 4 18s7.163 16 16 16 16-7.163 16-16S28.837 2 20 2zm0 28c-6.627 0-12-5.373-12-12S13.373 6 20 6s12 5.373 12 12-5.373 12-12 12z" />
            <circle cx="20" cy="18" r="8" opacity="0.6" />
            <circle cx="20" cy="18" r="4" opacity="0.8" />
          </svg>
          <Link
            href="/"
            className="text-2xl font-playfair font-bold text-primary"
          >
            Essentials by Tanya
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
          <Link href="/" className="text-text-secondary hover:text-primary">
            Home
          </Link>
          <Link
            href="/services_catalog"
            className="text-text-secondary hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/therapist_profiles"
            className="text-text-secondary hover:text-primary"
          >
            Therapists
          </Link>
          <Link
            href="/contact_location"
            className="text-text-secondary hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href="/best_offers"
            className="text-text-secondary hover:text-primary"
          >
            Best Offers
          </Link>
          <Link href="/online_booking_system" className="btn-primary">
            Book Appointment
          </Link>
        </nav>

        <button
          onClick={() => {
            setOpen(!open);
            if (!open) setHidden(false);
          }}
          className="lg:hidden p-2 text-primary"
        >
          <svg
            className="w-6 h-6"
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
        <div className="lg:hidden px-6 pb-6 border-t border-primary-100">
          <div className="flex flex-col space-y-3 py-4">
            <Link href="/" className="text-text-secondary">
              Home
            </Link>
            <Link href="/services_catalog" className="text-text-secondary">
              Services
            </Link>
            <Link href="/therapist_profiles" className="text-text-secondary">
              Therapists
            </Link>
            <Link href="/contact_location" className="text-text-secondary">
              Contact
            </Link>
            <Link
              href="/online_booking_system"
              className="btn-primary w-full text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
