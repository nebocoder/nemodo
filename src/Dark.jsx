import { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function Dark() {
  const [darkMode, setDarkMode] = useState(false);
  const rootClasses = document.getElementById('root').classList;

  function toggleDarkMode() {
    setDarkMode(() => !darkMode);
    rootClasses.toggle('dark');
  }

  return (
    <div className="w-full text-center absolute bottom-4">
      <button onClick={toggleDarkMode} className="active:opacity-50">
        {darkMode ? (
          <MdOutlineLightMode size={32} />
        ) : (
          <MdOutlineDarkMode size={32} />
        )}
      </button>
    </div>
  );
}
export default Dark;
