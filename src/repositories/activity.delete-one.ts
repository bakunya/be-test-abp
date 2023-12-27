import Connection from "../db/connection";
import { activities } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function activityDeleteOne(id: number): Promise<void> {
	const db = Connection.get()
	await db.delete(activities).where(eq(activities.activity_id, id));
}