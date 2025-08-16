import React, { useState } from 'react';
import './Healthform.css';

const HealthForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    systolic: '',
    diastolic: '',
    weight: '',
    glucose: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ systolic: '', diastolic: '', weight: '', glucose: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px', backgroundColor: "brown", paddingTop: "20px" }}>
      <div style={{ margin: "15px" }}>
        <label style={{ color: "#EAEBD0", paddingLeft: "20px" }}>Systolic (mmHg):</label>
        <input type="number" name="systolic" value={form.systolic} onChange={handleChange} required style={{ border: "2px solid #EAEBD0" }} />
      </div>
      <div style={{ margin: "15px" }}>
        <label style={{ color: "#EAEBD0", paddingLeft: "20px" }}>Diastolic (mmHg):</label>
        <input type="number" name="diastolic" value={form.diastolic} onChange={handleChange} required style={{ border: "2px solid #EAEBD0" }} />
      </div>
      <div style={{ margin: "15px" }}>
        <label style={{ color: "#EAEBD0", paddingLeft: "20px" }}>Weight (kg):</label>
        <input type="number" name="weight" value={form.weight} onChange={handleChange} required style={{ border: "2px solid #EAEBD0" }} />
      </div>
      <div style={{ margin: "15px" }}>
        <label style={{ color: "#EAEBD0", paddingLeft: "20px" }}>Glucose (mg/dL):</label>
        <input type="number" name="glucose" value={form.glucose} onChange={handleChange} required style={{ border: "2px solid #EAEBD0" }} />
      </div>
      <button type="submit" className="button-28" style={{ marginTop: '30px', marginLeft: "35px" }}>Add Record</button>
    </form>
  );
};

export default HealthForm;
