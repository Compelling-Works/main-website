import db from "@/database";
import { teamMembers } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getTeamMembers() {
  return await db.select().from(teamMembers);
}

export async function getTeamMember(memberId: string) {
  return (
    await db.select().from(teamMembers).where(eq(teamMembers.id, memberId))
  )[0];
}
