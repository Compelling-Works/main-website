import { db } from "@/database";
import { publications } from "@/database/schema";

export async function getPublications() {
  return db.select().from(publications);
}
