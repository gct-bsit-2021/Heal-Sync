import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Make sure user is logged in
    if (!token) return;

    // Fetch existing notifications safely
    fetch("http://localhost:5000/api/notifications/calendar", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setNotifications(data);

          data.forEach(n => {
            if (n?.message) {
              toast(n.message, { position: "top-right", autoClose: 20000 });
            }
          });
        }
      })
      .catch(err => console.error("Fetch error:", err));

    //  Setup socket connection for real-time notifications
    const socket = io("http://localhost:5000", { auth: { token } });

    socket.on("notification", data => {
      if (data?.message) {
        setNotifications(prev => [data, ...prev]);
        toast(data.message, { position: "top-right", autoClose: 20000 });
      }
    });

    return () => socket.disconnect();
  }, []);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
