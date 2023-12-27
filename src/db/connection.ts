import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

type TPool = {
	connection: MySql2Database<Record<string, never>> | null
}

const pool: TPool = {
	connection: null,
}


export default class Connection {
	static get(): MySql2Database<Record<string, never>> {
		if (pool.connection) return pool.connection

		const MYSQL_HOST = process.env.MYSQL_HOST
		const MYSQL_PORT = process.env.MYSQL_PORT
		const MYSQL_USER = process.env.MYSQL_USER
		const MYSQL_DBNAME = process.env.MYSQL_DBNAME
		const MYSQL_PASSWORD = process.env?.MYSQL_PASSWORD ?? ""

		const poolConnection = mysql.createPool({
			user: MYSQL_USER,
			host: MYSQL_HOST,
			database: MYSQL_DBNAME,
			password: MYSQL_PASSWORD,
			port: Number(MYSQL_PORT),
		});

		pool.connection = drizzle(poolConnection);
		return pool.connection
	}
}