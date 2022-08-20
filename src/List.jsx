import { useAutoAnimate } from '@formkit/auto-animate/react';
import { GrTrash } from 'react-icons/gr';
import { AiFillCheckSquare } from 'react-icons/ai';

function List({ tasks, onComplete, onRemove }) {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isComplete).length;

  const [parent] = useAutoAnimate();

  return (
    <div className="w-full max-w-3xl mx-auto mt-24 mb-12 px-4">
      <div className="flex place-items-center place-content-between mb-6">
        <div className="flex place-items-center gap-2">
          <p className="text-sm font-bold">Created</p>
          <span className="text-xs font-bold bg-primary text-secondary px-2 py-1">
            {taskQuantity}
          </span>
        </div>
        <div className="flex place-items-center gap-2">
          <p className="text-sm font-bold">Completed</p>
          <span className="text-xs font-bold bg-primary text-secondary px-2 py-1">
            {completedTasks} of {taskQuantity}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3" ref={parent}>
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
}

function Task({ task, onComplete, onRemove }) {
  return (
    <div className="w-full border-2 border-primary bg-primary text-secondary p-4 flex place-items-center justify-between gap-3 break-all">
      <button
        onClick={() => onComplete(task.id)}
        className="w-5 h-5 flex place-content-center place-items-center"
      >
        {task.isComplete ? (
          <AiFillCheckSquare size={20} />
        ) : (
          <div className="w-5 h-5 border-2 border-secondary" />
        )}
      </button>
      <p
        className={
          task.isComplete
            ? 'mr-auto line-through text-slate-500'
            : 'font-medium mr-auto'
        }
      >
        {task.title}
      </p>
      <button onClick={() => onRemove(task.id)}>
        <GrTrash size={20} />
      </button>
    </div>
  );
}

export default List;
