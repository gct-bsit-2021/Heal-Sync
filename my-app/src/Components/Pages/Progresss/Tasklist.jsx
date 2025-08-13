import React, { useEffect, useState } from 'react';
import ProgressBar from '../Progresss/Progressbar';
import TaskReport from '../Progresss/Taskreports';
import axios from 'axios';

const API = 'http://localhost:5000';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [progressData, setProgressData] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    priorityCount: { low: 0, medium: 0, high: 0 },
    progressPercent: 0,
  });

  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API}/api/tasks`, { headers });
      setTasks(res.data);
    } catch (err) {
      console.error('❌ fetchTasks', err.response?.data || err.message);
    }
  };

  const fetchProgress = async () => {
    try {
      const res = await axios.get(`${API}/api/progress`, { headers });
      const d = res.data;
      // 🔁 Map backend keys -> UI keys this component expects
      setProgressData({
        total: d.totalTasks,
        completed: d.completedTasks,
        pending: d.pendingTasks,
        priorityCount: {
          low: d.priorityBreakdown?.low || 0,
          medium: d.priorityBreakdown?.medium || 0,
          high: d.priorityBreakdown?.high || 0,
        },
        progressPercent: d.progressPercent,
      });
    } catch (err) {
      console.error('❌ fetchProgress', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchProgress();
  }, []);

  const completeTask = async (id) => {
    try {
      await axios.patch(`${API}/api/tasks/${id}/complete`, {}, { headers });
      await fetchTasks();
      await fetchProgress();
    } catch (err) {
      console.error('❌ completeTask', err.response?.data || err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/api/tasks/${id}`, { headers });
      await fetchTasks();
      await fetchProgress();
    } catch (err) {
      console.error('❌ deleteTask', err.response?.data || err.message);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: "brown", fontWeight: "bold", paddingBottom: "20px" }}>
        Task Progress Overview
      </h2>

      <ProgressBar percentage={progressData.progressPercent} />
      <TaskReport data={progressData} />

      <hr style={{ margin: '20px 0' }} />

      <h3 style={{ marginTop: '30px' }}>All Tasks</h3>
      {tasks.length === 0 ? (
        <p style={{ color: "brown" }}>No tasks yet. Start by adding one.</p>
      ) : (
        tasks.map(task => (
          <div key={task._id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>{task.title} ({task.priority}) - {task.status}</span>
            <div>
              {task.status !== "completed" && (
                <button onClick={() => completeTask(task._id)}>Complete</button>
              )}
              <button onClick={() => deleteTask(task._id)} style={{ marginLeft: "5px" }}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
