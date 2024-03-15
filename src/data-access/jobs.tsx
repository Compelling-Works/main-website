import { db } from "@/database";
import { jobs } from "@/database/schema";

export async function getJobs() {
  return db.select().from(jobs);
}


// export async function getJobPdf() {
//   return db.select().from(jobs);
// }

