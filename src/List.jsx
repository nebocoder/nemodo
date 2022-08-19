import { GrTrash } from 'react-icons/gr';
import { AiFillCheckSquare } from 'react-icons/ai';

function List({ tasks, onComplete }) {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isComplete).length;

  return (
    <div className="w-full max-w-3xl mx-auto mt-24 mb-12 px-4">
      <div className="flex place-items-center place-content-between mb-6">
        <div className="flex place-items-center gap-2">
          <p className="text-sm font-bold">Created</p>
          <span className="text-xs font-bold bg-slate-800 text-slate-100 px-2 py-1">
            {taskQuantity}
          </span>
        </div>
        <div className="flex place-items-center gap-2">
          <p className="text-sm font-bold">Completed</p>
          <span className="text-xs font-bold bg-slate-800 text-slate-100 px-2 py-1">
            {completedTasks} of {taskQuantity}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onComplete={onComplete} />
        ))}
      </div>
    </div>
  );
}

function Task({ task, onComplete }) {
  return (
    <div className="w-full border-2 border-slate-800 p-4 flex place-items-center justify-between gap-3">
      <button
        onClick={() => onComplete(task.id)}
        className="w-5 h-5 flex place-content-center place-items-center"
      >
        {task.isComplete ? (
          <AiFillCheckSquare size={20} />
        ) : (
          <div className="w-full h-full border-2 border-slate-800" />
        )}
      </button>
      <p
        className={
          task.isComplete
            ? 'mr-auto line-through text-slate-500'
            : 'font-semibold mr-auto'
        }
      >
        {task.title}
      </p>
      <button>
        <GrTrash size={20} />
      </button>
    </div>
  );
}

export default List;
