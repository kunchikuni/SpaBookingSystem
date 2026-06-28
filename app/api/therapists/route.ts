import { getAllTherapists } from "@/lib/repositories/therapistRepository";
import { jsonData } from "@/lib/api-response";

export async function GET() {
  return jsonData(getAllTherapists());
}
