import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const SOCKET_URL = "http://localhost:5000";

// custom marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationSender = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const socket = io(SOCKET_URL, { auth: { token } });

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // update UI
        setLocation({ latitude, longitude });

        // send to backend
        socket.emit("sendLocation", { latitude, longitude });
        console.log("📡 Sent location:", latitude, longitude);
      },
      (error) => {
        console.error("Geolocation error:", error);
      },
      { enableHighAccuracy: true }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
      socket.disconnect();
    };
  }, []);

  if (!location) return <p> Getting your location...</p>;

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
        <Marker position={[location.latitude, location.longitude]} icon={markerIcon}>
          <Popup> You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationSender;
