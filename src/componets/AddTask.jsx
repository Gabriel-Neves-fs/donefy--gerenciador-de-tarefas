import { Turtle } from "lucide-react";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-4 bg-slate-400 rounded-md shadow">
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        className=" bg-slate-100 w-full p-2 rounded border border-slate-700 outline-slate-500"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Adicionar nova descrição..."
        className="bg-slate-100 w-full p-2 rounded border border-slate-700 outline-slate-500"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos.");
            setTitle("");
            setDescription("");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="w-full bg-slate-700  hover:bg-slate-600 rounded-md p-2 font-semibold text-2x1 text-slate-100 "
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
