"use server";

import { users } from "@/database/schema";
import bcrypt from "bcrypt";
import { db } from "@/database/index";
import { eq } from "drizzle-orm";

const loginAction = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const user = (
    await db.select().from(users).where(eq(users.email, username))
  ).pop()!;

  if (!user) {
    return { status: "failure", message: "You do not have an account" };
  }

  const dbPass: string = user.password!;

  if (await bcrypt.compare(password, dbPass)) {
    return { status: "success", message: "Login successful" };
  } else {
    return { status: "failure", message: "Invalid login credentials" };
  }
};

export default loginAction;
