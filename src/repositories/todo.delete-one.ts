import Connection from "../db/connection";
import { todos } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function todoDeleteOne(id: number): Promise<void> {
	const db = Connection.get()
	await db.delete(todos).where(eq(todos.todo_id, id));
}