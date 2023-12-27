import { int, mysqlTable, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const activities = mysqlTable(
	'activities',
	{
		activity_id: int('activity_id').primaryKey().autoincrement(),
		created_at: timestamp('created_at').defaultNow(),
		title: varchar('title', { length: 255 }),
		email: varchar('email', { length: 255 }),
	}
);

export const todos = mysqlTable(
	'todos',
	{
		todo_id: int('todo_id').primaryKey().autoincrement(),
		created_at: timestamp('created_at').defaultNow(),
		priority: varchar('priority', { length: 255 }),
		activity_group_id: int('activity_group_id'),
		title: varchar('title', { length: 255 }),
	}
);