import React from 'react';
import doctor1 from '../../Assets/doctor1.png';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import './Herosection.css';

const Herosection = () => {
  return (
    <div className="container">
      {/* Left Side - Text */}
      <motion.div 
        className="section-hero-data"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 
          className="hero-heading"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Future of Connected Healthcare
        </motion.h2>

        <motion.p 
          className="hero-para"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          HealSync is a user-friendly web app that helps patients and family member stay connected.
          It allows appointment booking, health record storage, and real-time updates in a secure 
          and easy-to-use interface.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="/dashbord" variant="outline-danger">
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div 
        className="section-hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <img src={doctor1} alt="doctor"/>
      </motion.div>
    </div>
  );
};

export default Herosection;
