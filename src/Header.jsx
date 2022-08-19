function Header() {
  return (
    <div className="flex place-content-center place-items-center h-36 relative">
      <div className="text-3xl font-bold">nemodo</div>
      <form className="absolute h-14 -bottom-14 w-full max-w-3xl flex px-4">
        <input
          className="h-full flex-1 text-inherit border-y-2 border-l-2 bg-inherit border-slate-800 px-4
          focus:outline-none placeholder:text-slate-400"
          type="text"
          placeholder="Add a new task..."
        />
        <button className="h-full px-4 border-2 border-slate-800">Add</button>
      </form>
    </div>
  );
}

export default Header;