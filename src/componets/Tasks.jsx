import { ChevronRightCircle, Icon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-4 bg-slate-400 rounded-md shadow">
      {props.tasks.map((tasks) => (
        <li
          key={tasks.id}
          onClick={() => props.onTaskClick(tasks.id)}
          className="flex gap-3"
        >
          <button className="bg-slate-700 w-full hover:bg-slate-600 shadow text-left text-white p-3 rounded-md font-semibold">
            {tasks.title}
            {tasks.isCompleted ? "(concluida)" : " (pendente)"}
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 shadow text-white p-3 rounded-md">
            <ChevronRightCircle />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
