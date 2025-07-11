import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
      <h3>{task.title}</h3>
      <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? ' Completed' : ' Pending'}</p>
      {!task.completed && (
        <button onClick={() => onComplete(task.id)}>Mark Complete</button>
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
