"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/best-offers", label: "Best Offers" },
  { href: "/services", label: "Our Procedures" },
  { href: "/advices", label: "Advices" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-script text-3xl text-secondary-200 leading-none">Essentials</span>
          <span className="text-[10px] tracking-[0.3em] text-white/80 font-medium uppercase">
            by Tanya
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-bold tracking-wider">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase relative transition-colors ${
                  active ? "text-secondary-200" : "text-white hover:text-secondary-200"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary-200" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white focus-ring"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 px-6 pb-6 pt-4 absolute w-full left-0 top-full">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase font-bold tracking-wider ${
                  isActive(link.href) ? "text-secondary-200" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
