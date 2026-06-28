import { NextRequest } from "next/server";
import { newsletterSchema } from "@/lib/validation/newsletter";
import { subscribeToNewsletter } from "@/lib/repositories/newsletterRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return jsonError("Invalid JSON body.", 400, "INVALID_BODY");

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid request.", 400, "VALIDATION_ERROR");
  }

  const subscriber = subscribeToNewsletter(parsed.data.email);
  return jsonData(subscriber, 201);
}
