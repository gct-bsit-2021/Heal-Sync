import React, { useState } from 'react';
import './Taskform.css';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !deadline) return;

    // Convert YYYY-MM-DD to DD/MM/YYYY
    const dateObj = new Date(deadline);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const newTask = {
      title,
      dueDate: formattedDate,
      priority: priority.toLowerCase()
    };

    await onAdd(newTask); // send to parent

    // Reset form
    setTitle('');
    setDeadline('');
    setPriority('low');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="animated-card"
      style={{ marginRight:"80px",marginBottom: '20px', paddingLeft: '130px',marginLeft:"70px", paddingTop: '20px', paddingBottom: '20px',   backgroundColor:" #EAEBD0" }}
    >
      <input
        type="text"
        placeholder="Task title"
        className="trd"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      &nbsp;&nbsp;&nbsp;

      <input
        type="date"
        value={deadline}
        className="trd"
        onChange={(e) => setDeadline(e.target.value)}
        required
      
      />

      &nbsp;&nbsp;&nbsp;

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="trg"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      &nbsp;&nbsp;&nbsp;

      <button type="submit" className="button-33">Add Task</button>
    </form>
  );
};

export default TaskForm;
