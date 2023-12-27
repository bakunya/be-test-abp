import getId from "../utils/getId";
import Connection from "../db/connection";
import { activities } from "../db/schema";

export default async function activityCreate({ title, email, createdAt }: { title: string, createdAt: Date; email: string }): Promise<Record<string, any>> {
	const db = Connection.get()
	const toSave = { title, email, created_at: createdAt, activity_id: getId() }
	await db.insert(activities).values(toSave)
	return toSave
}