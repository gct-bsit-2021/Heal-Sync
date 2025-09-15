import React from "react";
import { useNotifications } from "./NotificationContext";
import Card from "react-bootstrap/Card";

export default function FeaturesPage() {
  const { notifications } = useNotifications();

  return (
     <div style={{ padding: "20px" }}>
      <h2 style={{color:"#AF3E3E",display:"flex",justifyContent:"center",fontWeight:"bold"}}>Today Appointments</h2>
      {notifications.length === 0 && <p style={{color:"#AF3E3E",display:"flex",justifyContent:"center",fontWeight:"bold"}}>No notifications yet.</p>}
      {notifications.map((n, index) => (
        <Card key={index} style={{ margin: "10px 0", padding: "10px" , color:"#AF3E3E",backgroundColor:"#EAEBD0"}}>
          <p>{n.message}</p>
          <small>
            Type: {n.type} | {new Date(n.createdAt).toLocaleString()}
          </small>
        </Card>
      ))}
    </div>
  );
}
