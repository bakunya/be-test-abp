import IActivityPostRequest from "../contracts/requests/activity/create";
import activityCreateValidation from "../validation/activity/create";
import activityCreate from "../repositories/activity.create";
import { FastifyReply, FastifyRequest } from "fastify";


const postActivityGroup = async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		const req = request.body as IActivityPostRequest;
		const { title, email } = await activityCreateValidation.parseAsync(req);

		const data = await activityCreate({ title, email, createdAt: new Date() });

		return reply.send({
			"status": "Success",
			"message": "Success",
			data,
		});
	} catch (error) {
		if (!(request?.body as any)?.title) return reply.status(400).send({
			"status": "Bad Request",
			"message": "title cannot be null"
		})

		if (!(request?.body as any)?.email) return reply.status(400).send({
			"status": "Bad Request",
			"message": "email cannot be null"
		})

		return reply.status(500).send({
			"status": "Internal Server Error",
			"message": "Something went wrong"
		})
	}
}

export default postActivityGroup