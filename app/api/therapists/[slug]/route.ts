import { getTherapistBySlug } from "@/lib/repositories/therapistRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const therapist = getTherapistBySlug(slug);
  if (!therapist) return jsonError("Therapist not found.", 404, "NOT_FOUND");
  return jsonData(therapist);
}
