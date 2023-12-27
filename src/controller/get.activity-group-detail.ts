import { FastifyReply, FastifyRequest } from "fastify";
import activityGetOne from "../repositories/activity.get-one";


const getActivityGroupDetail = async (request: FastifyRequest, reply: FastifyReply) => {
	const { id } = request.params as unknown as any
	const data = await activityGetOne(id as number);

	if (!data) {
		reply.status(404).send({
			"status": "Not Found",
			"message": `Activity with ID ${id} Not Found`
		});
		return
	}

	reply.send({
		"status": "Success",
		"message": "Success",
		data,
	});
}

export default getActivityGroupDetail