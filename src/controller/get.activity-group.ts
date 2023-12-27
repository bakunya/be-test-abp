import { FastifyReply, FastifyRequest } from "fastify";
import activityGetAll from "../repositories/activity.get-all";


const getActivityGroup = async (request: FastifyRequest, reply: FastifyReply) => {
	const data = await activityGetAll();

	reply.send({
		"status": "Success",
		"message": "Success",
		data,
	});
}

export default getActivityGroup