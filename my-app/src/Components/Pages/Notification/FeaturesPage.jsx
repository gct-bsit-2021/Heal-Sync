// src/components/Pages/Notification/FeaturesPage.jsx
import React from "react";
import { useNotifications } from "./NotificationContext";
import Card from "react-bootstrap/Card";

export default function FeaturesPage() {
  const { notifications } = useNotifications();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Today’s Appointments</h2>
      {notifications.length === 0 && <p>No notifications yet.</p>}
      {notifications.map((n, index) => (
        <Card key={index} style={{ margin: "10px 0", padding: "10px" }}>
          <p>{n.message}</p>
          <small>
            Type: {n.type} | {new Date(n.createdAt).toLocaleString()}
          </small>
        </Card>
      ))}
    </div>
  );
}
