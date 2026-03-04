import { Request, Response } from "express";
import pool from "../config/pool-connection.config";

export const todosController = {
  async getTodos(req: Request, res: Response) {
    const result = await pool.query("select * from todos");
    res.json(result.rows);
  },
};
