import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

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
      <div
        className="text-3xl font-bold flex place-items-center 
        place-content-center gap-2 bg-accent text-primary pb-6 pt-4 px-10
        absolute top-0 rounded-b-2xl drop-shadow-lg dark:text-darkSecondary"
      >
        <BsFillCheckCircleFill size={24} />
        <p className="pb-[2px]">nemodo</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute h-14 -bottom-[1.75em] w-full max-w-3xl min-w-fit
        flex px-4"
      >
        <input
          value={title}
          onChange={onChangeTitle}
          className="h-full flex-1 bg-primary text-secondary rounded-l-xl
          drop-shadow-lg px-4 focus:outline-none placeholder:text-slate-500
        dark:bg-darkPrimary dark:text-darkSecondary
          dark: placeholder-slate-200 transition-colors duration-500"
          type="text"
          placeholder="Add a new task..."
          spellCheck="true"
        />
        <button
          className="h-full px-4 text-secondary rounded-r-xl font-bold flex
        bg-primary place-items-center gap-1 drop-shadow-lg active:opacity-50
        dark:text-darkSecondary dark:bg-darkPrimary transition-colors
          duration-500"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Header;
