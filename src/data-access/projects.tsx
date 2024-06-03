import db from "@/database";
import { projects } from "@/database/schema";

export async function getProjects() {
  try {
    const results = await db
      .select()
      .from(projects)
      .orderBy(projects.startDate);

    return {
      status: "success",
      data: results,
      message: "Projects fetched successfully",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Unable to get projects",
      data: undefined,
    };
  }
}
