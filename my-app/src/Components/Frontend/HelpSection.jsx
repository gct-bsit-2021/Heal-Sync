import React from "react";
import "./HelpSection.css";
import im from '../../Assets/im.jpg'
import immm from '../../Assets/immm.jpg'

const HelpSection = () => {
  return (
    <section className="help-section">
      {/* Left Side - Images */}
      <div className="help-images">
        <img
          src={im}
          alt="Small"
          className="help-small-img"
        />
        <img
          src={immm}
          alt="Large"
          className="help-large-img"
        />
      </div>

      {/* Right Side - Content */}
      <div className="help-content">
        <h2 className="help-heading">How HealSync Helps You</h2>
        <div className="help-underline"></div>

        <ul className="help-points">
          <li>Get reminders for your upcoming appointments.</li>
          <li> Receive timely medication alerts to stay healthy.</li>
          <li> Use SOS alerts to notify family in emergencies.</li>
          <li> Access trusted health resources anytime.</li>
        </ul>
      </div>
    </section>
  );
};

export default HelpSection;
