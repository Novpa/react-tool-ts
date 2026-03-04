import { Request, Response } from "express";
import pool from "../config/pool-connection.config";

export const todosController = {
  async getTodos(req: Request, res: Response) {
    try {
      const result = await pool.query(
        "select * from todos where deletedon is null",
      );
      return res.status(200).json({
        status: "successful",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ messsage: "Server error" });
    }
  },

  async getAllTodosById(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
      if (isNaN(id)) {
        return res.status(400).json({ message: "id is required and a number" });
      }
      const result = await pool.query("select * from todos where id = $1", [
        id,
      ]);

      if (!result.rows.length) {
        return res.status(400).json({ message: "id is unknown" });
      }

      return res.status(200).json({
        status: "successful",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ messsage: "Server error" });
    }
  },

  async createTodos(req: Request, res: Response) {
    const { task } = req.body;

    try {
      if (!task) {
        return res.status(400).json({ message: "task is required" });
      }

      const result = await pool.query(
        "insert into todos (task) values ($1) returning *",
        [task],
      );

      return res.status(201).json({
        status: "successful",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ messsage: "Server error" });
    }
  },

  async softDelete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const currentDate = new Date().toISOString();
    try {
      if (isNaN(id)) {
        return res.status(400).json({ message: "id is required and a number" });
      }

      const result = await pool.query(
        "update todos set deletedon = $1 where id = $2 returning *",
        [currentDate, id],
      );

      if (!result.rows.length) {
        return res.status(400).json({ message: "id is unknown" });
      }

      return res.status(201).json({
        status: "successful",
        message: "delete successful",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ messsage: "Server error" });
    }
  },

  async updateTodos(req: Request, res: Response) {
    const task = req.body.task;
    const id = Number(req.params.id);
    const currentDate = new Date().toISOString();
    try {
      if (isNaN(id)) {
        return res.status(400).json({ message: "id must a number" });
      }
      if (!task) {
        return res.status(400).json({ message: "new task is empty" });
      }
      const result = await pool.query(
        "update todos set task = $1, updatedon = $2 where id = $3 returning *",
        [task, currentDate, id],
      );

      return res.status(201).json({
        status: "successful",
        message: "update successful",
        data: result.rows,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ messsage: "Server error" });
    }
  },
};
