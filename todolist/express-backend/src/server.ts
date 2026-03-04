import express, { Express } from "express";
import pool from "./config/pool-connection.config";
import todosRouter from "./routes/todos.routes";

const PORT = 6000;
const app: Express = express();
app.use(express.json());

pool.connect((err, client, release) => {
  if (err) return console.log("Failed to connect to db", err.stack);

  console.log("DB successfully connected");
  release();
});

app.use("/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`🦄 Server is running in port ${PORT}`);
});
