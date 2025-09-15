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
    <form onSubmit={handleSubmit} className="healthform">
      <div className="healthdiv1 ">
        <label className="healthlabel1">Systolic (mmHg):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input className="healthinput1" type="number" name="systolic" value={form.systolic} onChange={handleChange} required />
      </div>
      <div className="healthdiv1" >
        <label className="healthlabel1" >Diastolic (mmHg):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input className="healthinput1" type="number" name="diastolic" value={form.diastolic} onChange={handleChange} required  />
      </div>
      <div className="healthdiv1" >
        <label className="healthlabel1" >Weight (kg):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input className="healthinput1" type="number" name="weight" value={form.weight} onChange={handleChange} required  />
      </div>
      <div className="healthdiv1"  >
        <label className="healthlabel1" >Glucose (mg/dL):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input className="healthinput1" type="number" name="glucose" value={form.glucose} onChange={handleChange} required/>
      </div>
      <button type="submit" className="button-28" style={{ marginTop: '30px', marginLeft: "35px" }}>Add Record</button>
    </form>
  );
};

export default HealthForm;
