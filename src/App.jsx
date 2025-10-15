import { useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";
import logo from "./assets/donefylogo01.svg";
import { v4 as uuidv4 } from "uuid";

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

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div
      className="min-h-screen h-screen bg-slate-700 flex justify-center
       p-6"
    >
      <div className="w-[500px] flex flex-col gap-5 wrap-normal">
        <img className="w-60 mx-auto" src={logo} alt="Logo" />
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
        <footer className="text-center text-white">
          <p>
            Desenvolvido por
            <span className="font-bold hover: underline">
              {" "}
              <a
                href="https://www.linkedin.com/in/gabriel-neves-4194a4389/"
                target="_blank"
                rel="noreferrer"
              >
                Gabriel Neves
              </a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
