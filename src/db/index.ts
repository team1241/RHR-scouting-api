import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import env from "src/env.js";
import * as schema from "./schema.js";

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(env.DATABASE_URL, { prepare: false });
const db = drizzle({ client, schema });

export default db;
