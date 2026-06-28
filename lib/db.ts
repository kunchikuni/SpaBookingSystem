import { PrismaClient } from "@prisma/client";

// Standard Next.js Prisma singleton pattern -- prevents creating a new
// client (and a new connection pool) on every hot-reload in dev.
//
// Not actually imported by any repository yet -- the repositories in
// lib/repositories/ read from lib/seed-data/ in-memory for now, per
// docs/ARCHITECTURE.md. This file exists so connecting a real database
// later is "import db from here" in each repository, not new plumbing.

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
