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

      <div className="flex flex-col gap-3">
        <p>task</p>
        <p>task</p>
        <p>task</p>
      </div>
    </div>
  );
}

export default List;
