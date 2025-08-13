import React, { useState, useEffect } from 'react';
import HealthForm from '../Health/Healthform';
import HealthStatus from './HealthStatus';
import HealthLog from '../Health/HealthLog';

const HealthPage = () => {
  const [records, setRecords] = useState([]);
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email'); // must be saved at login

  // DEBUG: show token/email so you can confirm
  useEffect(() => {
    console.log("HealthPage token:", token);
    console.log("HealthPage email:", email);
  }, [token, email]);

  useEffect(() => {
    if (!token || !email) return;

    fetch(`http://localhost:5000/api/healthlogs/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch health logs: " + res.status);
        return res.json();
      })
      .then(data => {
        // format backend entries to what UI expects
        const formatted = data.map(e => ({
          id: e._id,
          systolic: e.systolic,
          diastolic: e.diastolic,
          weight: e.weight,
          glucose: e.glucose,
          date: new Date(e.createdAt || e.createdAt).toLocaleString()
        }));
        setRecords(formatted);
      })
      .catch(err => {
        console.error("Fetch health logs error:", err);
      });
  }, [token, email]);

  const addRecord = (data) => {
    if (!token || !email) {
      alert("Please login to add a record");
      return;
    }

    const payload = {
      patientEmail: email, // still send this, backend should prefer req.user.email if available
      systolic: Number(data.systolic),
      diastolic: Number(data.diastolic),
      weight: Number(data.weight),
      glucose: Number(data.glucose),
    };

    fetch('http://localhost:5000/api/healthlogs/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || `Server responded ${res.status}`);
        }
        return res.json();
      })
      .then(newEntry => {
        // server returns { data: newEntryDocument }
        const e = newEntry.data;
        const formatted = {
          id: e._id,
          systolic: e.systolic,
          diastolic: e.diastolic,
          weight: e.weight,
          glucose: e.glucose,
          date: new Date(e.createdAt).toLocaleString()
        };
        setRecords(prev => [formatted, ...prev]);
      })
      .catch(err => {
        console.error("Error adding record:", err.message || err);
        alert("Error adding record: " + (err.message || "Unknown error - check console"));
      });
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
      <h2 style={{
        backgroundColor: '#EAEBD0',
        paddingBottom: '20px',
        paddingLeft: '50px',
        paddingTop: '20px',
        color: 'brown'
      }}>
        Health Monitor
      </h2>
      <HealthForm onAdd={addRecord} />
      <HealthStatus records={records} />
      <HealthLog records={records} />
    </div>
  );
};

export default HealthPage;
