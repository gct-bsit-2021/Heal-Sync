import React from 'react';

const HealthStatus = ({ records }) => {
  if (records.length === 0) {
    return (
      <div style={{ backgroundColor: "#EAEBD0", padding: "10px"}}>
        <h3 style={{fontWeight:"bold",paddingLeft:"55px",color:"#AF3E3E"}} >Health Status</h3>
        <p style={{ color: "brown",paddingLeft:"55px" }}>No records yet.</p>
      </div>
    );
  }

  const latest = records[0]; // Most recent entry

  return (
  <div style={{ backgroundColor: "#EAEBD0", padding: "10px" }}>
      <h3 style={{ color: "#AF3E3E" ,fontWeight:"bold",paddingLeft:"55px"}}>Latest Health Status</h3>
      <div style={{color: "#EAEBD0",border: '2px solid #EAEBD0',
              backgroundColor: "#AF3E3E",
              borderRadius:"6px",  paddingLeft:"55px"}}>
      <p>Systolic: {latest.systolic} mmHg</p>
      <p>Diastolic: {latest.diastolic} mmHg</p>
      <p>Weight: {latest.weight} kg</p>
      <p>Glucose: {latest.glucose} mg/dL</p>
      <p>Date: {latest.date}</p>
      </div>
    </div>
  );
};

export default HealthStatus;
