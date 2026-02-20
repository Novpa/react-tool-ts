import { useState } from "react";
import List from "./List";

export type initialStateType = {
  task: string;
  completed: boolean;
};

function Box() {
  const initialState: initialStateType[] = [
    { task: "go to the gym", completed: true },
  ];

  const [inputTask, setInputTask] = useState("");
  const [allTasks, setAllTask] = useState(initialState);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTask.trim() === "") return;

    const newItem: initialStateType = {
      task: inputTask,
      completed: false,
    };

    setAllTask((tasks) => [...tasks, newItem]);
    setInputTask("");
  };

  return (
    <div className="absolute top-5 flex w-full justify-center md:top-1 lg:top-25">
      <div className="w-[80%] md:w-[40%]">
        <div>
          <h1 className="font-josefin text-4xl font-semibold tracking-widest text-stone-100">
            TODO
          </h1>
        </div>
        <form
          onSubmit={handleAddTask}
          className="relative mt-2 mb-3 rounded-md bg-white md:mt-10"
        >
          <input
            value={inputTask}
            className="font-josefin h-15 w-full rounded-md border border-stone-200 px-5 pl-15 text-2xl text-stone-600"
            type="text"
            onChange={(e) => setInputTask(e.target.value)}
          />
          <div className="absolute top-[30%] left-5 h-6 w-6 rounded-full border border-stone-400"></div>
        </form>

        <div className="font-josefin rounded-md border border-stone-200 bg-white py-2 text-stone-600 shadow-xl">
          {allTasks.map((taskData: initialStateType) => {
            return <List task={taskData.task} completed={taskData.completed} />;
          })}

          {/* summary */}
          <div className="font-josefin flex h-10 items-center justify-between px-5 text-sm font-light">
            <p>5 items left</p>

            <div className="flex gap-4">
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>

            <p>Clear completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
