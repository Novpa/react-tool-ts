import { Router } from "express";
import { todosController } from "../controllers/todos.controller";

const router = Router();

//? cara baca --> Kalau path nya "/" lakukan ini ""
router.get("/", todosController?.getAll);
router.post("/", todosController?.create);
router.patch("/:id", todosController.update);
router.delete("/:id/delete", todosController.delete);

export default router;
