import { ChevronRightCircle, Icon, Trash, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate();
  function handleSeeTasks(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-4">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-3 pointer-coarse:">
          <button
            onClick={() => onTaskClick(tasks.id)}
            className={`${
              tasks.isCompleted
                ? "bg-green-600 w-full text-left text-white p-3 rounded-md  font-semibold line-through break-words"
                : "bg-slate-400 w-full text-left text-white p-3 rounded-md  font-semibold break-words"
            }
            }`}
          >
            {tasks.title}
          </button>
          <button
            onClick={() => handleSeeTasks(tasks)}
            className="bg-slate-400 hover:bg-slate-500 shadow text-white p-3 rounded-md"
          >
            <ChevronRightCircle />
          </button>
          <button
            onClick={() => deleteTask(tasks.id)}
            className="bg-slate-400 shadow hover:bg-slate-500 text-white p-3 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
