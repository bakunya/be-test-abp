import IActivityPostRequest from "../contracts/requests/activity/create";
import { FastifyReply, FastifyRequest } from "fastify";
import activityUpdateValidation from "../validation/activity/update";
import activityUpdate from "../repositories/activity.update";
import activityGetOne from "../repositories/activity.get-one";


const putActivityGroup = async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		const { id } = request.params as unknown as any
		const data = await activityGetOne(id as number);

		if (!data) {
			reply.status(404).send({
				"status": "Not Found",
				"message": `Activity with ID ${id} Not Found`
			});
			return
		}

		const req = request.body as IActivityPostRequest;
		const { title } = await activityUpdateValidation.parseAsync(req);

		await activityUpdate({ title, id: id as number });

		return reply.send({
			"status": "Success",
			"message": "Success",
			data: {
				...data,
				title,
			},
		});
	} catch (error) {
		if (!(request?.body as any)?.title) return reply.status(400).send({
			"status": "Bad Request",
			"message": "title cannot be null"
		})

		return reply.status(500).send({
			"status": "Internal Server Error",
			"message": "Something went wrong"
		})
	}
}

export default putActivityGroup