import { Router } from "express";
import { todosController } from "../controllers/todos.controller";

const router = Router();

router.get("/", todosController.getTodos);
router.get("/:id", todosController.getAllTodosById);
router.post("/", todosController.createTodos);
router.post("/:id", todosController.softDelete);
router.put("/:id", todosController.updateTodos);

export default router;
