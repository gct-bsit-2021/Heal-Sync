import React, { useState } from 'react';
import { loginUser } from "../../utils/authService";

import Navbar from '../Frontend/Navbar';
import './Logging.css';
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoggingPatient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the backend using authService
      const response = await loginUser("patient", email, password);

      // Store token & user role in localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("role", "patient");
      
      alert("✅ Login successful!");
      navigate("/"); // redirect after login
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "❌ Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Patient Login</h2>

          <label style={{ color: "#EAEBD0" }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{ color: "#EAEBD0" }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <a className='aa' style={{ paddingLeft: "120px" }} href="/Sign">Sign up</a>

          <div className="col" style={{ paddingLeft: "10px" }}>
            <a href="#" style={{ border: "1px solid #EAEBD0", color: "white" }} className="fb btn">
              <FaFacebookF /> Login with Facebook
            </a>
            <br /><br />
            <a href="#" style={{ border: "1px solid #EAEBD0", color: "white" }} className="twitter btn">
              <CiTwitter /> Login with Twitter
            </a>
            <br /><br />
            <a href="#" style={{ border: "1px solid #EAEBD0", color: "white" }} className="google btn">
              <FaGoogle /> Login with Google
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoggingPatient;
