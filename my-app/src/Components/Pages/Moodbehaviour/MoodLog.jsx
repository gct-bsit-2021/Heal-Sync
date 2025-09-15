import React from 'react';

const MoodLog = ({ entries }) => {
  return (
    <div>
      <h3  style={{color:"#AF3E3E",fontWeight:"bold" ,backgroundColor:"#EAEBD0",paddingBottom:"15px" }}> Mood Log</h3>
      {entries.length === 0 ? (
        <p style={{color:"#AF3E3E",fontWeight:"bold",paddingLeft:"54px",backgroundColor:"#EAEBD0",paddingTop:"10px",paddingBottom:"10px" }}>No mood entries yet.</p>
      ) : (
        entries.map(entry => (
          <div key={entry.id} style={{ border:"2px solid #EAEBD0",marginTop:"20px",marginBottom:"20px",color:"#EAEBD0",borderRadius:"6px",padding:"20px",backgroundColor:"#AF3E3E" , margin: '19px 0', padding: '10px' }}>
            <strong>{entry.mood}</strong> - {entry.date}
            {entry.note && <p> {entry.note}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default MoodLog;
