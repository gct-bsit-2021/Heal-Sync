import React from 'react';

const AppointmentList = ({ appointments, onDelete, onComplete }) => {
  return (
    <div>
      <h3 style={{paddingLeft:"270px",marginBottom:"30px",fontWeight:"bold",color:"#AF3E3E"}}>Appointments</h3>
      {appointments.length === 0 ? (
        <p style={{ paddingLeft: "50px", color: "brown" }}>No appointments available.</p>
      ) : (
        appointments.map((a) => (
          <div className="animated-card"
            key={a._id}
            style={{
              border:"1px solid #AF3E3E",
              backgroundColor: "#EAEBD0",
              padding: '10px',
              marginBottom: '10px',
              paddingLeft: "50px",
              color: "#AF3E3E",
              marginLeft: "200px",
              marginRight:"220px",
              paddingLeft: "80px",

            }}
          >
            <p><strong>{a.title}</strong></p>
            <p>{a.date} </p>
            <p>{a.time}</p>
            <p>Location: {a.location}</p>  {/*  updated here */}

            {a.completed ? (
              <span className="button-62" >Completed</span>
            ) : (
              <>
                {onDelete && (
                  <button className="button-62" style={{marginRight:"30px"}}
                    onClick={() => onDelete(a._id)}
                  >
                    Delete
                  </button>
                )}
                {onComplete && (
                  <button className="button-62"
                    onClick={() => onComplete(a._id)}
                  >
                    Complete
                  </button>
                )}
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AppointmentList;
