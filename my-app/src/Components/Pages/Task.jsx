import React from 'react';
import {  NavLink } from 'react-router-dom'
import './Task.css';
import TaaskList from './Plan/TaaskList';

const Task = () => {
    const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
     <NavLink to="/">
      <button onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
      </NavLink>


      <div style={{ padding: '10px' }}>
      <h1  className="p"> Task & Plan Management</h1>
    </div>
    <TaaskList/>
    </>
  )
}

export default Task

