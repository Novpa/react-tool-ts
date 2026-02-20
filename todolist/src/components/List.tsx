import type { initialStateType } from "./Box";
import bullet from "../assets/list/list.png";
import { useRef, useState } from "react";

function List({ task }: initialStateType) {
  const [isEditing, setIsEditing] = useState(false);
  const [currTask, setCurrTask] = useState(task);
  const inputFocus = useRef(null);

  const click = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsEditing((editing) => !editing);

    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  };

  const safeEditing = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing((edit) => !edit);
  };

  const editInput = (
    <form onSubmit={safeEditing} className="flex gap-4 pl-5">
      <input
        ref={inputFocus}
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
      <div className="h-6 w-6 overflow-hidden rounded-full border border-stone-400">
        <img src={bullet} className="h-full w-full object-cover" />
      </div>
      <p>{currTask}</p>
    </div>
  );
}

export default List;
