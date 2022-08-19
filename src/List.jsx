import { GrTrash } from 'react-icons/gr';
import { AiFillCheckSquare } from 'react-icons/ai';

function List({ tasks }) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-24 mb-12 px-4">
      <div className="flex place-items-center place-content-between mb-6">
        <div className="flex place-items-center gap-2">
          <p className="text-sm font-bold">Created</p>
          <span className="text-xs font-bold bg-slate-800 text-slate-100 px-2 py-1">
            5
          </span>
        </div>
        <div className="flex place-items-center gap-2">
          <p className="text-sm font-bold">Completed</p>
          <span className="text-xs font-bold bg-slate-800 text-slate-100 px-2 py-1">
            2 of 5
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

function Task({ task }) {
  return (
    <div className="w-full border-2 border-slate-800 p-4 flex place-items-center justify-between gap-3">
      <button>
        <AiFillCheckSquare />
      </button>
      <p className="text-sm mr-auto">{task.title}</p>
      <button>
        <GrTrash size={20} />
      </button>
    </div>
  );
}

export default List;
