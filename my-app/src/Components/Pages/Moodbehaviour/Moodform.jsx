import React, { useState, useEffect } from 'react';
import './Moodform.css';
import axios from 'axios';

const Moodform = ({ onAdd }) => {
  // Always call hooks first
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [userRole, setUserRole] = useState('');

  // Fetch user role from localStorage or token on mount
  useEffect(() => {
    const role = localStorage.getItem("role"); // assume you store 'patient' or 'family' at login
    setUserRole(role);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mood) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not logged in");

      const res = await axios.post(
        "http://localhost:5000/api/moodlogs/add",
        { mood: mood.toLowerCase().trim(), notes: note },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const entry = {
        id: res.data.data._id,
        mood: res.data.data.mood,
        note: res.data.data.notes,
        date: new Date(res.data.data.createdAt).toLocaleString()
      };

      onAdd(entry);
      setMood('');
      setNote('');
    } catch (err) {
      console.error("Error adding mood:", err.response?.data || err.message);
    }
  };

  // Show nothing if user is not a patient
  if (userRole !== 'patient') return null;

  return (
    <form className="animated-card"  onSubmit={handleSubmit} style={{ marginBottom: '20px',backgroundColor:"#AF3E3E",paddingTop:"20px",paddingLeft:"50px",paddingRight:"20px" }}>
      <label style={{fontWeight:"bold",color:"#EAEBD0"}}>Select your mood:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <select
        style={{ color: "skyblue", border: "2px solid #EAEBD0"}}
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
        className="moodselect"
        rows="3"
       
      />

      <button className="button-28" type="submit" style={{ marginTop: '19px' }}>
        Add Entry
      </button>
    </form>
  );
};

export default Moodform;
