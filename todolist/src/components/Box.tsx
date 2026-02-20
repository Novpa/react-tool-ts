import { useEffect, useState } from "react";
import List from "./List";
import SearchTask from "./SearchTask";
import sabit from "../assets/sabit.svg";
import bintang from "../assets/bintang.svg";

export type initialStateType = {
  id: string;
  task: string;
  completed: boolean;
  createdOn: Date;
};

type BoxProps = {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const generateRandomId = (): string => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

function Box({ isDarkTheme, setIsDarkTheme }: BoxProps) {
  const initialState: initialStateType[] = [
    {
      id: generateRandomId(),
      task: "go to the gym",
      completed: false,
      createdOn: new Date(),
    },
  ];

  const [inputTask, setInputTask] = useState("");
  const [allTasks, setAllTask] = useState<initialStateType[]>(initialState);
  const [searchTask, setSearchTask] = useState<string>("");
  const [isSortedBy, setIsSortedBy] = useState<string>("");

  console.log(isSortedBy);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isDarkTheme]);

  const searchedTask = allTasks.filter((taskItem) =>
    taskItem.task
      .split(" ")
      .join("")
      .toLowerCase()
      .includes(searchTask.split(" ").join("").toLowerCase()),
  );

  let derivedTasksData = searchTask.trim() === "" ? allTasks : searchedTask;

  if (isSortedBy === "completed") {
    derivedTasksData = derivedTasksData.sort(
      (firstTask, secondTask) =>
        Number(secondTask.completed) - Number(firstTask.completed),
    );
  } else if (isSortedBy === "dateCreated") {
    derivedTasksData = derivedTasksData.sort(
      (firstTask, secondTask) =>
        secondTask.createdOn.getTime() - firstTask.createdOn.getTime(),
    );
  }

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputTask.trim() === "") return;

    const newItem: initialStateType = {
      id: generateRandomId(),
      task: inputTask,
      completed: false,
      createdOn: new Date(),
    };

    setAllTask((tasks) => [...tasks, newItem]);
    setInputTask("");
  };

  return (
    <>
      <div className="absolute top-5 flex w-full justify-center md:top-5 lg:top-10">
        <div className="w-[90%] md:w-[60%] lg:w-[40%]">
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
              className="font-josefin h-15 w-full rounded-md border border-stone-200 px-5 pl-15 text-xl text-stone-600"
              type="text"
              onChange={(e) => setInputTask(e.target.value)}
              placeholder="Create todo..."
            />
            <div className="absolute top-[30%] left-5 h-6 w-6 rounded-full border border-stone-400"></div>
          </form>

          <div className="font-josefin rounded-md border border-stone-200 bg-white py-2 text-stone-600 shadow-xl">
            <div className="h-70 overflow-y-auto">
              {derivedTasksData?.map((taskData: initialStateType) => {
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
            </div>

            {/* summary */}
            <div className="font-josefin flex h-10 items-center justify-between border-t border-stone-200 px-5 text-sm font-light">
              <p>5 items left</p>

              <div className="flex gap-2 md:gap-4">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
              </div>

              <p>Clear completed</p>
            </div>
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className="flex justify-center">
        <div className="fixed bottom-10 z-10 flex gap-4 md:top-3 md:right-3 md:h-10">
          <SearchTask setSearchTask={setSearchTask} />
          <select
            onChange={(e) => setIsSortedBy(e.target.value)}
            className="text-md font-josefin h-15 w-30 rounded-md border border-stone-300 px-2 py-2 text-stone-300 shadow-xl backdrop-blur-md"
          >
            <option value="">Sort by</option>
            <option value="completed">Sorted by completed</option>
            <option value="dateCreated">Sorted by created date</option>
          </select>
          <div
            className="flex cursor-pointer items-center justify-center rounded-full bg-indigo-900 px-2 py-2"
            onClick={() => setIsDarkTheme((theme) => !theme)}
          >
            <img src={isDarkTheme ? bintang : sabit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
