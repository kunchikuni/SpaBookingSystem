import { NextRequest } from "next/server";
import { getAllTestimonials } from "@/lib/repositories/testimonialRepository";
import { jsonData } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const serviceId = request.nextUrl.searchParams.get("serviceId") ?? undefined;
  return jsonData(getAllTestimonials(serviceId));
}
