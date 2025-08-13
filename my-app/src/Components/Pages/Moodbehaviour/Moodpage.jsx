import React, { useState, useEffect } from 'react';
import MoodForm from '../Moodbehaviour/Moodform';
import MoodLog from '../Moodbehaviour/MoodLog';
import MoodProcess from './Moodprocess';
import axios from 'axios';

const Moodpage = () => {
  const [moodEntries, setMoodEntries] = useState([]);
  const patientEmail = "test@example.com"; // replace with logged-in user's email

  // Fetch from DB on load
  useEffect(() => {
    fetchMoods();
  }, []);

  const fetchMoods = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/moodlogs/${patientEmail}`);
      // Convert backend data to match frontend format
      const formatted = res.data.map(e => ({
        id: e._id,
        mood: e.mood,
        note: e.notes,
        date: new Date(e.createdAt).toLocaleString()
      }));
      setMoodEntries(formatted);
    } catch (err) {
      console.error("❌ Error fetching moods:", err);
    }
  };

  const addMoodEntry = (entry) => {
    setMoodEntries([entry, ...moodEntries]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', color: "brown" }}>
      <h2 style={{ color: "brown", paddingBottom: "20px" }}>Mood & Behavior Tracker</h2>
      <MoodForm onAdd={addMoodEntry} />
      <MoodProcess entries={moodEntries} />
      <MoodLog entries={moodEntries} />
    </div>
  );
};

export default Moodpage;
