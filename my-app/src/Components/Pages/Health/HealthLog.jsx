import React from 'react';

const HealthLog = ({ records }) => {
  return (
   <div style={{ backgroundColor: "#EAEBD0", padding: "10px" }}>
      <h3 style={{fontWeight:"bold",paddingLeft:"55px",color:"#AF3E3E"}}>Health Log</h3>
      {records.length === 0 ? (
        <p style={{ color: "#AF3E3E",paddingLeft:"55px" }}>No records yet.</p>
      ) : (
        records.map((r) => (
          <div
            key={r.id}
            style={{
              border: '2px solid #EAEBD0',
              backgroundColor: "#AF3E3E",
              borderRadius:"6px",
              marginBottom: '10px',
              paddingLeft:"55",
              padding: '8px'

            }}
          >
            <p style={{ color: "#EAEBD0",paddingLeft:"55px" }}><strong>{r.date}</strong></p>
            <p style={{ color: "#EAEBD0",paddingLeft:"55px" }}>Systolic: {r.systolic} mmHg</p>
            <p style={{ color: "#EAEBD0",paddingLeft:"55px" }}>Diastolic: {r.diastolic} mmHg</p>
            <p style={{ color: "#EAEBD0",paddingLeft:"55px" }}>Weight: {r.weight} kg</p>
            <p style={{ color: "#EAEBD0",paddingLeft:"55px" }}>Glucose: {r.glucose} mg/dL</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HealthLog;
