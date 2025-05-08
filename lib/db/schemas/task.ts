import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const task = sqliteTable("task", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  description: text(),
  completed: int({ mode: "boolean" }).notNull().default(false),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
