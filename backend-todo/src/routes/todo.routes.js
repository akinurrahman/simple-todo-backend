import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo.controller.js";

const router = Router()

router.route("/addTodo").post(addTodo)
router.route("/deleteTodo").delete(deleteTodo)
router.route("/updateTodo").patch(updateTodo)
router.route("/todos").get(getAllTodos)

export default router