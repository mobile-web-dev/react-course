import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li>
            {task}
            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add task</button>
      <button onClick={() => setTasks([])}>Reset All</button>
      <p>No of tasks to be done : {tasks.length}</p>
    </div>
  );
}

export default App;
