"use server";

import { validateRequest, lucia } from "../auth";
import db from "@/database";
import { users } from "@/database/schema";
import { LoginSchemaType, RegisterSchemaType } from "@/zod/zod-schemas";
import { eq } from "drizzle-orm";
import { generateId, generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";

export const registerUserAction = async (values: RegisterSchemaType) => {
  try {
    const passwordHash = await new Argon2id().hash(values.password);
    const userId = generateId(20);
    const name = values.name;

    const result = await db
      .insert(users)
      .values({
        id: userId,
        email: values.email,
        name: values.name,
        password: passwordHash,
      })
      .returning({
        userId: users.id,
        name: users.name,
      })
      .execute();

    return {
      success: true,
      message: "User account created successfully",
      data: { userId, name },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const registerAction = async (values: RegisterSchemaType) => {
  try {
    const passwordHash = await new Argon2id().hash(values.password);
    const userId = generateId(20);
    const name = values.name;

    const result = await db
      .insert(users)
      .values({
        id: userId,
        email: values.email,
        name: values.name,
        password: passwordHash,
      })
      .returning({
        userId: users.id,
        name: users.name,
      })
      .execute();

    console.log("account create result: ", result);

    // Create a session
    const session = await lucia.createSession(userId, {
      expiresIn: 60 * 60,
      // name: result[0].name,
    });
    // session.

    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return {
      success: true,
      data: { userId, name },
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
};

export const loginAction = async (values: LoginSchemaType) => {
  try {
    // getting the user from the database
    const user = await db.query.users.findFirst({
      where: (table) => eq(table.email, values.email),
    });

    if (!user) {
      return {
        success: false,
        message: "Invalid login credentials. Please try again",
      };
    }

    // checking if the password matches
    const passwordMatches = await new Argon2id().verify(
      user.password,
      values.password
    );

    if (!passwordMatches) {
      return {
        success: false,
        message: "Invalid login credentials. Please try again",
      };
    }

    // Create a session
    const session = await lucia.createSession(user.id, {
      expiresIn: 60 * 60,
      // name: user.name,
    });

    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return {
      success: true,
      data: {
        userId: user.id,
        name: user.name,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  }
};

export const signOutAction = async () => {
  const { session } = await validateRequest();

  if (!session) {
    return {
      success: false,
      message: "You are not signed in",
    };
  }

  await lucia.invalidateSession(session.id); // invalidate the session based on its id

  const sessionCookie = lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
};
