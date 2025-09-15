import React from 'react'
import TaskList from './Progresss/Tasklist';
import Navbar from '../Frontend/Navbar';
import { NavLink } from 'react-router-dom';

const Progress = () => {
  const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
<Navbar/>

 <NavLink to="/dashbord">
      <button onClick={handleClick}  class="button-52" >Go To Dashboard</button>
      </NavLink>
    <div style={{ padding: '20px' }}>
      <h1 style={{color:"#AF3E3E",fontWeight:"bold",display:"flex",justifyContent:"center"}}> Progress Page & Task Report</h1>
      
    </div>


    
     <TaskList/>


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

export default Progress
