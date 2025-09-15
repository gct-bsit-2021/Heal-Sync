import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Progress Report", buttonText: "View More", path: "/progress" },
    { title: "Health Monitoring", buttonText: "View More", path: "/healthmontorning" },
    { title: "Live Location", buttonText: "View More", path: "/location" },
    { title: "Task Management", buttonText: "View More", path: "/task" },
    { title: "Mood Behaviour", buttonText: "View More", path: "/mood" },
    { title: "Appointment", buttonText: "View More", path: "/calender" },
  ];
  return (
    <div className="services-section">
      <h2 className="main-heading">Heal Sync Features</h2>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="flip-scene" key={index}>
            <div className="flip-card">
              <div className="flip-face flip-front">
                <h2>{card.title}</h2>
              </div>
              <div className="flip-face flip-back">
                <button onClick={() => navigate(card.path)}>
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
