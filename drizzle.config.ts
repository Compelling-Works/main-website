import { Config } from "drizzle-kit";

export default {
  schema: "./src/database/schema.ts",
  driver: "pg",
  out: "./src/drizzle/migrations",

  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
