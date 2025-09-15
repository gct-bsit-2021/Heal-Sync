import React, { useState } from 'react';
import axios from 'axios';
import './Logging.css';
import Navbar from '../Frontend/Navbar';
import { useNavigate } from 'react-router-dom';

const LogPage = () => {
  const [form, setForm] = useState({ email: '', password: '', role: 'patient' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill all fields.');
      return;
    }

    try {
      const url =
        form.role === 'family'
          ? 'http://localhost:5000/api/family/login'
          : 'http://localhost:5000/api/patient/login';

      const res = await axios.post(url, {
        email: form.email.trim(),
        password: form.password,
      });

      // Save token & role
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', form.role);

      setError('');
      alert(`Welcome ${form.role}!`);
      
      // Redirect based on role
      if (form.role === 'family') navigate('/resource/link-patient');
      else navigate('/home'); // change this to your patient route

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2> HealSync Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label>Role</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="patient">Patient</option>
              <option value="family">Family Member</option>
            </select>

            {error && <p className="error-msg">{error}</p>}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogPage;
