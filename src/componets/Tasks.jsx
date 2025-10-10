import { ChevronRightCircle, Icon, Trash, Trash2 } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-4 bg-slate-400 rounded-md shadow">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-3">
          <button
            onClick={() => props.onTaskClick(tasks.id)}
            className={`${
              tasks.isCompleted
                ? "bg-green-500 w-full text-left text-white  p-3 rounded-md font-semibold"
                : "bg-slate-700 w-full text-left text-white p-3 rounded-md font-semibold"
            }
            }`}
          >
            {tasks.title}
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 shadow text-white p-3 rounded-md">
            <ChevronRightCircle />
          </button>
          <button
            onClick={() => props.deleteTask(tasks.id)}
            className="bg-slate-700 hover:bg-slate-600 shadow text-white p-3 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
