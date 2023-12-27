import { FastifyReply, FastifyRequest } from "fastify";
import todoGetAll from "../repositories/todo.get-all";


const getTodoItem = async (request: FastifyRequest, reply: FastifyReply) => {
	const query = (request.query as any).activity_group_id;
	const data = await todoGetAll(Array.isArray(query) ? query[0] : query);

	reply.send({
		"status": "Success",
		"message": "Success",
		data,
	});
}

export default getTodoItem