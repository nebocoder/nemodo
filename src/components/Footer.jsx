import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const LOCAL_STORAGE_KEY = "nemodo:darkMode";

function DarkBtn() {
  const [darkMode, setDarkMode] = useState(false);
  const rootClasses = document.getElementById("root").classList;

  function loadDarkMode() {
    const savedDarkMode = localStorage.getItem(LOCAL_STORAGE_KEY);
    return JSON.parse(savedDarkMode);
  }

  useEffect(() => {
    if (loadDarkMode()) {
      rootClasses.add("dark");
      setDarkMode(() => !darkMode);
    }
  }, []);

  function toggleDarkMode() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!darkMode));
    rootClasses.toggle("dark");
    setDarkMode(() => !darkMode);
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

function Footer() {
  return (
    <div>
      <DarkBtn />
    </div>
  );
}

export default Footer;
