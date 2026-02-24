import type { Dispatch, SetStateAction } from "react";
import type { initialStateType } from "./Box";

interface SummaryProps {
  allTask: initialStateType[];
  setIsSortedBy: Dispatch<SetStateAction<string>>;
  handleCompletedTask: () => void;
}

function Summary({
  allTask,
  setIsSortedBy,
  handleCompletedTask,
}: SummaryProps) {
  return (
    <div className="font-josefin flex h-10 items-center justify-between border-t border-stone-200 px-5 text-sm font-light">
      <p>{allTask?.length ?? "0"} items left</p>

      <div className="flex gap-2 md:gap-4">
        <button
          className="cursor-pointer hover:text-indigo-500"
          onClick={() => setIsSortedBy("all")}
        >
          All
        </button>
        <button
          className="cursor-pointer hover:text-indigo-500"
          onClick={() => setIsSortedBy("active")}
        >
          Active
        </button>
        <button
          className="cursor-pointer hover:text-indigo-500"
          onClick={() => setIsSortedBy("done")}
        >
          Completed
        </button>
      </div>

      <button
        className="cursor-pointer hover:text-indigo-500"
        onClick={handleCompletedTask}
      >
        Clear completed
      </button>
    </div>
  );
}

export default Summary;
