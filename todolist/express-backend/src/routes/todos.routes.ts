import { Router } from "express";
import { todosController } from "../controllers/todos.controller";

const router = Router();

router.get("/", todosController.getTodos);

export default router;
