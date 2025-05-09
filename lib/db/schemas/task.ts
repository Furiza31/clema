import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";

import { user } from "./auth";

export const task = sqliteTable("task", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  description: text(),
  completed: int({ mode: "boolean" }).notNull().default(false),
  userId: int().notNull().references(() => user.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export const InsertTask = createInsertSchema(task, {
  title: field => field.min(1),
  description: field => field.max(500),
}).omit({
  id: true,
  userId: true,
  completed: true,
  createdAt: true,
  updatedAt: true,
});
