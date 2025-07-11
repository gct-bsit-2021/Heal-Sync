import React from 'react';
import  { useState } from 'react';
import './Moodform.css';

const Moodform = ({ onAdd }) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toLocaleString()
    };
    onAdd(entry);
    setMood('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      
      <label>Select your mood:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <select value={mood} onChange={(e) => setMood(e.target.value)} required>
        <option value=""> Choose </option>
        <option value=" Happy">Happy</option>
        <option value=" Sad"> Sad</option>
        <option value=" Angry">Angry</option>
        <option value=" Anxious"> Anxious</option>
        <option value=" Tired"> Tired</option>
      </select>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <textarea
        placeholder="Add notes (optional)..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows="3"
        style={{ display: 'block', marginTop: '10px', width: '100%' }}
      />
      <button   class="button-28"  type="submit" style={{ marginTop: '19px' }}>Add Entry</button>
    </form>
  );
};

export default Moodform;

