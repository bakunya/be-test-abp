import { FastifyReply, FastifyRequest } from "fastify";
import todoGetOne from "../repositories/todo.get-one";

const getTodoItemDetail = async (request: FastifyRequest, reply: FastifyReply) => {
	const { id } = request.params as unknown as any
	const data = await todoGetOne(id);

	if (!data) {
		reply.status(404).send({
			"status": "Not Found",
			"message": `Todo with ID ${id} Not Found`
		});
		return
	}

	reply.send({
		"status": "Success",
		"message": "Success",
		data,
	});
}

export default getTodoItemDetail