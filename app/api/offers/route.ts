import { getAllOffers } from "@/lib/repositories/offerRepository";
import { jsonData } from "@/lib/api-response";

export async function GET() {
  return jsonData(getAllOffers());
}
