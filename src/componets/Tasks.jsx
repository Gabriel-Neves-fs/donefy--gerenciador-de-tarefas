function Tasks(props) {
  return (
    <ul className="space-y-4 p-4 bg-slate-400 rounded-md shadow">
      {props.tasks.map((tasks) => (
        <li
          key={tasks.id}
          className="bg-slate-700 text-white p-3 rounded-md font-semibold"
        >
          {tasks.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
