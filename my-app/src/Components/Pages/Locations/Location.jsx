// src/Components/Pages/Locations/Location.jsx
import React from "react";
import LocationSender from "./LocationSender";
import LocationViewer from "./LocationViewer";

export default function Location() {
  const role = localStorage.getItem("role"); // ✅ read role from localStorage

  console.log("Role detected in Location:", role);

  if (role === "patient") {
    return <LocationSender />;
  }

  if (role === "family") {
    return <LocationViewer />;
  }

  return <p>Invalid role</p>;
}

