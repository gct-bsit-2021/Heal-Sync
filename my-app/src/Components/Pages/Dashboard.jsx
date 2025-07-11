import React from 'react'
import './Dashboard.css'
import {  NavLink } from 'react-router-dom';
import About from '../Frontend/About';
import Footer from '../Frontend/Footer'

const Dashboard = () => {
     const handleClick = () => {
    console.log("Button clicked!");
      };

    
  return (
    <>
    
    <NavLink to="/">
      <button onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
      </NavLink>
       <h3>Heal Sync Feature</h3>
       <div className="dash">
           <div  className="dash1">
          <div >
          <NavLink to="/resourcecenter">
          <button   class="button-48" ><span class="text">Resource Center</span></button> 
          </NavLink>
       </div>
       <div >
           <NavLink to="/healthmontorning">
          <button class="button-48" ><span class="text">Health Montorning</span></button>
           </NavLink>
       </div>
       </div>

       <div className="dash2">
       <div>
          <NavLink to="/location">
          <button class="button-48"  ><span class="text">Live Location Tracking</span></button>
          </NavLink>
       </div> 
       <div >
           <NavLink to="/task">
          <button class="button-48"><span class="text">Task Plan & Management</span></button>
           </NavLink>
       </div>
    </div>

    <div className="dash3">
    <div>
     <NavLink to="/mood">
     <button class="button-48" ><span class="text">Mood Behaviour & Tracking</span></button>
     </NavLink>
    </div>
    <div>
     <NavLink to="/progress">
     <button class="button-48"  ><span class="text">Progress Tracking & Reports</span></button>
     </NavLink>
    </div>
    </div>
     <div className="dash4">
           <NavLink to="/calender">
          <button class="button-48"><span class="text">Shared Calendars & Appointment</span></button>
          </NavLink>
        </div>
        


    </div>


    






   <About/>
  









    <div style={{display:'flex',gap:"0.4rem"  }}>
    <h3 >React use </h3>
    <p style={{border:"5px solid brown", width:"400px",height:"10px",marginTop:"30px"}}></p>
      <p style={{padding:"20px"}}>50%</p>
      
    </div>
    <div style={{display:'flex',gap:"0.4rem" }}>
    <h3 >Express use </h3>
    <p style={{border:"5px solid brown", width:"300px",height:"10px",marginTop:"30px"}}></p>
      <p style={{padding:"20px"}}>40%</p>
      
    </div>
    <div style={{display:'flex',gap:"0.4rem" }}>
    <h3 >Nodejs use </h3>
    <p style={{border:"5px solid brown", width:"250px",height:"10px",marginTop:"30px"}}></p>
      <p style={{padding:"20px"}}>35%</p>
      
    </div>
   
    
    <Footer/>










       
      
    </>
  )
}

export default Dashboard
