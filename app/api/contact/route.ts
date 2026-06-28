import { NextRequest } from "next/server";
import { contactSubmissionSchema } from "@/lib/validation/contact";
import { createContactSubmission } from "@/lib/repositories/contactRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return jsonError("Invalid JSON body.", 400, "INVALID_BODY");

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid request.", 400, "VALIDATION_ERROR");
  }

  const submission = createContactSubmission(parsed.data);
  return jsonData(submission, 201);
}
