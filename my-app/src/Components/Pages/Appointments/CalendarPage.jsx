import React, { useState, useEffect } from 'react';
import AppointmentForm from '../Appointments/AppointmentForm';
import AppointmentList from '../Appointments/AppointmentList';
import axios from 'axios';

const CalendarPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [role, setRole] = useState('family'); 
  const [currentUser, setCurrentUser] = useState('Ahmad'); 

  const API_URL = "http://localhost:5000/api/calender"; // Adjust if your backend is different
  const token = localStorage.getItem('token'); // Assuming you store JWT after login

  // Fetch appointments from backend
  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const addAppointment = async (appt) => {
  try {
    const payload = {
      title: appt.title,
      date: appt.date,
      time: appt.time,
      patientName: role === 'patient' ? currentUser : appt.patient
    };

    const { data } = await axios.post(API_URL, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setAppointments([data, ...appointments]);
  } catch (error) {
    console.error("Error adding appointment:", error.response ? error.response.data : error.message);
  }
};



  // Delete appointment
  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments(appointments.filter(a => a._id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const filteredAppointments = role === 'patient'
    ? appointments.filter((appt) => appt.patientName === currentUser)
    : appointments;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{color:"brown", paddingLeft:"20px", fontWeight:"bold", fontSize:"40px", marginBottom:"20px"}}>
        Shared Calendar
      </h2>

      <div style={{ marginBottom: '10px' }}>
        <label style={{paddingLeft:"20px", fontSize:"20px", color:"brown"}}>Select Role:&nbsp; &nbsp;&nbsp;&nbsp;</label>
        <select style={{border:"1px solid brown", color:"brown", borderRadius:"2px"}} value={role} onChange={(e) => setRole(e.target.value)}>
          <option style={{backgroundColor:'burlywood', color:"brown"}} value="family">Family Member</option>
          <option style={{backgroundColor:'burlywood', color:"brown"}} value="patient">Patient</option>
        </select>
        <label style={{paddingLeft:"30px", fontSize:"20px", color:"brown"}}>Current User:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input style={{border:"1px solid brown", color:"brown", borderRadius:"2px"}}
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

     {(role === 'family' || role === 'patient') && <AppointmentForm onAdd={addAppointment} />}

<AppointmentList appointments={filteredAppointments} onDelete={deleteAppointment} />

    
    </div>
  );
};

export default CalendarPage;
