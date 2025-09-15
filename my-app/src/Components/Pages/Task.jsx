import React from 'react';
import Navbar from '../Frontend/Navbar.jsx'
import './Task.css';
import TaaskList from './Plan/TaaskList';
import { NavLink } from 'react-router-dom';

const Task = () => {
  const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
  <Navbar/>
  
  <NavLink to="/dashbord">
      <button onClick={handleClick}  class="button-52" >Go To Dashboard</button>
      </NavLink>

      <div style={{ padding: '10px',paddingTop:"20px",
       }}>
      <h1  className="p" > Task & Plan Management</h1>
    </div>
    <TaaskList/>
    
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

export default Task

