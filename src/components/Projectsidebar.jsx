export default function Projectsidebar({ add, projects, select, currentId }) {
  return (
    <aside className="w-full md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:px-4 ">
      <h2 className="mb-8 font-bold md:text-xl uppercase text-stone-200">
        YOUR PROJECTS
      </h2>
      <div>
        <button
          onClick={add}
          className="px-4 py-2 text-md md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-600"
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssclasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          
          if (project.id === currentId) {
            cssclasses += ' bg-stone-800 text-stone-200'
          } else {
            cssclasses += ' text-stone-400'
          }
          return (
            <li key={project.id}>
              <button className={cssclasses} onClick={() => select(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
