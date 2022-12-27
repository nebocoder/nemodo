import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";

const LOCAL_STORAGE_KEY = "nemodo:darkMode";

const Buttons: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const rootClasses = document.getElementById("root")?.classList;

  function loadDarkMode() {
    const savedDarkMode = localStorage.getItem(LOCAL_STORAGE_KEY)
      ? "true"
      : "false";
    return JSON.parse(savedDarkMode);
  }

  useEffect(() => {
    if (loadDarkMode()) {
      rootClasses?.add("dark");
      setDarkMode(() => !darkMode);
    }
  }, []);

  function toggleDarkMode() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!darkMode));
    rootClasses?.toggle("dark");
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
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div>
      <Buttons />
    </div>
  );
};

export default Footer;
