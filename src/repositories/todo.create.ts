import getId from "../utils/getId";
import Connection from "../db/connection";
import { todos } from "../db/schema";

export default async function todoCreate({ priority, title, activity_group_id, createdAt }: { priority: string; activity_group_id: number; title: string, createdAt: Date; }): Promise<Record<string, any>> {
	const db = Connection.get()
	const toSave = { priority, title, activity_group_id, created_at: createdAt, todo_id: getId() }
	await db.insert(todos).values(toSave)
	return toSave
}