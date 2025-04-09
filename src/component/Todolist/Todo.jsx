import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">To-Do List</h2>
      <input
        type="text"
        className="border p-2 w-full rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addTask}
      >
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            {task}
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
