import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
                <path d="M20 2C11.163 2 4 9.163 4 18s7.163 16 16 16 16-7.163 16-16S28.837 2 20 2z" />
              </svg>
              <span className="text-xl font-playfair font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-white/80 leading-relaxed">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/therapists" className="hover:text-accent transition-colors">Therapists</Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-accent transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-white/80">
              <div>{siteConfig.address.street}</div>
              <div>{siteConfig.phone}</div>
              <div>{siteConfig.email}</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sun</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex items-center justify-between">
          <div className="flex space-x-4">
            <a href="#" className="text-white/80 hover:text-accent">Twitter</a>
            <a href="#" className="text-white/80 hover:text-accent">Instagram</a>
            <a href="#" className="text-white/80 hover:text-accent">Facebook</a>
          </div>
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
