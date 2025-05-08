import { drizzle } from "drizzle-orm/libsql";

import env from "~/lib/env";

import * as schema from "./schemas";

const db = drizzle({
  connection: {
    url: env.DB_FILE_NAME,
  },
  casing: "snake_case",
  schema,
});

export default db;
