import React, { useState, useEffect } from 'react';
import MoodForm from '../Moodbehaviour/Moodform';
import MoodLog from '../Moodbehaviour/MoodLog';
import MoodProcess from './Moodprocess';
import axios from 'axios';

const Moodpage = () => {
  const [moodEntries, setMoodEntries] = useState([]);

  const fetchMoods = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/moodlogs", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const formatted = res.data.map(e => ({
        id: e._id,
        mood: e.mood,
        note: e.notes,
        date: new Date(e.createdAt).toLocaleString()
      }));

      setMoodEntries(formatted);
    } catch (err) {
      console.error("Error fetching moods:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  const addMoodEntry = (entry) => {
    setMoodEntries([entry, ...moodEntries]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', color: "#AF3E3E" }}>
      <h2 style={{ color:"#AF3E3E",paddingTop:"10px",paddingLeft:"45px", paddingBottom: "20px",fontWeight:"bold",backgroundColor:"#EAEBD0" }}>Mood & Behavior Tracker</h2>
      <MoodForm onAdd={addMoodEntry} />
      <MoodProcess entries={moodEntries} />
      <MoodLog entries={moodEntries} />
    </div>
  );
};

export default Moodpage;
