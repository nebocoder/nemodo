import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";

const LOCAL_STORAGE_KEY = "nemodo:darkMode";

function Buttons() {
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
      <button
        onClick={toggleDarkMode}
        className="active:opacity-50 hover:opacity-75 mr-4"
      >
        {darkMode ? (
          <MdOutlineLightMode size={32} />
        ) : (
          <MdOutlineDarkMode size={32} />
        )}
      </button>
      <button className="active:opacity-50 hover:opacity-75">
        <a href="https://github.com/nebocoder/nemodo" target="_blank">
          <TbBrandGithub size={31} />
        </a>
      </button>
      <p className="pt-2">
        Made with ❤️ by{" "}
        <a
          className="text-blue-600 dark:text-blue-300 font-bold
          transition-colors duration-500 hover:opacity-70"
          href="https://twitter.com/nebocoder"
          target="_blank"
        >
          @nebocoder
        </a>
        .
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <Buttons />
    </div>
  );
}

export default Footer;
