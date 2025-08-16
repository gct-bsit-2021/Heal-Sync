// src/Health/HealthStatus.jsx
import React from 'react';

const HealthStatus = ({ records }) => {
  if (records.length === 0) {
    return (
      <div style={{ backgroundColor: "#EAEBD0", padding: "10px" }}>
        <h3>Health Status</h3>
        <p style={{ color: "brown" }}>No records yet.</p>
      </div>
    );
  }

  const latest = records[0]; // Most recent entry

  return (
    <div style={{ backgroundColor: "#EAEBD0", padding: "10px" }}>
      <h3 style={{ color: "brown" }}>Latest Health Status</h3>
      <p>BP: {latest.systolic}/{latest.diastolic} mmHg</p>
      <p>Weight: {latest.weight} kg</p>
      <p>Glucose: {latest.glucose} mg/dL</p>
      <p>Date: {latest.date}</p>
    </div>
  );
};

export default HealthStatus;
