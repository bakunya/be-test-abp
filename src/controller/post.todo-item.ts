import ITodoPostRequest from "../contracts/requests/todo/create";
import todoCreateValidation from "../validation/todo/create";
import { FastifyReply, FastifyRequest } from "fastify";
import todoCreate from "../repositories/todo.create";
import { match } from "ts-pattern";


const postTodoItem = async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		const req = request.body as ITodoPostRequest;
		const { title, activity_group_id } = await todoCreateValidation.parseAsync(req);
		const priority = match(req.priority)
			.with("low", () => "low")
			.with("high", () => "high")
			.with("normal", () => "normal")
			.with("medium", () => "medium")
			.with("very-low", () => "very-low")
			.otherwise(() => "very-high")

		const data = await todoCreate({ priority, title, activity_group_id, createdAt: new Date() });

		return reply.send({
			"status": "Success",
			"message": "Success",
			data,
		});
	} catch (error) {
		if (!(request?.body as any)?.title) return reply.status(400).send({
			"status": "Bad Request",
			"message": "title cannot be null",
			"data": {}
		})

		if (!(request?.body as any)?.activity_group_id ) return reply.status(400).send({
			"status": "Bad Request",
			"message": "activity_group_id cannot be null",
			"data": {}
		})

		return reply.status(500).send({
			"status": "Internal Server Error",
			"message": "Something went wrong"
		})
	}
}

export default postTodoItem