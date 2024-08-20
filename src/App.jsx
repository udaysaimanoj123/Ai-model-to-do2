import React from "react";
import { ProjectProvider, useProjectContext } from "./ProjectContext";
import Projectsidebar from "./components/Projectsidebar";
import Noproject from "./components/NoProject";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
function AppContent() {
  const {
    projectState,
    handleTaskAdd,
    handleTaskDelete,
    handleAddProject,
    handleSelectedProject,
    handleCancelProject,
    handleDeleteProject,
    handleAddStartProject,
  } = useProjectContext();

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      tasks={projectState.tasks}
      del={handleDeleteProject}
      project={selectedProject}
      addTask={handleTaskAdd}
      delTask={handleTaskDelete}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject handleadd={handleAddProject} handlecancel={handleCancelProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <Noproject add={handleAddStartProject} />;
  }

  return (
    <>
    <main className="h-screen my-8 flex flex-col md:flex-row gap-8">
      <Projectsidebar
        add={handleAddStartProject}
        projects={projectState.projects}
        select={handleSelectedProject}
        currentId={projectState.selectedProjectId}
      />
      {content}
    </main></>
    
  );
}

function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}

export default App;
