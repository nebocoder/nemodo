import React, { SetStateAction, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface HeaderProps {
  onAddTask: (title: string, body: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    onAddTask(title, body);
    setTitle("");
    setBody("");
  }

  function onChangeTitle(event: { target: { value: SetStateAction<string> } }) {
    setTitle(event.target.value);
  }

  function onChangeBody(event: { target: { value: SetStateAction<string> } }) {
    setBody(event.target.value);
  }

  return (
    <div className="flex place-content-center place-items-center h-[300px] relative">
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
        className="absolute h-[200px] -bottom-[0.25em] w-full max-w-3xl min-w-fit
        flex flex-col px-4"
      >
        <div className="flex h-16">
          <input
            value={title}
            onChange={onChangeTitle}
            className="h-14 flex-1 bg-primary text-secondary rounded-tl-xl
            drop-shadow-lg px-4 focus:outline-none placeholder:text-slate-500
          dark:bg-darkPrimary dark:text-darkSecondary
            dark: placeholder-slate-200 transition-colors duration-500"
            type="text"
            placeholder="Task title..."
            spellCheck="true"
          />
          <button
            className="h-14 px-4 text-secondary rounded-tr-xl font-bold flex
          bg-primary place-items-center gap-1 drop-shadow-lg active:opacity-70
          dark:text-darkSecondary dark:bg-[#313e52] transition-colors
            duration-500"
          >
            Add
          </button>
        </div>
        <textarea
          value={body}
          onChange={onChangeBody}
          className="flex-4 bg-primary text-secondary rounded-b-xl
          drop-shadow-lg px-4 pt-4 focus:outline-none placeholder:text-slate-500
        dark:bg-darkPrimary dark:text-darkSecondary
          dark: placeholder-slate-200 transition-colors duration-500
          border-t-1 mt-1 border-primary dark:border-secondary resize-none"
          placeholder="Task body..."
          rows={6}
          spellCheck="true"
        />
      </form>
    </div>
  );
};

export default Header;
