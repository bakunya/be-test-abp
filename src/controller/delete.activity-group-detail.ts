import { FastifyReply, FastifyRequest } from "fastify";
import activityGetOne from "../repositories/activity.get-one";
import activityDeleteOne from "../repositories/activity.delete-one";


const deleteActivityGroupDetail = async (request: FastifyRequest, reply: FastifyReply) => {
	const { id } = request.params as unknown as any
	const data = await activityGetOne(id as number);

	if (!data) {
		reply.status(404).send({
			"status": "Not Found",
			"message": `Activity with ID ${id} Not Found`
		});
		return
	}

	await activityDeleteOne(id as number);

	reply.send({
		"status": "Success",
		"message": "Success",
		"data": {},
	});
}

export default deleteActivityGroupDetail