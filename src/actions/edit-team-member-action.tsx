"use server";

import { teamMembers } from "@/database/schema";
import db from "@/database/index";
import { revalidatePath } from "next/cache";

const editTeamMemberAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const experience = formData.get("experience") as string;
  const education = formData.get("education") as string;
  const profile = formData.get("profile") as string;

  const message = formData.get("message") as string;
  const category = formData.get("category") as string;
  const url = formData.get("url") as string;

  const bio = {
    education,
    profile,
    experience,
  };

  try {
    const dbResult = await db
      .insert(teamMembers)
      .values({
        name,
        role,
        bio,
        category,
        message,
        url,
      })
      .returning()
      .then((res) => res[0]);
    console.log(dbResult);
    revalidatePath("/amin/team");
  } catch (error) {
    console.error("error", error);
  }
};

export default editTeamMemberAction;
