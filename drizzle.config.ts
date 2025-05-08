import { defineConfig } from "drizzle-kit";

import env from "./lib/env";

export default defineConfig({
  out: "./lib/db/migrations",
  schema: "./lib/db/schemas/index.ts",
  dialect: "sqlite",
  casing: "snake_case",
  dbCredentials: {
    url: env.DB_FILE_NAME,
  },
});
