// frontend -> Pages/Plan/TaaskList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './Taskform';
import TaskItem from './Taskitem';

const API = 'http://localhost:5000';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  // Fetch tasks on mount
  const fetchTasks = async () => {
  try {
    const token = localStorage.getItem("token"); 
    const headers = { Authorization: `Bearer ${token}` };

    const res = await axios.get(`${API}/api/tasks`, { headers });
    setTasks(res.data); // res.data contains the tasks
  } catch (error) {
    console.error(' Error fetching tasks:', error.response?.data || error.message);
  }
};
console.log("Token:", localStorage.getItem("token"));

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) fetchTasks();
}, []);


  // Add task
  const addTask = async (taskData) => {
    try {
      const { data } = await axios.post(`${API}/api/tasks`, taskData, { headers });
     fetchTasks(); 
      setTasks(prev => [data.task, ...prev]); // immediate UI update
    } catch (error) {
      console.error(' Error adding task:', error.response?.data || error.message);
    }
  };

  // Mark complete
  const completeTask = async (id) => {
    try {
      const { data } = await axios.patch(`${API}/api/tasks/${id}/complete`, {}, { headers });
      fetchTasks(); 
      setTasks(prev => prev.map(t => (t._id === id ? data.task : t)));
    } catch (error) {
      console.error('Error completing task:', error.response?.data || error.message);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/api/tasks/${id}`, { headers });
      fetchTasks();
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (error) {
      console.error(' Error deleting task:', error.response?.data || error.message);
    }
  };

  return (
    <div style={{ paddingLeft: '20px' }}>
      <TaskForm onAdd={addTask} />

      {tasks.length === 0 ? (
        <p style={{ paddingLeft: '100px', paddingTop: '20px', color: '#AF3E3E', fontSize: '17px', fontWeight: 'bold' }}>
          No tasks yet.
        </p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
