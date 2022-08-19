import { useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './Header';
import List from './List';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle) {
    setTasks([
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
    setTasks(newTasks);
  }

  return (
    <div className="h-screen bg-slate-100 text-slate-800">
      <Header onAddTask={addTask} />
      <List tasks={tasks} onComplete={toggleCompleteById} />
    </div>
  );
}

export default App;
