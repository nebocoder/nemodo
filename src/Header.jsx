import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { ImCheckmark } from 'react-icons/im';

function Header({ onAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="flex place-content-center place-items-center h-48 relative bg-slate-800">
      <div className="text-5xl font-bold flex place-items-center gap-2 bg-slate-100 py-2 px-4 rounded-sm">
        <ImCheckmark size={48} />
        nemodo
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute h-14 -bottom-[1.75em] w-full max-w-3xl flex px-4"
      >
        <input
          value={title}
          onChange={onChangeTitle}
          className="h-full flex-1 bg-slate-100 text-slate-800 border-y-2 border-l-2 border-slate-800 px-4
          focus:outline-none placeholder:text-slate-500"
          type="text"
          placeholder="Add a new task..."
        />
        <button className="h-full px-4 border-2 bg-slate-100 text-slate-800 border-slate-800 font-bold flex place-items-center gap-2">
          Add
          <AiOutlinePlus size={22} />
        </button>
      </form>
    </div>
  );
}

export default Header;
