// src/Health/HealthLog.jsx
import React from 'react';

const HealthLog = ({ records }) => {
  return (
    <div style={{ backgroundColor: "#EAEBD0", fontWeight: "bold", padding: "10px" }}>
      <h3>Health Log</h3>
      {records.length === 0 ? (
        <p style={{ color: "brown" }}>No records yet.</p>
      ) : (
        records.map((r) => (
          <div
            key={r.id}
            style={{
              border: '2px solid #EAEBD0',
              backgroundColor: "brown",
              marginBottom: '10px',
              padding: '8px'
            }}
          >
            <p style={{ color: "#EAEBD0" }}><strong>{r.date}</strong></p>
            <p style={{ color: "#EAEBD0" }}>BP: {r.systolic}/{r.diastolic} mmHg</p>
            <p style={{ color: "#EAEBD0" }}>Weight: {r.weight} kg</p>
            <p style={{ color: "#EAEBD0" }}>Glucose: {r.glucose} mg/dL</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HealthLog;
