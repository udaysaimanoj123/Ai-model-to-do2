import { useState } from "react";
import axios from "axios";

export default function NewTask({ addTask }) {
  const [taskInput, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isManual, setIsManual] = useState(true); // State to toggle between manual and description mode
  const [loading, setLoading] = useState(false);

  function handleTaskInput(name) {
    setTask(name);
  }

  function handleDescriptionInput(desc) {
    setDescription(desc);
    console.log(description);
  }

  function handleAddTask() {
    if (taskInput.trim() === "") {
      return;
    }
    addTask(taskInput);
    setTask("");
  }

  async function handleGenerateTasks() {
    if (description.trim() === "") {
    return;
    }
  
  setLoading(true);

  try {
    const response = await axios.post("https://ai-task-generator.onrender.com/generate-tasks", {
      description,
    });

    const generatedTasks = response.data.tasks;

    generatedTasks.forEach((task) => {
      addTask(task.trim());
    });

    setDescription("");
  } catch (error) {
    console.error("Error generating tasks:", error);
  } finally {
    setLoading(false);
  }
  }

  function toggleMode() {
    setIsManual((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={toggleMode}
        className="text-stone-700 hover:text-stone-950"
      >
        {isManual ? "Switch to Description Mode" : "Switch to Manual Mode"}
      </button>

      {isManual ? (
        <div className="flex items-center gap-4">
          <input
            value={taskInput}
            onChange={(e) => handleTaskInput(e.target.value)}
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            placeholder="Enter task"
          />
          <button
            onClick={handleAddTask}
            className="text-stone-700 hover:text-stone-950"
          >
            Add Task Manually
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <input
            value={description}
            onChange={(e) => handleDescriptionInput(e.target.value)}
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            placeholder="Enter project description"
          />
          <button
            onClick={handleGenerateTasks}
            className="text-stone-700 hover:text-stone-950"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Tasks from Description"}
          </button>
        </div>
      )}
    </div>
  );
}
