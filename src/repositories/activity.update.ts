import getId from "../utils/getId";
import Connection from "../db/connection";
import { activities } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function activityUpdate({ id, title }: { id: number; title: string }): Promise<void> {
	const db = Connection.get()
	await db.update(activities).set({ title }).where(eq(activities.activity_id, id))
}