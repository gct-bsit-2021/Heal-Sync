import React from "react";
import axios from "axios";

const SOSButton = () => {
  const handleSOSClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          try {
            await axios.post(
              "http://localhost:5000/api/location", 
              { lat, lng },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              }
            );
            alert("Location sent successfully!");
          } catch (error) {
            console.error(error);
            alert("Error sending location");
          }
        },
        (error) => {
          console.error(error);
          alert(" Unable to get your location. Please allow location access.");
        }
      );
    } else {
      alert(" Geolocation is not supported by this browser.");
    }
  };

  return (
    <button
      onClick={handleSOSClick}
      style={{
        backgroundColor: "brown",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer"
      }}
    >
       SOS
    </button>
  );
};

export default SOSButton;

