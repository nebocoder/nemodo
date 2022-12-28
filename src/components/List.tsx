import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { TbTrash } from "react-icons/tb";
import { iTask } from "../App";

interface ListProps {
  tasks: iTask[];
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  onClearCompleted: () => void;
}

const List: React.FC<ListProps> = ({
  tasks,
  onComplete,
  onRemove,
  onClear,
  onClearCompleted,
}) => {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isComplete).length;

  const [list] = useAutoAnimate<HTMLDivElement>();

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 mb-32 px-4">
      <div className="flex place-items-center place-content-between mb-6">
        <div className="flex place-items-center gap-2">
          <button
            onClick={onClearCompleted}
            className="bg-accent text-primary font-bold drop-shadow-md px-3
            py-1 rounded-md text-sm active:opacity-50 transition-opacity
          dark:text-darkSecondary"
          >
            Clear Done
          </button>
          <button
            onClick={onClear}
            className="bg-red-500 text-primary font-bold drop-shadow-md px-3
            py-1 rounded-md text-sm active:opacity-50 transition-all
          dark:text-darkSecondary dark:bg-red-600 duration-500"
          >
            Clear All
          </button>
        </div>
        <div className="flex place-items-center gap-2">
          <p className="text-sm font-bold">Completed</p>
          <span
            className="text-xs font-bold bg-accent text-primary
            rounded-full drop-shadow-md px-2 py-1 dark:text-darkSecondary"
          >
            {completedTasks} of {taskQuantity}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2" ref={list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

interface TaskProps {
  task: iTask;
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onComplete, onRemove }) => {
  const [check] = useAutoAnimate<HTMLButtonElement>();

  return (
    <div
      className="w-full rounded-xl drop-shadow-lg bg-primary text-secondary
      p-4 flex flex-col justify-between gap-3 break-all
    dark:bg-darkPrimary dark:text-darkSecondary transition-colors
      duration-500"
    >
      <div>
        <div className="flex place-items-center gap-2 pl-1 mb-3">
          <button
            ref={check}
            onClick={() => onComplete(task.id)}
            className="w-5 h-5 flex place-content-center place-items-center
          text-accent"
          >
            {task.isComplete ? (
              <AiFillCheckCircle size={20} />
            ) : (
              <div
                className="w-5 h-5 border-2 rounded-full border-secondary
              dark:border-darkSecondary transition-colors duration-500"
              />
            )}
          </button>
          <p
            className={
              task.isComplete
                ? "mr-auto line-through text-slate-400 text-lg font-bold"
                : "mr-auto text-lg font-bold"
            }
          >
            {task.title}
          </p>
        </div>
        <p
          className={
            task.isComplete ? "line-through text-slate-400 pl-1" : "pl-1"
          }
        >
          {task.body}
        </p>
      </div>
      <button
        onClick={() => onRemove(task.id)}
        className="active:text-red-600 transition-colors w-auto
        duration-500 self-end"
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default List;
