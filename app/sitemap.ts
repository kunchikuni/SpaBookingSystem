import type { MetadataRoute } from "next";
import { getAllServices } from "@/lib/repositories/serviceRepository";
import { getAllTherapists } from "@/lib/repositories/therapistRepository";
import { siteConfig } from "@/lib/site-config";

const STATIC_ROUTES = [
  "",
  "/about",
  "/services",
  "/therapists",
  "/best-offers",
  "/products",
  "/gallery",
  "/advices",
  "/subscribe",
  "/contact",
  "/booking",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const serviceEntries = getAllServices().map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const therapistEntries = getAllTherapists().map((therapist) => ({
    url: `${siteConfig.url}/therapists/${therapist.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...serviceEntries, ...therapistEntries];
}
