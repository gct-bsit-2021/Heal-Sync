import React from 'react'
import Moodpage from '../Pages/Moodbehaviour/Moodpage';
import {  NavLink } from 'react-router-dom';
const Mood = () => {
   const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
    <NavLink to="/">
          <button onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
          </NavLink>
      <h2 style={{paddingLeft:"280px",color:"brown"}}>Mood Behaviour & Tracking</h2>
      <Moodpage/>
     
    </>
  )
}

export default Mood
