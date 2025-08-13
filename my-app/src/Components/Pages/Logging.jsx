import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Frontend/Navbar';
import './Logging.css';

const Logging = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/patients/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save JWT token
        localStorage.setItem("token", data.token);

        // Save email from user object (backend sends data.user.email)
        if (data.user && data.user.email) {
          localStorage.setItem("email", data.user.email);
        } else {
          console.error("Email not found in response:", data);
        }

        // Redirect to home or dashboard
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>

          <label style={{color:"#EAEBD0"}}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{color:"#EAEBD0"}}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
          <a className='aa' style={{paddingLeft:"120px"}} href="/Sign">Sign up</a>
        </form>
      </div>
    </>
  );
};

export default Logging;
