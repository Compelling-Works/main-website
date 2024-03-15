import { db } from "@/database";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

import bcrypt from "bcrypt";

export async function getUsers() {
  return db.select().from(users);
}

export async function getUser(username: string) {
  const user = (
    await db.select().from(users).where(eq(users.email, username))
  )[0];

  if (!user) {
    return { status: 200, message: "No user exists" };
  }
  return { status: 200, data: user, message: "User found" };
}

export async function loginUser(username: string, password: string) {
  const user = (
    await db.select().from(users).where(eq(users.email, username))
  )[0];

  if (user && (await bcrypt.compare(password, user.password!))) {
    user.password = "";
    return user;
  } else throw new Error("User not found");
}

