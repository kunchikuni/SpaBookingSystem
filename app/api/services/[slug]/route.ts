import { getServiceBySlug } from "@/lib/repositories/serviceRepository";
import { jsonData, jsonError } from "@/lib/api-response";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return jsonError("Service not found.", 404, "NOT_FOUND");
  return jsonData(service);
}
