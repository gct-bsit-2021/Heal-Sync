import React, { useState } from 'react';
import axios from 'axios';

const LinkPatientPage = () => {
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPassword, setPatientPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    const token = localStorage.getItem("token"); // Get token
    if (!token) {
      setError("You must be logged in first.");
      setLoading(false);
      return;
    }

    // DEBUG: Show what we are sending
    console.log("Sending request with:", { patientEmail, patientPassword, token });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/link/link-patient",
        { patientEmail, patientPassword }, // ✅ Correct keys
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Backend response:", res.data);
      setMessage(res.data.message || 'Patient linked successfully!');
      setPatientEmail('');
      setPatientPassword('');
    } catch (err) {
      console.log("Axios error:", err.response);
      setError(err.response?.data?.message || 'Error linking patient');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid brown",
    borderRadius: "5px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    background: "#EAEBD0",
    color: "brown",
    border: "none",
    borderRadius: "5px",
    cursor: loading ? 'not-allowed' : 'pointer'
  };

  const formStyle = {
    padding: "20px",
    background: "brown",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    width: "300px"
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#EAEBD0"
    }}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ color: "#EAEBD0", textAlign: "center" }}>Link Patient</h2>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {message && <p style={{ color: 'lightgreen', textAlign: 'center' }}>{message}</p>}

        <input
          type="email"
          placeholder="Enter patient email"
          value={patientEmail}
          onChange={(e) => setPatientEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Enter patient password"
          value={patientPassword}
          onChange={(e) => setPatientPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? 'Linking...' : 'Link'}
        </button>
      </form>
    </div>
  );
};

export default LinkPatientPage;
