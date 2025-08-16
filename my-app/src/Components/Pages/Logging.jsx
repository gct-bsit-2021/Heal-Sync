// src/Components/Logging.js
import React, { useState } from "react";
import Navbar from "../Frontend/Navbar";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/authService";

import "./Logging.css";

export default function Logging() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser("family", email.trim(), password);
      console.log(data);

      if (data.linkedPatients) {
        console.log("Linked Patients:", data.linkedPatients);
      }
      // new token and roles
       localStorage.setItem("token", data.token);
       localStorage.setItem("role", "family");
      alert("Family member logged in successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Family Member Login</h2>

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

          <button
            type="button"
            style={{
              background: "#EAEBD0",
              color: "brown",
              padding: "8px 16px",
              marginTop: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/link")}
          >
            Link Patient
          </button>

          <a
            className="aa"
            style={{ paddingLeft: "120px" }}
            href="/Sign"
          >
            Sign up
          </a>

          <div className="col" style={{ paddingLeft: "10px" }}>
            <a
              href="#"
              style={{ border: "1px solid #EAEBD0", color: "white" }}
              className="fb btn"
            >
              <FaFacebookF /> Login with Facebook
            </a>
            <br />
            <br />
            <a
              href="#"
              style={{ border: "1px solid #EAEBD0", color: "white" }}
              className="twitter btn"
            >
              <CiTwitter /> Login with Twitter
            </a>
            <br />
            <br />
            <a
              href="#"
              style={{ border: "1px solid #EAEBD0", color: "white" }}
              className="google btn"
            >
              <FaGoogle /> Login with Google
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
