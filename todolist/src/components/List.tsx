import bullet from "../assets/list/list.png";
import type { initialStateType } from "./Box";
import { useRef, useState } from "react";

type ListProps = {
  id: string;
  task: string;
  completed: boolean;
  setAllTask: React.Dispatch<React.SetStateAction<initialStateType[]>>;
};

function List({ id, task, completed, setAllTask }: ListProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currTask, setCurrTask] = useState(task);

  const click = () => {
    setIsEditing((editing) => !editing);
  };

  const safeEditing = (e: React.FormEvent<HTMLFormElement>, taksId: string) => {
    e.preventDefault();
    console.log(taksId, id);
    setAllTask((allTask) =>
      allTask?.map((taskItem) =>
        taskItem.id === taksId ? { ...taskItem, task: currTask } : taskItem,
      ),
    );
    setIsEditing((edit) => !edit);
  };

  const handleCompleteTask = (id: string) => {
    setAllTask((allTasks) =>
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editInput = (
    <form onSubmit={(e) => safeEditing(e, id)} className="flex gap-4 pl-5">
      <input
        className="font-josefin h-15 w-[80%] rounded-md border border-stone-200 px-5 pl-15 text-xl text-stone-600"
        defaultValue={currTask}
        onChange={(e) => setCurrTask(e.target.value)}
      />
      <button className="cursor-pointer rounded-md border px-5 transition-all duration-300 hover:bg-indigo-500 hover:text-stone-100">
        Save
      </button>
    </form>
  );
  return isEditing ? (
    editInput
  ) : (
    <div
      onDoubleClick={click}
      className="flex h-15 cursor-pointer items-center gap-5 border-b border-stone-300 bg-white px-5 text-lg"
    >
      <div
        onClick={() => handleCompleteTask(id)}
        className="h-6 w-6 overflow-hidden rounded-full border border-stone-400"
      >
        {completed && (
          <img src={bullet} className="h-full w-full object-cover" />
        )}
      </div>
      <p className={completed ? `line-through` : ``}>{task}</p>
    </div>
  );
}

export default List;
