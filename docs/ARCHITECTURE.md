# Architecture — Essentials by Tanya (Rebuild)

Phase 1 deliverable. Supersedes `architecture.md` at the repo root, which documents
the legacy Pages Router site preserved on `fix/critical-bugs-and-refactor`.

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | Current stable (16.2.x), Server Components, Route Handlers double as the API layer, avoids the Next 13 CVEs the legacy site was running |
| Language | TypeScript | Type safety across the API/DB boundary matters once there's a real schema |
| UI | React 19.2 + Tailwind CSS | Tailwind config/design tokens carried over from the legacy site (colors, fonts, shadows, animations) |
| ORM | Prisma | Schema-as-code, generates a typed client, easy to swap dev SQLite for production Postgres later |
| Database (designed only) | PostgreSQL | Relational fits the data (services/therapists/bookings have real foreign keys); not provisioned in this phase per your DB-is-off-limits rule |
| Validation | Zod | Validates API request bodies before they reach the repository layer |
| Package manager | npm | Matches the existing repo |

## Request flow

Browser → Next.js server (Route Handlers / Server Components) → service/repository
layer → Prisma → PostgreSQL.

The repository layer (`lib/repositories/*`) is the only place that imports Prisma.
Route handlers and Server Components never query the database directly — they call
a repository function. This means swapping the data source later (e.g. seed-data
mock now, real Postgres later) is a change in one place per entity, not a rewrite
of every page.

## File structure

```
beauty-therapy-spa/
├── app/
│   ├── layout.tsx                    # Root layout: Header, Footer, fonts, metadata
│   ├── page.tsx                      # Home (/)
│   ├── globals.css
│   ├── about/page.tsx
│   ├── advices/page.tsx
│   ├── subscribe/page.tsx
│   ├── best-offers/page.tsx
│   ├── gallery/page.tsx
│   ├── products/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx                  # Catalog
│   │   └── [slug]/page.tsx           # Detail — dynamic route (fixes the old
│   │                                   single static page that couldn't show
│   │                                   per-service content)
│   ├── therapists/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── booking/
│   │   └── page.tsx                  # Wizard (client component)
│   └── api/
│       ├── services/route.ts
│       ├── services/[slug]/route.ts
│       ├── therapists/route.ts
│       ├── therapists/[slug]/route.ts
│       ├── products/route.ts
│       ├── offers/route.ts
│       ├── gallery/route.ts
│       ├── testimonials/route.ts
│       ├── faqs/route.ts
│       ├── availability/route.ts
│       ├── bookings/route.ts
│       ├── bookings/[id]/route.ts
│       ├── contact/route.ts
│       └── newsletter/route.ts
├── components/
│   ├── layout/          # Header, Footer, MobileNav
│   ├── ui/              # Button, Card, Modal, Accordion, StarRating, Badge
│   └── features/        # ServiceCard, TherapistCard, BookingWizard/*, FaqAccordion
├── lib/
│   ├── db.ts                         # Prisma client singleton
│   ├── repositories/                 # One file per entity — the only layer that imports Prisma
│   │   ├── serviceRepository.ts
│   │   ├── therapistRepository.ts
│   │   ├── bookingRepository.ts
│   │   └── ...
│   └── validation/                   # Zod schemas for API request bodies
├── prisma/
│   ├── schema.prisma
│   └── seed.ts                       # Loads the real content already extracted from the legacy site
├── types/
│   └── index.ts
├── public/
│   └── assets/
├── docs/
│   ├── ARCHITECTURE.md               # This file
│   ├── DATABASE_SCHEMA.md
│   └── API_SPEC.md
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## Deliberately out of scope for the MVP

- **Auth / admin panel.** Nobody logs in yet — bookings are guest checkout (name +
  email + phone, no account). Worth a Phase 7 if there's a real need to let staff
  edit services/therapists without a database client.
- **Payments.** Booking creates a `PENDING` record; no card capture in this phase.
- **Real-time availability locking.** Two people could in theory book the same
  slot in the same second. Fine for an MVP; a real production version would need
  a unique constraint or a transaction-level lock on `(therapistId, scheduledStart)`.
