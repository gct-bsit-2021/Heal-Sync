import React from 'react'
import './Dashboard.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaHome, FaBell, FaCog, FaBook, FaChartLine, FaSearch, FaFacebook, FaTwitter, FaLinkedin ,FaCalendarCheck,FaSyncAlt,FaHeartbeat,FaMapMarkerAlt,FaTasks,FaSmile,FaSignInAlt} from "react-icons/fa";
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleGoogleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.open(googleUrl, "_blank"); // nayi tab me open hoga
    }
  };
  return (
    <>
       <div className="dashboardcontainerrrrrr">
      {/* Sidebar */}
      <aside className="sidebarrrrrr">

        <h2>HealSync</h2>
        <ul>
          <li>
            <Link to="/">
             <FaHome/> <span>Home</span>
            </Link>
            </li>
            <li>
              <Link to="/resourcecenter">
              <FaBook/> <span>Resource Center</span>
              </Link>
              </li>
              <li>
              <Link to="/healthmontorning">
              <FaHeartbeat/> <span>Health Montorning</span>
              </Link>
              </li>
              <li>
              <Link to="/location">
              <FaMapMarkerAlt/> <span>Live Location Tracking</span>
              </Link>
              </li>
              <li>
              <Link to="/task">
              <FaTasks/> <span> Plan & Management</span>
              </Link>
              </li>
              <li>
              <Link to="/mood">
              <FaSmile/> <span>Mood Behaviour</span>
              </Link>
              </li>
              <li>
              <Link to="/progress">
              <FaChartLine/> <span>Progress & Reports</span>
              </Link>
              </li>
              <li>
              <Link to="/calender">
              <FaCalendarCheck/> <span>Appointment</span>
              </Link>
              </li>
               <li>
              <Link to="/login">
              <FaSignInAlt/> <span>LogIn</span>
              </Link>
              </li>
          
        </ul>
      </aside>
      <main className="mainnnn">
        {/* Search Bar */}
        <form className="search-barjjjj" onSubmit={handleGoogleSearch}>
          <input
            type="text"
            className="my-input"
            placeholder="Search health-related articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit"><FaSearch/> Google</button>
        </form>
         <div className="cardssssss">
            <div className="cardsssss">
              <FaCalendarCheck className="card-iconssss" />
              <h3>Shared Calender & Appointment</h3>
              <p>Get timely alerts for doctor visits so you never miss an appointment.</p>
            </div>

            <div className="cardsssss">
              <FaSmile className="card-iconssss" />
              <h3>Mood Behaviour & Tracking</h3>
              <p>Monitor daily emotional changes for better care</p>
            </div>

            <div className="cardsssss">
              <FaChartLine className="card-iconssss" />
              <h3>Progress Tracking & Reports</h3>
              <p>Monitor your health journey over time.</p>
            </div>

            <div className="cardsssss">
              <FaBook className="card-iconssss" />
              <h3>Resource Center</h3>
              <p>Access articles, videos, and guides to improve your health knowledge.</p>
            </div>

            <div className="cardsssss">
              <FaHeartbeat className="pulse-icon" />
              <h3>Health Monitoring</h3>
              <p>Track vital signs and daily health metrics directly in your dashboard.</p>
            </div>
            <div className="cardsssss">
               <FaTasks className="card-iconssss" />
              <h3>Task Plan & management</h3>
              <p>Organize and track your health tasks effectively</p>
            </div>
            
          </div>
        </main>
      </div>
        <footer className="footerjjjj">
        <p>© 2025 HealSync | All Rights Reserved</p>
        <div className="social-iconskkkk">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </footer>
    </>
  )
}

export default Dashboard
