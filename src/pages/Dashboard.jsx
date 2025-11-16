import { useEffect, useState } from "react";
import AddTask from "../componets/AddTask";
import Tasks from "../componets/Tasks";
import logo from "../assets/donefylogo01.svg";
import { v4 as uuidv4 } from "uuid";
import { LogOutIcon } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

function Dashboard({ user = { displayName: "User" } }) {
  // LISTA DE TAREFAS COM LOCALSTORAGE

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // FUNÇÃO PARA MARCAR TAREFA COMO COMPLETA

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((task) => {
      if (task.id === tasksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  // FUNÇÃO PARA DELETAR A TAREFA

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // FUNÇÃO PARA ADICIONAR NOVA TAREFA

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  // RENDERIZAÇÃO DO APP

  return (
    <div
      className="min-h-screen h-screen bg-slate-700 flex justify-center
       p-6"
    >
      <div className="w-[500px] flex flex-col gap-5 wrap-normal">
        <img className="w-60 mx-auto" src={logo} alt="Logo" />
        <img
          src={user.photoURL}
          alt=""
          className="w-20 h-20 rounded-full mx-auto"
        />
        <p className="text-white flex items-center justify-center gap-2">
          Bem-vindo, {user.displayName}!
        </p>
        <div className="flex justify-end text-white">
          <button
            onClick={() => signOut(auth)}
            className="p-2 bg-slate-400 rounded-md hover:bg-slate-500 shadow"
          >
            <LogOutIcon className="w-5 h-5 cursor-pointer text-white" />
          </button>
        </div>
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

export default Dashboard;
