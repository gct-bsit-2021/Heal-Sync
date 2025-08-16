import React from 'react';

const AppointmentList = ({ appointments, onDelete, onComplete }) => {
  return (
    <div>
      <h3>Appointments</h3>
      {appointments.length === 0 ? (
        <p style={{ paddingLeft: "50px", color: "brown" }}>No appointments available.</p>
      ) : (
        appointments.map((a) => (
          <div
            key={a._id}
            style={{
              border: '1px solid brown',
              backgroundColor: "#EAEBD0",
              padding: '10px',
              marginBottom: '10px',
              paddingLeft: "50px",
              color: "brown",
              opacity: a.completed ? 0.6 : 1, // visually show completed
            }}
          >
            <p><strong>{a.title}</strong></p>
            <p>{a.date} {a.time}</p>
            <p>Location: {a.location}</p>  {/* ✅ updated here */}

            {a.completed ? (
              <span style={{ color: "green", fontWeight: "bold" }}>Completed</span>
            ) : (
              <>
                {onDelete && (
                  <button
                    style={{ marginTop: "5px", marginRight: "10px", backgroundColor: "brown", color: "burlywood" }}
                    onClick={() => onDelete(a._id)}
                  >
                    Delete
                  </button>
                )}
                {onComplete && (
                  <button
                    style={{ marginTop: "5px", backgroundColor: "green", color: "burlywood" }}
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
