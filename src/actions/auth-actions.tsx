"use server";

import { users } from "@/database/schema";
import bcrypt from "bcrypt";
import { db } from "@/database/index";
import { eq } from "drizzle-orm";
import { RegisterSchema, RegisterSchemaType } from "@/zod/zod-schemas";

export const registrationAction = async (values: RegisterSchemaType) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("Invalid form data");
  }

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  const user = await db.insert(users).values({
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    username: validatedFields.data.username,
    password: hashedPassword,
  });
};

export const loginAction = async (formData: FormData) => {
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
