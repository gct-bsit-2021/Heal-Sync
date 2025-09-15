import React from 'react'
import { useState , useEffect} from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar1.css";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
 const [click, setClick] =useState(false);
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleClick = ()=>{
    setClick(!click)
  }
 

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, [])

  const toggleTheme = () => {
    setDark(!dark);
    if (!dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  
  return (
    <>


        <nav className="navbar">
        <div className="nav-container">
          <NavLink
          
          className='nav-logo'
          >
          HEAL SYNC
          </NavLink>
               <ul className={click ? "nav-menu active" : 'nav-menu'}>

            <li className="nav-item">
              <NavLink 
              exact to ='/'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/notification'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
                Notification & Alert
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/sos'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
           SOS Button
              </NavLink>
            </li>

            <li className="nav-item">
              
              <NavLink 
              exact to ='/login'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              
              >
                Login To Heal Sync
              </NavLink>  

            </li>
    
          </ul>
          
        
         <div className="nav-icon" onClick={handleClick}>
        {!click ? (
          <CgMenu/> 
        ) : (
          <CgClose/> 
        )}
      </div>
          </div>
      </nav>
    
      
    </>
  )
}

export default Navbar
