import { Lucia } from "lucia";

import { cache } from "react";
import { cookies } from "next/headers";
import adapter from "./database/adapter";

// const adapter = new DrizzlePostgreSQLAdapter(db); // your adapter

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  // getSessionAttributes: (attributes) => {
  //   return {
  //     name: attributes.name,
  //     expiresIn: 60 * 60,
  //   };
  // },
});

export const validateRequest = cache(async () => {
  // Caching this function so that we dont send multiple requests to the server

  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null; // getting the session id from the cookies()

  // If it does not exist
  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  const { user, session } = await lucia.validateSession(sessionId); // validating the session with lucia

  // console.log("user: ", user);

  try {
    // If the session exists and it is fresh (it is new)
    if (session && session.fresh) {
      // we are creating a new session cookie
      const sessionCookie = lucia.createSessionCookie(session.id);

      // setting the cookie in the headers
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }

    // Otherwise, if the session is not fresh, we are creating a new blank session
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {
    // Next.js throws error when attempting to set cookies when rendering page
  }
  return {
    user,
    session,
  };
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    // DatabaseSessionAttributes: DatabaseSessionAttributes;
  }
  // interface DatabaseSessionAttributes {
  //   name: string;
  // }
}
