import { useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar react, e fazer o gerenciador de tarefas!",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Dar uns cheiros na Gatinha",
      description: "ela anda muito cheirosa, preciso dá uma fungada nela!",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar React",
      description: "Estudar react, e fazer o gerenciador de tarefas!",
      isCompleted: false,
    },
  ]);

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((task) => {
      if (task.id === tasksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div
      className="w-screen h-screen bg-slate-700 flex justify-center
       p-6"
    >
      <div className="w-[500px] flex flex-col gap-5 wrap-normal">
        <h1 className="text-3xl gap-5 text-white font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
