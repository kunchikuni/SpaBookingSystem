# API Spec — Essentials by Tanya (Rebuild)

Phase 1 deliverable. All endpoints are Next.js App Router Route Handlers
under `app/api/`. None are connected to a live database yet — in Phase 3
they'll read from seed data through the repository layer, structured so a
real Postgres connection is a config change, not a rewrite.

## Conventions

- JSON in, JSON out. `Content-Type: application/json`.
- Money is always `priceCents` (integer) over the wire — same reasoning as
  the schema. The UI formats it for display.
- List endpoints return `{ data: [...] }`. Single-item endpoints return
  `{ data: {...} }`. Errors return `{ error: { message, code } }` with a
  matching HTTP status.
- Write endpoints (`POST`) validate the request body with a Zod schema in
  `lib/validation/` before touching the repository layer. A failed
  validation returns `400` with field-level error messages.

## Read endpoints

| Method | Path | Query params | Returns |
|---|---|---|---|
| GET | `/api/services` | `category`, `search` | List of services |
| GET | `/api/services/[slug]` | — | One service, with its tiers and qualified therapists |
| GET | `/api/therapists` | — | List of therapists |
| GET | `/api/therapists/[slug]` | — | One therapist, with the services they perform |
| GET | `/api/products` | `category`, `sort` | List of products |
| GET | `/api/offers` | — | List of active offers/packages |
| GET | `/api/gallery` | `category` | List of gallery items |
| GET | `/api/testimonials` | `serviceId` | List of published testimonials, optionally filtered to one service |
| GET | `/api/faqs` | `page` | List of FAQs for a given page (`GENERAL`, `CONTACT`, `SERVICE_DETAIL`) |
| GET | `/api/availability` | `therapistId` (required), `date` (required, `YYYY-MM-DD`) | Available time slots for that therapist on that day, computed from business hours minus existing bookings |

## Write endpoints

| Method | Path | Body | Behavior |
|---|---|---|---|
| POST | `/api/bookings` | `serviceId`, `addOnIds[]`, `therapistId`, `scheduledStart`, `customer: {firstName, lastName, email, phone}`, `specialRequests?`, `smsReminders?`, `emailUpdates?` | Upserts `Customer` by email, creates `Booking` + `BookingAddOn` rows with status `PENDING`. Returns the created booking with a confirmation id |
| GET | `/api/bookings/[id]` | — | Booking confirmation lookup (used by the confirmation page) |
| POST | `/api/contact` | `name`, `email`, `phone?`, `serviceInterest?`, `preferredContactMethod`, `message` | Creates a `ContactSubmission` row |
| POST | `/api/newsletter` | `email` | Upserts a `NewsletterSubscriber` (idempotent — subscribing twice doesn't error) |

## Why `/api/availability` is its own endpoint instead of a field on `/api/therapists`

Availability is the one thing in this system that's actually computed, not
just stored — it depends on the date requested and on every existing
booking for that therapist that day. Folding it into the therapist response
would mean either always computing it (slow, and pointless for the 95% of
requests that don't need it) or caching it (stale the moment someone books).
A dedicated endpoint that takes `therapistId` + `date` keeps the expensive
part opt-in and makes the booking wizard's actual behavior — "ask for slots
once the user has picked a therapist and a day" — match the API shape.

## Known limitation carried over from the schema

`POST /api/bookings` doesn't yet enforce that the chosen slot doesn't
overlap an existing booking of different length for the same therapist —
see `docs/DATABASE_SCHEMA.md` for why. For the MVP, `/api/availability`
should be the thing the booking wizard actually trusts to decide what's
clickable; treat that as the real guard for now.
