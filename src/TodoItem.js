import React from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
