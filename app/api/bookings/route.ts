import { NextRequest } from "next/server";
import { createBookingSchema } from "@/lib/validation/booking";
import { createBooking, BookingValidationError } from "@/lib/repositories/bookingRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return jsonError("Invalid JSON body.", 400, "INVALID_BODY");

  const parsed = createBookingSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid request.", 400, "VALIDATION_ERROR");
  }

  try {
    const booking = createBooking(parsed.data);
    return jsonData(booking, 201);
  } catch (err) {
    if (err instanceof BookingValidationError) {
      return jsonError(err.message, 409, "BOOKING_CONFLICT");
    }
    throw err;
  }
}
