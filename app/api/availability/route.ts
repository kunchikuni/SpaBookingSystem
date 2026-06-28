import { NextRequest } from "next/server";
import { getAvailableSlots } from "@/lib/availability";
import { getBookedTimesForTherapistOnDate } from "@/lib/repositories/bookingRepository";
import { getTherapistById } from "@/lib/repositories/therapistRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const therapistId = params.get("therapistId");
  const dateParam = params.get("date");

  if (!therapistId) return jsonError("therapistId is required.", 400, "MISSING_PARAM");
  if (!dateParam || !/^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
    return jsonError("date is required in YYYY-MM-DD format.", 400, "MISSING_PARAM");
  }

  if (!getTherapistById(therapistId)) {
    return jsonError("Unknown therapist.", 404, "NOT_FOUND");
  }

  const [year, month, day] = dateParam.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  const bookedTimes = getBookedTimesForTherapistOnDate(therapistId, dateParam);
  const slots = getAvailableSlots(date, bookedTimes);

  return jsonData({ date: dateParam, therapistId, slots });
}
