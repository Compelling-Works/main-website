"use server";

import { db } from "@/database/index";
import {
  donors,
  partners,
  projects,
  teamMembers,
  users,
} from "@/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteTeamMemberAction(formData: FormData) {
  const id = formData.get("deleteId") as string;

  try {
    const result = await db
      .delete(teamMembers)
      .where(eq(teamMembers.id, id))
      .returning()
      .then((res) => res[0]);

    revalidatePath("/admin/team");

    return {
      status: "success",
      message: `${result.name} deleted successfully`,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Sorry, unable to delete project. Try again!",
    };
  }
}

export async function deleteAdminUserAction(formData: FormData) {
  const id = formData.get("deleteId") as string;

  // await db.delete(users).where(eq(users.id, id));

  try {
    const result = await db
      .delete(users)
      .where(eq(users.id, id))
      .returning()
      .then((res) => res[0]);

    revalidatePath("/admin/users");

    return {
      status: "success",
      message: `${result.name} deleted successfully`,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Sorry, unable to delete admin user. Try again!",
    };
  }
}

export async function deleteDonorAction(formData: FormData) {
  const id = formData.get("deleteId") as string;

  // await db.delete(users).where(eq(users.id, id));

  try {
    const result = await db
      .delete(donors)
      .where(eq(donors.id, id))
      .returning()
      .then((res) => res[0]);

    revalidatePath("/admin/partners-and-donors");

    return {
      status: "success",
      message: `${result.name} deleted successfully`,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Sorry, unable to delete donor . Try again!",
    };
  }
}

export async function deletePartnerAction(formData: FormData) {
  const id = formData.get("deleteId") as string;

  // await db.delete(users).where(eq(users.id, id));

  try {
    const result = await db
      .delete(partners)
      .where(eq(partners.id, id))
      .returning()
      .then((res) => res[0]);

    revalidatePath("/admin/partners-and-donors");

    return {
      status: "success",
      message: `${result.name} deleted successfully`,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Sorry, unable to delete partner. Try again!",
    };
  }
}

export async function deleteProjectAction(formData: FormData) {
  const id = formData.get("deleteId") as string;

  try {
    const result = await db
      .delete(projects)
      .where(eq(projects.id, id))
      .returning()
      .then((res) => res[0]);

    revalidatePath("/admin/projects");

    return {
      status: "success",
      message: `${result.name} deleted successfully`,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Sorry, unable to delete project. Try again!",
    };
  }
}
