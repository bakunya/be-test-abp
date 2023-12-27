import Connection from "../db/connection";
import { activities } from "../db/schema";
import { eq } from "drizzle-orm";

export default async function activityGetOne(id: number): Promise<Record<string, any> | undefined> {
	const db = Connection.get()
	const data = await db.select().from(activities).where(eq(activities.activity_id, id)).limit(1)
	return data.pop()
}