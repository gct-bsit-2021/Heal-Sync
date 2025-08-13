import React from 'react';

const TaskReport = ({ data }) => {
  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px',borderRadius:" 6px",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"  }}>
      <h4 style={{color:"brown" ,paddingLeft:"250px",fontWeight:"bold"}}>Task Report</h4>
      <p style={{color:"brown" ,paddingLeft:"50px" }}>Total Tasks: {data.total}</p>
      <p style={{color:"brown" ,paddingLeft:"50px"}}> Completed: {data.completed}</p>
      <p style={{color:"brown" ,paddingLeft:"50px"}}> Pending: {data.pending}</p>
      <p style={{color:"brown" ,paddingLeft:"50px"}}>Priority Breakdown:</p>
      <ul>
        <li style={{color:"brown" ,paddingLeft:"20px"}}> Low: {data.priorityCount.low}</li>
        <li style={{color:"brown" ,paddingLeft:"20px"}}> Medium: {data.priorityCount.medium}</li>
        <li style={{color:"brown" ,paddingLeft:"20px"}}> High: {data.priorityCount.high}</li>
      </ul>
    </div>
  );
};

export default TaskReport;
