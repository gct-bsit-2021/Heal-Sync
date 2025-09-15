import React, { useState } from 'react';
import './AppointmentForm.css'

const AppointmentForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',  // renamed from patientName to location
    role: 'patient'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: '', date: '', time: '', location: '', role: 'patient' }); //  reset correctly
  };

  return (
   <form onSubmit={handleSubmit} className="fr"  >
      <div className="fg" >
        <label>Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input className="fi"  
          name="title"  
          value={form.title} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="fl" >
        <label>Location:&nbsp;</label>
        <input className="fo"  
          name="location" 
          value={form.location} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="fd" >
        <label>Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input  className="fj" 
          type="date" 
          name="date" 
          value={form.date} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="fk" >
        <label>Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input 
          type="time" className="ft"     
          name="time" 
          value={form.time} 
          onChange={handleChange} 
          required 
        />
      </div>
<br/>
      <button style={{marginLeft:"30px"}} className="button-62" type="submit" >
        Add Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
