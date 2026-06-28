# Essentials by Tanya

A full-stack beauty therapy and spa booking platform — services catalog,
therapist profiles, and a real multi-step booking wizard with live
availability.

This branch (`rebuild/fullstack-app-router`) is a ground-up rebuild on
Next.js App Router with a designed (not yet connected) database. The
original static-HTML-turned-Pages-Router site is preserved on `main` and
on `fix/critical-bugs-and-refactor`, which contains targeted bug fixes to
that earlier architecture without changing it.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **ORM / Database:** Prisma, schema designed for PostgreSQL — see
  [`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md). Not connected to a
  live database yet; the app currently reads from seed data through the
  repository layer (see "Data layer" below).
- **Validation:** Zod

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

There's no database to provision to run this locally — see "Data layer."

## Project structure

```
app/              Routes (pages + API route handlers)
components/
  layout/         Header, Footer
  ui/             Generic primitives: Button, Card, Modal, Accordion, Badge, StarRating
  features/       Composed pieces: ServiceCard, BookingWizard, ContactForm, etc.
lib/
  seed-data/      Source-of-truth content (services, therapists, products, etc.)
  repositories/   Data-access functions -- the only layer that will import Prisma
                  once a database is connected
  validation/     Zod schemas for API request bodies
prisma/
  schema.prisma   Full data model
  seed.ts         Populates a real database from lib/seed-data/ once one exists
docs/             Architecture, database schema, and API spec write-ups
```

Full details: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md),
[`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md),
[`docs/API_SPEC.md`](docs/API_SPEC.md).

## Data layer

Nothing is connected to a live database yet. `lib/repositories/` read
directly from `lib/seed-data/` in-memory, using the same function
signatures a real Prisma-backed version would have — so connecting a
real database later is a change inside each repository file, not a
rewrite of any page or API route. `prisma/seed.ts` is written and ready
to populate a real database from that same seed data once `DATABASE_URL`
points at one.

One real consequence of this: booking, contact, and newsletter data is
in-memory and resets whenever the server restarts.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run a production build |
| `npm run lint` | Lint |
| `npm run db:generate` | Generate the Prisma client (requires network access to Prisma's engine binaries) |
| `npm run db:push` | Push the schema to `DATABASE_URL` |
| `npm run db:seed` | Seed a connected database from `lib/seed-data/` |

## Current status

All 6 originally planned phases are complete: architecture/schema/API
design, project scaffolding, the data layer, all core marketing pages, the
booking wizard, and production-readiness basics (SEO metadata, sitemap,
JSON-LD, loading/error states, an accessibility pass). Not yet done:
connecting a real database, authentication/an admin panel for managing
content without a DB client, and automated tests.
