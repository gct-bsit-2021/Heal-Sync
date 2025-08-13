import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './Taskform';
import TaskItem from './Taskitem';

const API = 'http://localhost:5000';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

  // Fetch tasks from DB on load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(`${API}/api/tasks`, { headers });
        setTasks(data);
      } catch (error) {
        console.error('❌ Error fetching tasks', error.response?.data || error.message);
      }
    };
    fetchTasks();
  }, []);

  // Add task to DB
  const addTask = async (taskData) => {
    try {
      const { data } = await axios.post(`${API}/api/tasks`, taskData, { headers });
      setTasks(prev => [data.task, ...prev]);
    } catch (error) {
      console.error('❌ Error adding task', error.response?.data || error.message);
    }
  };

  // ✅ Mark task as complete (PATCH to dedicated route, update state)
  const completeTask = async (id) => {
    try {
      const { data } = await axios.patch(`${API}/api/tasks/${id}/complete`, {}, { headers });
      setTasks(prev => prev.map(t => (t._id === id ? data.task : t)));
    } catch (error) {
      console.error('❌ Error completing task', error.response?.data || error.message);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/api/tasks/${id}`, { headers });
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (error) {
      console.error('❌ Error deleting task', error.response?.data || error.message);
    }
  };

  // Edit task (can also update status if you want)
  const editTask = async (updatedTask) => {
    try {
      const { data } = await axios.put(`${API}/api/tasks/${updatedTask._id}`, updatedTask, { headers });
      setTasks(prev => prev.map(t => (t._id === updatedTask._id ? data.task : t)));
    } catch (error) {
      console.error('❌ Error editing task', error.response?.data || error.message);
    }
  };

  return (
    <div style={{ paddingLeft: '20px' }}>
      <TaskForm onAdd={addTask} />
      {tasks.length === 0 ? (
        <p style={{ paddingLeft: '50px', paddingTop: '20px', color: 'brown', fontSize: '17px', fontWeight: 'bold' }}>
          No tasks yet.
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
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
