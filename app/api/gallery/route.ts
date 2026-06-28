import { NextRequest } from "next/server";
import { getAllGalleryItems } from "@/lib/repositories/galleryRepository";
import { jsonData } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category") ?? undefined;
  return jsonData(getAllGalleryItems(category));
}
