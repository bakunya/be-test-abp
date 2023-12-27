import Connection from "../db/connection";
import { activities } from "../db/schema";

export default async function activityGetAll(): Promise<Record<string, any>[]> {
	const db = Connection.get()
	const data = await db.select().from(activities)
	return data
}