import db from "@/database";
import { donors, partners } from "@/database/schema";

export async function getPartners() {
  return db.select().from(partners);
}

export async function getDonors() {
  return db.select().from(donors);
}
