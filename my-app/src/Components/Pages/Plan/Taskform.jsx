import React, { useState } from 'react';
import './Taskform.css';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert deadline from YYYY-MM-DD to DD/MM/YYYY
    const dateObj = new Date(deadline);
    const formattedDate = dateObj.toLocaleDateString('en-GB'); // dd/mm/yyyy

    const newTask = {
      title,
      dueDate: formattedDate,
      priority: priority.toLowerCase()
    };

    console.log("📤 Sending Task Data:", newTask); // Debug log
    await onAdd(newTask);

    // Reset form
    setTitle('');
    setDeadline('');
    setPriority('low');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: '20px', paddingLeft: '40px', paddingTop: '20px', paddingBottom: '20px' }}
    >
      <input
        style={{ border: '2px solid burlywood', borderRadius: '2px', backgroundColor: 'brown', color: 'burlywood', paddingBottom: '8px' }}
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      &nbsp; &nbsp; &nbsp;
      <input
        style={{ border: '2px solid burlywood', borderRadius: '2px', backgroundColor: 'brown', color: 'burlywood', paddingBottom: '8px' }}
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />

      &nbsp; &nbsp; &nbsp;
      <select
        style={{ border: '2px solid burlywood', borderRadius: '2px', backgroundColor: 'brown', color: 'burlywood', paddingBottom: '8px' }}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="button-33" role="button" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
