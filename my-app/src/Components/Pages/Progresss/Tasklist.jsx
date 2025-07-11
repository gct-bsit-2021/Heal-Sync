import React, { useState } from 'react';
import TaskForm from '../Plan/Taskform';
import TaskItem from '../Plan/Taskitem';
import ProgressBar from '../Progresss/Progressbar';
import TaskReport from '../Progresss/Taskreports';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h2> Task Progress Overview</h2>

      {/* Show progress first */}
      <ProgressBar tasks={tasks} />
      <TaskReport tasks={tasks} />

      <hr style={{ margin: '20px 0' }} />

      <h3>Add New Task</h3>
      <TaskForm onAdd={addTask} />

      <h3 style={{ marginTop: '30px' }}>All Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet. Start by adding one.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={completeTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
