import { useState } from "react";
import List from "./List";

export type initialStateType = {
  id: string;
  task: string;
  completed: boolean;
};

const generateRandomId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

function Box() {
  const initialState: initialStateType[] = [
    {
      id: generateRandomId(),
      task: "go to the gym",
      completed: false,
    },
  ];

  const [inputTask, setInputTask] = useState("");
  const [allTasks, setAllTask] = useState<initialStateType[]>(initialState);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTask.trim() === "") return;

    const newItem: initialStateType = {
      id: generateRandomId(),
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
          {allTasks?.map((taskData: initialStateType) => {
            return (
              <List
                key={taskData.id}
                task={taskData.task}
                id={taskData.id}
                setAllTask={setAllTask}
                completed={taskData.completed}
              />
            );
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
