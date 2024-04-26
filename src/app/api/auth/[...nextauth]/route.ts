// import NextAuth from "next-auth";
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
// import { db } from "@/database";
// import GoogleProvider from "next-auth/providers/google";
// import type { Adapter } from "next-auth/adapters";

// const handler = NextAuth({
//   adapter: DrizzleAdapter(db) as Adapter,
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   //   callbacks: {
//   //     async signIn({ account, profile }) {
//   //       if (account?.provider === "google") {
//   //         return profile?.email_verified && profile?.email.endsWith("@compelling.works");
//   //       }
//   //       return true; // Do different verification for other providers that don't have `email_verified`
//   //     },
//   //   },
// });

// export { handler as GET, handler as POST };

import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
