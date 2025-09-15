import React from 'react'
import Navbar from '../Frontend/Navbar.jsx'
import ResourceCenter from './Resource/ResourceCenter.jsx'
import Footer from '../Frontend/Footer.jsx'
import { NavLink } from 'react-router-dom'
const Resource = () => {
  const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
      <Navbar/>

      <NavLink to="/dashbord">
      <button onClick={handleClick}  class="button-52" >Go To Dashboard</button>
      </NavLink>
      <ResourceCenter/>
      <Footer/>
    </>
  )
}

export default Resource
