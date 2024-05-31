import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import db from ".";
import { sessionTable, users } from "./schema";

const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, users);

export default adapter; // The adapter to be used to initialize lucia
