import React, { useState } from 'react';
import axios from 'axios';

const LinkPatientPage = () => {
  const [patientEmail, setPatientEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/link', { patientEmail });
      alert(res.data.message || 'Patient linked successfully!');
      setPatientEmail('');
    } catch (err) {
      alert(err.response?.data?.message || 'Error linking patient');
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#EAEBD0"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          background: "brown",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          width: "300px"
        }}
      >
        <h2 style={{color:"#EAEBD0"}}>Link Patient</h2>
        <input
          type="email"
          placeholder="Enter patient email"
          value={patientEmail}
          onChange={(e) => setPatientEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid brown",
            color:"#EAEBD0",
            borderRadius: "5px"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#EAEBD0",
            color: "brown",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Link
        </button>
      </form>
    </div>
  );
};

export default LinkPatientPage;
