import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          style={{ flex: 1, padding: "5px", border: "1px solid #ccc", borderRadius: "3px" }}
        />
        <button onClick={addTask} style={{ padding: "5px 10px", cursor: "pointer" }}>Add</button>
      </div>
      <div>
        {tasks.map((t, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px", borderBottom: "1px solid #ddd" }}>
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}</span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={() => toggleComplete(index)} style={{ padding: "3px 6px", cursor: "pointer" }}>
                ✓
              </button>
              <button onClick={() => deleteTask(index)} style={{ padding: "3px 6px", cursor: "pointer", color: "red" }}>
                ✗
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
