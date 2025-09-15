import React from 'react'
import HealthPage from './Health/HealthPage'
import { NavLink } from 'react-router-dom';
const Healthmontorning = () => {
  const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
     <NavLink to="/dashbord">
      <button onClick={handleClick}  class="button-52" >Go To Dashboard</button>
      </NavLink>

      <HealthPage/>

      <div className="bottom">
       <h2 className="bottomh">Heal Sync</h2>
    
      <a href="/" className="bottoma1" >Home</a>
      <a href="/benefits" className="bottoma2">About</a>
      <a href="/advantage" className="bottoma3">Advantages</a>
      <a href="/login" className="bottom4">Login</a>
   
      
    </div>
    <div className="bar">
    <p>© Created by</p>
    <p>All rights Reserved</p>
   </div> 
    </>
  )
}

export default Healthmontorning

