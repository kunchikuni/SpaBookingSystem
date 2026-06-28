import { NextRequest } from "next/server";
import { getFaqsForPage } from "@/lib/repositories/faqRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const pageParam = request.nextUrl.searchParams.get("page") ?? "GENERAL";
  if (pageParam !== "GENERAL" && pageParam !== "CONTACT" && pageParam !== "SERVICE_DETAIL") {
    return jsonError("page must be one of GENERAL, CONTACT, SERVICE_DETAIL", 400, "INVALID_PARAM");
  }
  return jsonData(getFaqsForPage(pageParam));
}
