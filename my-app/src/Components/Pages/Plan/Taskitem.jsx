import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const isCompleted = task.status === 'completed'; // ✅ use status

  return (
    <div style={{
      border: '1px solid brown',
      padding: 10,
      marginBottom: 10,
      width: '60%',
      paddingLeft: '30px',
      marginLeft: '40px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)'
    }}>
      <h3>{task.title}</h3>
      <p>Deadline: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {isCompleted ? 'Completed' : 'Pending'}</p>

      {!isCompleted && (
        <button onClick={() => onComplete(task._id)}>Mark Complete</button>
      )}
      <button onClick={() => onDelete(task._id)} style={{ marginLeft: 8 }}>Delete</button>
    </div>
  );
};

export default TaskItem;
