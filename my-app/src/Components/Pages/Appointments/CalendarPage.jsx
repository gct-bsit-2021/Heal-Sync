import React, { useState, useEffect } from 'react';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import axios from 'axios';

const CalendarPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [role, setRole] = useState('family'); 
  const [currentUser, setCurrentUser] = useState('Ahmad'); 
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5000/api/calenders/";
  const token = localStorage.getItem('token');

  // Fetch appointments from backend
  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Add appointment
  const addAppointment = async (appt) => {
    try {
      const payload = {
        title: appt.title,
        location: appt.location, // ✅ updated here
        date: appt.date,
        time: appt.time,
        createdBy:role, 
      };

      const { data } = await axios.post(API_URL, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAppointments([data.appointment, ...appointments]);
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

  // Complete appointment
  const completeAppointment = async (id) => {
    try {
      const { data } = await axios.patch(
        `${API_URL}/complete/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAppointments(appointments.map(appt => appt._id === id ? data.appointment : appt));
    } catch (error) {
      console.error("Error completing appointment:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: "brown", paddingLeft: "20px", fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}>
        Shared Calendar
      </h2>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ paddingLeft:"20px", fontSize:"20px", color:"brown" }}>Select Role:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <select style={{ border:"1px solid brown", color:"brown", borderRadius:"2px" }} value={role} onChange={(e) => setRole(e.target.value)}>
          <option style={{ backgroundColor:'burlywood', color:"brown" }} value="family">Family Member</option>
          <option style={{ backgroundColor:'burlywood', color:"brown" }} value="patient">Patient</option>
        </select>

        <label style={{ paddingLeft:"30px", fontSize:"20px", color:"brown" }}>Current User:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          style={{ border:"1px solid brown", color:"brown", borderRadius:"2px" }}
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      {loading ? (
        <p style={{ color: "brown", fontWeight: "bold" }}>Loading appointments...</p>
      ) : (
        <>
          <AppointmentForm onAdd={addAppointment} />
          <AppointmentList
            appointments={appointments.map(a => ({ ...a, role: a.role || 'unknown' }))}
            onDelete={deleteAppointment}
            onComplete={completeAppointment}
          />
        </>
      )}
    </div>
  );
};

export default CalendarPage;
