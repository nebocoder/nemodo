import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

const LOCAL_STORAGE_KEY = "nemodo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: nanoid(),
        title: taskTitle,
        isComplete: false,
      },
    ]);
  }

  function toggleCompleteById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function removeById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function clearTasks() {
    const newTasks = [];
    setTasksAndSave(newTasks);
  }

  function clearCompleted() {
    const newTasks = tasks.filter((task) => !task.isComplete);
    setTasksAndSave(newTasks);
  }

  return (
    <div
      className="min-h-screen bg-primary text-secondary font-inter
      overflow-x-hidden dark:bg-darkBg dark:text-primary relative
      transition-colors duration-500"
    >
      <Header onAddTask={addTask} />
      <List
        tasks={tasks}
        onComplete={toggleCompleteById}
        onRemove={removeById}
        onClear={clearTasks}
        onClearCompleted={clearCompleted}
      />
      <Footer />
    </div>
  );
}

export default App;
