import Connection from "../db/connection";
import { todos } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function todoGetOne(id: number): Promise<Record<string, any> | undefined> {
	const db = Connection.get()

	const obj = {
		id: todos.todo_id,
		title: todos.title,
		priority: todos.priority,
		created_at: todos.created_at,
		activity_group_id: todos.activity_group_id,
	}

	const data = await db.select(obj).from(todos).where(eq(todos.todo_id, id)).limit(1)

	return data.pop()
}