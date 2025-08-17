import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SosPage() {
  const [sosData, setSosData] = useState([]);

  useEffect(() => {
    const fetchSOS = async () => {
      try {
        const token = localStorage.getItem("token"); // your JWT
        const res = await axios.get("http://localhost:5000/api/sos", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSosData(res.data);
      } catch (err) {
        console.error("❌ Error fetching SOS:", err);
      }
    };
    fetchSOS();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 SOS Alerts</h2>
      {sosData.length === 0 ? (
        <p>No SOS alerts yet.</p>
      ) : (
        <ul>
          {sosData.map((sos, i) => (
            <li key={i}>
              <b>From:</b> {sos.patient?.name || "Unknown"} <br />
              <b>Message:</b> {sos.message} <br />
              <b>Location:</b> {sos.location?.latitude}, {sos.location?.longitude}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
