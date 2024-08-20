
import NewTask from "./NewTask";

export default function Tasks({ addTask, delTask, tasks, projectid }) {
  const taskks = tasks.filter((task) => task.projectid === projectid);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">New Task</h2>
      <NewTask addTask={addTask} delTask={delTask} />
      {taskks.length === 0 && (
        <p className="text-stone-800 mb-4 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {taskks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {taskks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button onClick={() => delTask(task.id)} className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
