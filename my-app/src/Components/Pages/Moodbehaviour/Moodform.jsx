import React, { useState } from 'react';
import './Moodform.css';
import axios from 'axios';

const Moodform = ({ onAdd }) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const entry = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toLocaleString()
    };

    // 1. Send to backend
    try {
      const res = await axios.post("http://localhost:5000/api/moodlogs/add", {
        patientEmail: "test@example.com", // later replace with logged-in user's email
        mood: mood.toLowerCase().trim(),
        notes: note
      });

      console.log("✅ Saved to DB:", res.data);
    } catch (err) {
      console.error("❌ Error saving mood:", err);
    }

    // 2. Update local state
    onAdd(entry);

    // 3. Reset form
    setMood('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <label>Select your mood:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <select
        style={{ color: "skyblue", border: "1px solid brown" }}
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        required
      >
        <option value=""> Choose </option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="anxious">Anxious</option>
        <option value="tired">Tired</option>
      </select>

      <textarea
        placeholder="Add notes (optional)..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows="3"
        style={{
          display: 'block',
          marginTop: '20px',
          width: '100%',
          borderRadius: "7px",
          color: 'brown',
          border: "2px solid brown"
        }}
      />
      <button className="button-28" type="submit" style={{ marginTop: '19px' }}>Add Entry</button>
    </form>
  );
};

export default Moodform;
