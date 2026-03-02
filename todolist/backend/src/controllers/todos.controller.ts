import { Request, Response } from "express";
import fs from "fs";
import path from "path";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  deleted: string | null;
  updated: string | null;
  createdOn: string;
}

const todosJsonPath = path.join(__dirname, "..", "db", "todos.json");
//? __dirname --> mulai baca dari controllers/.../... jadi kita harus keluar dulu dari current folder
const todosData = () => fs.readFileSync(todosJsonPath, "utf-8");

export const todosController = {
  //? GET ALL
  getAll(req: Request, res: Response) {
    const todos = JSON.parse(todosData())?.todos;
    // console.log(todos);

    res.status(200).json({
      status: "successful",
      data: todos,
    });
  },

  //? CREATE
  create(req: Request, res: Response) {
    const { task } = req.body;

    const todos = JSON.parse(todosData())?.todos;
    const newTask = {
      id: Date.now(),
      task,
      completed: false,
      deleted: null,
      updated: null,
      createdOn: Date.now().toString(),
    };

    todos.push(newTask);
    // console.log("added", todos);

    fs.writeFileSync(todosJsonPath, JSON.stringify({ todos: todos }));

    res.status(201).json({
      status: "successful",
      message: "Data successfully posted",
      data: { todos: todos },
    });
  },

  //? UPDATE
  update(req: Request, res: Response) {
    const id = Number(req.params?.id);
    const { task } = req.body;

    const todos = JSON.parse(todosData()).todos;

    const updatedTodos = todos?.map((todo: Todo) =>
      todo.id === id ? { ...todo, task, updated: Date.now().toString() } : todo,
    );

    const newlyTask = updatedTodos?.find((todo: Todo) => todo.id === id);

    // console.log(updatedTodos);

    fs.writeFileSync(todosJsonPath, JSON.stringify({ todos: updatedTodos }));

    res.status(200).json({
      status: "successfull",
      message: "Update successfully",
      data: newlyTask,
    });
  },

  //? SOFT DELETE
  delete(req: Request, res: Response) {
    const id = Number(req.params?.id);

    const todos = JSON.parse(todosData()).todos;

    const updatedTodos = todos?.map((todo: Todo) =>
      todo.id === id ? { ...todo, deleted: Date.now().toString() } : todo,
    );

    fs.writeFileSync(todosJsonPath, JSON.stringify({ todos: updatedTodos }));

    res.status(204).json({
      status: "successfull",
      message: "Deleted successfully",
    });
  },

  getById(req: Request, res: Response) {
    const id = Number(req.params?.id);
    const todos = JSON.parse(todosData()).todos;

    const findTodo = todos?.find((todo: Todo) => todo.id === id);
    console.log(findTodo);

    res.status(200).json({
      status: "Successfull",
      data: !findTodo ? "Data not found" : findTodo,
    });
  },
};
