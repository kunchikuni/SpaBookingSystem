# Database Schema — Essentials by Tanya (Rebuild)

Phase 1 deliverable. Full schema lives in `prisma/schema.prisma` — this file
explains the *why* behind it. Designed only; no live database is connected
(see `docs/ARCHITECTURE.md`).

## Core entities (relational — see ERD)

| Model | Purpose |
|---|---|
| `Service` | A bookable treatment (Signature Facial, Deep Tissue Massage, etc.) |
| `ServiceTier` | The "Essential / Premium / Luxury" pricing tiers seen on the legacy service detail page — one service can have several |
| `Therapist` | A staff member |
| `TherapistService` | Join table: which therapists can perform which services. Drives the therapist-selection step of the booking wizard so it only shows people qualified for the chosen service |
| `Customer` | No accounts/login in the MVP. A row is upserted by email the first time someone books or submits a form — classic guest checkout |
| `Booking` | One appointment: service + therapist + time + customer + status |
| `AddOn` | Aromatherapy, hot stones, etc. |
| `BookingAddOn` | Join table: which add-ons were selected for a given booking |

**Why a unique constraint on `(therapistId, scheduledStart)` on `Booking`:**
this is the one rule worth calling out explicitly. It prevents two different
customers double-booking the same therapist at the exact same start time. It
does *not* prevent overlapping bookings of different lengths (a 90-minute
massage starting at 2:00 PM and a 60-minute facial starting at 2:30 PM with
the same therapist would both pass this constraint). A real production
version needs either a range-overlap check at the application layer or a
Postgres exclusion constraint (`EXCLUDE USING gist`) — flagged in
`docs/ARCHITECTURE.md` as deliberately out of scope for the MVP.

## Standalone tables (no complex relations — left out of the ERD for clarity)

| Model | Purpose |
|---|---|
| `Testimonial` | Customer quote + rating, optionally linked to a `Service` |
| `Product` | Retail items on the Products page |
| `GalleryItem` | Photo + category for the gallery grid |
| `Offer` | Seasonal packages / VIP club entries on Best Offers |
| `Faq` | Question/answer pairs, tagged by which page they appear on (`GENERAL`, `CONTACT`, `SERVICE_DETAIL`) — replaces the hardcoded FAQ arrays that were duplicated per-page in the legacy site |
| `ContactSubmission` | Stores what the contact form would have sent, once there's a real backend to receive it |
| `NewsletterSubscriber` | Same idea for the newsletter signup |

## Money as integers

Every price field is `priceCents` (an `Int`), not a float. `$120.00` is
stored as `12000`. This avoids floating-point rounding errors in totals —
the exact bug class that shows up when summing service + add-on prices with
floats. Display formatting (`$120.00`) happens in the UI layer, not the
database.

## What's intentionally *not* modeled yet

- **Availability/working hours as data.** The legacy site hardcoded business
  hours (Mon–Fri 9–8, Sat 8–6, Sun 10–5) as constants, and the rebuilt
  booking wizard does the same for now. A `BusinessHours` table would let
  staff change hours without a deploy — worth adding if this becomes a real
  admin-managed product, not before.
- **Soft deletes.** `isActive` booleans handle "hide this without losing
  history" for `Service`, `Therapist`, `Product`, `Offer`, `AddOn`. Full
  audit/versioning is more than an MVP needs.
