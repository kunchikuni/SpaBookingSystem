// Populates a real database from the same lib/seed-data/ modules the
// in-memory repositories read from today. Run with `npm run db:seed`
// once DATABASE_URL points at an actual Postgres instance -- not
// runnable in this sandbox (Prisma's engine binaries aren't reachable
// from here, see the Phase 2 commit message for details).

import { PrismaClient } from "@prisma/client";
import { services, addOns } from "../lib/seed-data/services";
import { therapists } from "../lib/seed-data/therapists";
import { products } from "../lib/seed-data/products";
import { galleryItems } from "../lib/seed-data/gallery";
import { offers } from "../lib/seed-data/offers";
import { faqs } from "../lib/seed-data/faqs";
import { testimonials } from "../lib/seed-data/testimonials";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding services and tiers...");
  for (const service of services) {
    const { tiers, ...serviceData } = service;
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: serviceData,
      create: serviceData,
    });
    if (tiers) {
      for (const tier of tiers) {
        await prisma.serviceTier.create({
          data: { ...tier, serviceId: service.id },
        });
      }
    }
  }

  console.log("Seeding add-ons...");
  for (const addOn of addOns) {
    await prisma.addOn.upsert({ where: { id: addOn.id }, update: addOn, create: addOn });
  }

  console.log("Seeding therapists and their qualified services...");
  for (const therapist of therapists) {
    const { serviceIds, ...therapistData } = therapist;
    await prisma.therapist.upsert({
      where: { slug: therapist.slug },
      update: therapistData,
      create: therapistData,
    });
    for (const serviceId of serviceIds) {
      await prisma.therapistService.upsert({
        where: { therapistId_serviceId: { therapistId: therapist.id, serviceId } },
        update: {},
        create: { therapistId: therapist.id, serviceId },
      });
    }
  }

  console.log("Seeding products...");
  for (const product of products) {
    await prisma.product.upsert({ where: { slug: product.slug }, update: product, create: product });
  }

  console.log("Seeding gallery items...");
  for (const item of galleryItems) {
    await prisma.galleryItem.upsert({ where: { id: item.id }, update: item, create: item });
  }

  console.log("Seeding offers...");
  for (const offer of offers) {
    await prisma.offer.upsert({ where: { id: offer.id }, update: offer, create: offer });
  }

  console.log("Seeding FAQs...");
  for (const faq of faqs) {
    await prisma.faq.upsert({ where: { id: faq.id }, update: faq, create: faq });
  }

  console.log("Seeding testimonials...");
  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: testimonial.id },
      update: testimonial,
      create: testimonial,
    });
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
