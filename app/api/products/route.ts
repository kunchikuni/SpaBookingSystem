import { NextRequest } from "next/server";
import { getAllProducts } from "@/lib/repositories/productRepository";
import { jsonData } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const sortParam = params.get("sort");
  const sort =
    sortParam === "price-asc" || sortParam === "price-desc" || sortParam === "rating"
      ? sortParam
      : undefined;

  const products = getAllProducts({
    category: params.get("category") ?? undefined,
    sort,
  });
  return jsonData(products);
}
