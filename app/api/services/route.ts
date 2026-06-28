import { NextRequest } from "next/server";
import { getAllServices } from "@/lib/repositories/serviceRepository";
import { jsonData } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const services = getAllServices({
    category: params.get("category") ?? undefined,
    search: params.get("search") ?? undefined,
  });
  return jsonData(services);
}
