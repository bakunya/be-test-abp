import { FastifyInstance } from "fastify";
import postTodoItem from "../controller/post.todo-item";
import getTodoItem from "../controller/get.todo-item";
import getTodoItemDetail from "../controller/get.todo-item-detail";
import deleteTodoItem from "../controller/delete.todo-item";
import putTodoItem from "../controller/put.todo-item";

export default function todoRoutes(server: FastifyInstance) {
	server.get("/todo-items", getTodoItem)
	server.get("/todo-items/:id", getTodoItemDetail)
	server.post("/todo-items", postTodoItem)
	server.patch("/todo-items/:id", putTodoItem)
	server.delete("/todo-items/:id", deleteTodoItem)
}