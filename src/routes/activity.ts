import { FastifyInstance } from "fastify";
import postActivityGroup from "../controller/post.activity-group";
import getActivityGroup from "../controller/get.activity-group";
import getActivityGroupDetail from "../controller/get.activity-group-detail";
import deleteActivityGroupDetail from "../controller/delete.activity-group-detail";
import putActivityGroup from "../controller/put.activity-group";

export default function activityRoutes(server: FastifyInstance) {
	server.get("/activity-groups", getActivityGroup)
	server.get("/activity-groups/:id", getActivityGroupDetail)
	server.post("/activity-groups", postActivityGroup)
	server.patch("/activity-groups/:id", putActivityGroup)
	server.delete("/activity-groups/:id", deleteActivityGroupDetail)
}