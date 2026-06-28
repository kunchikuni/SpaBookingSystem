import type { Metadata } from "next";
import { Playfair_Display, Inter, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Self-hosted via next/font instead of the legacy @import url(...) to Google
// Fonts — removes a render-blocking external request and the layout shift
// that comes with it.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-source-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Essentials by Tanya — Beauty Therapy & Spa",
    template: "%s | Essentials by Tanya",
  },
  description:
    "Your sanctuary for beauty, wellness, and rejuvenation. Book treatments, meet our therapists, and explore our spa boutique.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${sourceSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
