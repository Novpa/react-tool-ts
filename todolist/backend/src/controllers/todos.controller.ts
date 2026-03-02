import { Request, Response } from "express";
import fs from "fs";
import path from "path";

interface Todo {
  id: number;
  task: string;
  completed: string | null;
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
      completed: null,
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
      message: "Update successfull",
      data: newlyTask,
    });
  },
};
