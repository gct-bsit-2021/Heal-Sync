import React from 'react'
import CalendarPage from './Appointments/CalendarPage';
import {  NavLink } from 'react-router-dom';
const Appointment = () => {
     const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
    <div  style={{backgroundColor:"#EAEBD0"}}>
    <NavLink to="/">
          <button style={{
            marginTop:"20px",backgroundColor:"brown",color:"burlywood"
          }} onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
          </NavLink>
         

          <CalendarPage/>
          </div>
    </>
  )
}

export default Appointment
