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

  return (
    <div
      className="w-screen h-screen bg-slate-700 flex justify-center
       p-6"
    >
      <div className="w-[500px]">
        <h1 className="text-3xl text-white font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
