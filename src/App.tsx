import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

const LOCAL_STORAGE_KEY = "nemodo:savedTasks";

export interface iTask {
  id: string;
  title: string;
  body: string;
  isComplete: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<iTask[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: iTask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string, taskBody: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: nanoid(),
        title: taskTitle,
        body: taskBody,
        isComplete: false,
      },
    ]);
  }

  function toggleCompleteById(taskId: string) {
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

  function removeById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function clearTasks() {
    const newTasks: iTask[] = [];
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
};

export default App;
