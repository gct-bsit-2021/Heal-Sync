import React, { useState } from 'react';
import './AppointmentForm.css'

const AppointmentForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',  // ✅ renamed from patientName to location
    role: 'patient'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: '', date: '', time: '', location: '', role: 'patient' }); // ✅ reset correctly
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding:"15px" }}>
      <div style={{paddingLeft:"20px",margin:"7px",color:"brown"}}>
        <label>Title:&nbsp;</label>
        <input 
          style={{border:"2px solid burlywood",borderRadius:"2px",backgroundColor:"brown",color:"burlywood",paddingBottom:"8px"}}  
          name="title"  
          value={form.title} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div style={{paddingLeft:"20px",margin:"7px",color:"brown"}}>
        <label>Location:&nbsp;</label>
        <input 
          style={{border:"2px solid burlywood",borderRadius:"2px",backgroundColor:"brown",color:"burlywood",paddingBottom:"8px"}}  
          name="location"   // ✅ changed here
          value={form.location} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div style={{paddingLeft:"20px",margin:"7px",color:"brown"}}>
        <label>Date:&nbsp;</label>
        <input 
          style={{border:"2px solid burlywood",borderRadius:"2px",backgroundColor:"brown",color:"burlywood",paddingBottom:"8px"}}  
          type="date" 
          name="date" 
          value={form.date} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div style={{paddingLeft:"20px",margin:"7px",color:"brown"}}>
        <label>Time:&nbsp;</label>
        <input 
          type="time"    
          style={{border:"2px solid burlywood",borderRadius:"2px",backgroundColor:"brown",color:"burlywood",paddingBottom:"8px"}} 
          name="time" 
          value={form.time} 
          onChange={handleChange} 
          required 
        />
      </div>

      <button className="button-62" type="submit" style={{ marginLeft:"20px", marginTop:"20px" }}>
        Add Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
