import Connection from "../db/connection";
import { todos } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function todoGetAll(activity_id?: number): Promise<Record<string, any>[]> {
	const db = Connection.get()

	const obj = {
		id: todos.todo_id,
		title: todos.title,
		priority: todos.priority,
		created_at: todos.created_at,
		activity_group_id: todos.activity_group_id,
	}

	const data = activity_id 
		? await db.select(obj).from(todos).where(eq(todos.activity_group_id, activity_id))
		: await db.select(obj).from(todos)

	return data
}