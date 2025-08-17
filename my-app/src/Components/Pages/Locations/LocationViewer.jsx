// src/Components/Pages/Locations/LocationViewer.jsx
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const SOCKET_URL = "http://localhost:5000";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationViewer = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found in localStorage");
      return;
    }

    // 1️⃣ Fetch last known location first
    fetch("http://localhost:5000/api/location/view", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.location) {
          setLocation({
            latitude: data.location.latitude,
            longitude: data.location.longitude,
          });
        }
      })
      .catch((err) =>
        console.error("Error fetching initial location:", err)
      );

    // 2️⃣ Setup socket listener for live updates
    const socket = io(SOCKET_URL, { auth: { token } });

    socket.on("locationUpdated", ({ latitude, longitude }) => {
      console.log("📍 Patient location received:", latitude, longitude);
      setLocation({ latitude, longitude });
    });

    return () => socket.disconnect();
  }, []);

  if (!location) return <p>⏳ Waiting for patient location...</p>;

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker
          position={[location.latitude, location.longitude]}
          icon={markerIcon}
        >
          <Popup>🚶 Patient's Live Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationViewer;
