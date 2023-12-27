import { FastifyReply, FastifyRequest } from "fastify";
import todoGetOne from "../repositories/todo.get-one";
import ITodoPutRequest from "../contracts/requests/todo/put";
import todoUpdateValidation from "../validation/todo/update";
import todoUpdate from "../repositories/todo.update";
import { match } from "ts-pattern";


const putTodoItem = async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		const { id } = request.params as unknown as any
		const data = await todoGetOne(id as number);

		if (!data) {
			reply.status(404).send({
				"status": "Not Found",
				"message": `Activity with ID ${id} Not Found`
			});
			return
		}

		const req = Object.entries(request.body as Record<string, any>).reduce((acc, curr) => {
			// @ts-ignore
			if (curr[1] !== undefined) acc[curr[0]] = curr[1]
			return acc
		}, {}) as ITodoPutRequest

		const validated = await todoUpdateValidation.parseAsync(req);
		if(validated.priority) {
			validated.priority = match(req.priority)
				.with("low", () => "low")
				.with("high", () => "high")
				.with("normal", () => "normal")
				.with("medium", () => "medium")
				.with("very-low", () => "very-low")
				.otherwise(() => "very-high")
		}

		await todoUpdate(id, validated as { is_active?: boolean; priority?: string; title?: string });

		return reply.send({
			"status": "Success",
			"message": "Success",
			data: {
				...data,
				...validated,
			},
		});
	} catch (error) {
		console.log(error)
		return reply.status(500).send({
			"status": "Internal Server Error",
			"message": "Something went wrong"
		})
	}
}

export default putTodoItem