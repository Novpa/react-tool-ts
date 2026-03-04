import express from "express";
import todosRouter from "./routers/todos.router";

const app = express();
const PORT = 3000;

//? Tanpa middleware ini, req.body tidak akan terisi.
app.use(express.json());

//? Cara baca ---> semua yang awalannya /api/todos akan dihandle oleh todosRouter
app.use("/api/todos", todosRouter);

app.listen(PORT, () => {
  console.log(`🦄 Server is running on port ${PORT}`);
});
