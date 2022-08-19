import { GrTrash } from 'react-icons/gr';
import { AiFillCheckSquare } from 'react-icons/ai';

function List() {
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

      <div className="flex flex-col gap-3"></div>
    </div>
  );
}

function Task() {
  return (
    <div className="w-full border-2 border-slate-800 p-4 flex place-items-center justify-between gap-3">
      <button>
        <AiFillCheckSquare />
      </button>
      <p className="text-sm mr-auto">task</p>
      <button>
        <GrTrash size={20} />
      </button>
    </div>
  );
}

export default List;
