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
    <div className="flex place-content-center place-items-center h-36 relative">
      <div className="text-5xl font-bold flex place-items-center gap-2">
        <ImCheckmark size={48} />
        nemodo
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute h-14 -bottom-14 w-full max-w-3xl flex px-4"
      >
        <input
          value={title}
          onChange={onChangeTitle}
          className="h-full flex-1 text-inherit border-y-2 border-l-2 bg-inherit border-slate-800 px-4
          focus:outline-none placeholder:text-slate-500"
          type="text"
          placeholder="Add a new task..."
        />
        <button className="h-full px-4 border-2 border-slate-800 font-bold flex place-items-center gap-2">
          Add
          <AiOutlinePlus size={22} />
        </button>
      </form>
    </div>
  );
}

export default Header;
