import React, { useState } from 'react';
import Footer from '../Frontend/Footer';
import Card from 'react-bootstrap/Card';
import mindfulness from '../../Assets/mindfulness.png';
import './Sosbutton.css';
import { NavLink } from 'react-router-dom';

const Sosbutton = () => {
     const handleClick = () => {
    console.log("Button clicked!");
      };
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // get role from localStorage (saved after login)
  const role = localStorage.getItem("role");

  const handleSOS = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to trigger SOS");
        setLoading(false);
        return;
      }

      // Call backend API
      const response = await fetch("http://localhost:5000/api/sos/press", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        console.log("SOS Response:", data);
        setSent(true);
      } else {
        alert(data.message || "Failed to send SOS");
      }
    } catch (error) {
      console.error("SOS error:", error);
      alert("Something went wrong sending SOS");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <>

<NavLink to="/dashbord">
      <button onClick={handleClick}  class="button-52" >Go To Dashboard</button>
      </NavLink>

      <div style={{ textAlign: 'center', padding: '30px', marginTop: "30px" }}>
        <h2 style={{ color: "#AF3E3E", fontWeight: "bold" }}>Emergency SOS</h2>

        {/* Only show SOS button if logged-in user is a patient */}
        {role === "patient" && (
          sent ? (
            <p style={{ color: 'red' }}> Emergency Alert Sent to Family.</p>
          ) : (
            <button
              onClick={handleSOS}
              disabled={loading}
              style={{
                padding: '20px 40px',
                backgroundColor: '#EAEBD0',
                color: '#AF3E3E',
                fontSize: '24px',
                borderRadius: '50px',
                border: 'none',
                cursor: loading ? "not-allowed" : "pointer"
              }}
            >
              {loading ? "Sending..." : "PRESS SOS"}
            </button>
          )
        )}
      </div>

      <h2 className="sos">SOS CARD</h2>
      <div className="advantage" style={{ marginTop: "60px" }}>
        <Card className="animated-card" style={{
          width: '16rem',
          height: '20rem',
          backgroundColor: " #EAEBD0",
          border: "none",
          boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)"
        }}>
          <Card.Img variant='top' src={mindfulness} style={{ width: "60px", marginLeft: "80px", paddingTop: "40px" }} />
          <Card.Body>
            <Card.Text style={{ fontSize: "15px", paddingLeft: "18px", color: "brown" }}>
              HealSync provides an SOS feature that allows patients to immediately notify their family or caregivers in case of an emergency. By simply pressing the SOS button within the app, an alert is sent in real-time.
            </Card.Text>
          </Card.Body>
        </Card>
        
         <Card className="animated-card" style={{ width: '16rem',height:'20rem' ,backgroundColor:" #EAEBD0",border:"none",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"  }}>
      <Card.Img  variant='top' src={mindfulness} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
     Ensuring that help reaches the patient as quickly as possible. This feature gives both patients and families peace of mind, knowing that urgent care can be accessed instantly when needed.
        </Card.Text>
       
      </Card.Body>
    </Card>

         <Card className="animated-card" style={{ width: '16rem',height:'20rem' ,backgroundColor:" #EAEBD0",border:"none",boxShadow:"0 0 10px rgba(0, 123, 255, 0.5)"  }}>
      <Card.Img  variant='top' src={mindfulness} style={{width:"60px",marginLeft:"80px",paddingTop:"40px"}}
      />
      <Card.Body>
        
        <Card.Text  style={{fontSize:"15px" ,paddingLeft:"18px" ,color:"brown"}}>
       With HealSync, patients can send an emergency alert to their family or caregivers instantly. This ensures immediate attention and support during critical situations, keeping everyone connected and safe. 
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
      <Footer />
    </>
  );
};

export default Sosbutton;
