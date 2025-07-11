import React from 'react'
import {useRef} from "react";
import "./Navbar1.css";
import {  NavLink } from 'react-router-dom';




const Navbar = () => {
  const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <>
      <header>
        <h3>HEAL SYNC</h3>
        <nav ref={navRef} className="responsive_nav" >
            <NavLink to="/" className={({isActive}) => isActive ? "active-link":""}>
               Home
            </NavLink>
            <NavLink to="/notification" className={({isActive}) => isActive ? "active-link":""}>
               Notification & Alert
            </NavLink>
             <NavLink to="/sos" className={({isActive}) => isActive ? "active-link":""}>
               SOS Button
               </NavLink>
                <NavLink to="/resourcecenter" className={({isActive}) => isActive ? "active-link":""}>
               ResourceCenter
               </NavLink>
                <NavLink to="/login" className={({isActive}) => isActive ? "active-link":""} >
                Login To Heal Sync
                </NavLink>
               
           
           
            
        </nav>
        
      </header>
    </>
  )
}

export default Navbar
