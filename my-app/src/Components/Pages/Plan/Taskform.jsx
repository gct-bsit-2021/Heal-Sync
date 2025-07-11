import React, { useState } from 'react';
import './Taskform.css';
const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Unique ID
      title,
      deadline,
      priority,
      completed: false,
    };
    onAdd(newTask);
    setTitle('');
    setDeadline('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input type="text" placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button class="button-33" rolr="button" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
