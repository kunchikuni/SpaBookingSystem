import { getBookingById } from "@/lib/repositories/bookingRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const booking = getBookingById(id);
  if (!booking) return jsonError("Booking not found.", 404, "NOT_FOUND");
  return jsonData(booking);
}
