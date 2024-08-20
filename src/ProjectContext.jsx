import React, { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projectState, setProjectState] = useState(() => {
      const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      return {
        selectedProjectId: undefined,
        projects: storedProjects,
        tasks: storedTasks,
      };
    });
  
    useEffect(() => {
      localStorage.setItem("projects", JSON.stringify(projectState.projects));
      localStorage.setItem("tasks", JSON.stringify(projectState.tasks));
    }, [projectState.projects, projectState.tasks]);
  
    const handleTaskAdd = (text) => {
      setProjectState((prevState) => {
        const taskId = Math.random();
        const newTask = {
          text,
          projectid: prevState.selectedProjectId,
          id: taskId,
        };
  
        return {
          ...prevState,
          tasks: [newTask, ...prevState.tasks],
        };
      });
    };
  
    const handleTaskDelete = (taskId) => {
      setProjectState((prevState) => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter((task) => task.id !== taskId),
        };
      });
    };
  
    const handleAddProject = (newProject) => {
      setProjectState((prevState) => {
        const pro = {
          ...newProject,
          id: Math.random(),
        };
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: [...prevState.projects, pro],
        };
      });
    };
  
    const handleSelectedProject = (id) => {
      setProjectState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: id,
        };
      });
    };
  
    const handleCancelProject = () => {
      setProjectState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: undefined,
        };
      });
    };
  
    const handleDeleteProject = (id) => {
      setProjectState((prevState) => {
        return {
          ...prevState,
          projects: prevState.projects.filter((project) => project.id !== id),
          selectedProjectId: undefined,
        };
      });
    };
  
    const handleAddStartProject = () => {
      setProjectState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: null,
        };
      });
    };
  
    return (
      <ProjectContext.Provider
        value={{
          projectState,
          handleTaskAdd,
          handleTaskDelete,
          handleAddProject,
          handleSelectedProject,
          handleCancelProject,
          handleDeleteProject,
          handleAddStartProject,
        }}
      >
        {children}
      </ProjectContext.Provider>
    );
  };
  
  export const useProjectContext = () => useContext(ProjectContext);