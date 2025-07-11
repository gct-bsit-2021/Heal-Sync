import React from 'react';

const TaskReport = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  const priorityCount = {
    Low: tasks.filter(t => t.priority === 'Low').length,
    Medium: tasks.filter(t => t.priority === 'Medium').length,
    High: tasks.filter(t => t.priority === 'High').length,
  };

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h4>Task Report</h4>
      <p>Total Tasks: {total}</p>
      <p> Completed: {completed}</p>
      <p> Pending: {pending}</p>
      <p>Priority Breakdown:</p>
      <ul>
        <li> Low: {priorityCount.Low}</li>
        <li> Medium: {priorityCount.Medium}</li>
        <li> High: {priorityCount.High}</li>
      </ul>
    </div>
  );
};

export default TaskReport;
