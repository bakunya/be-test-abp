import getId from "../utils/getId";
import Connection from "../db/connection";
import { activities, todos } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function todoUpdate(id: number, toUpdate: { is_active?: boolean; priority?: string; title?: string }): Promise<void> {
	const db = Connection.get()
	await db.update(todos).set(toUpdate).where(eq(todos.todo_id, id))
}