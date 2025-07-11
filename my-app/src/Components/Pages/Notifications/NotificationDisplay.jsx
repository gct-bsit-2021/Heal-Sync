import React from "react";
import { useNotification } from '../Contex/NotificationContext';
import './NotificationDisplay.css';

const NotificationDisplay = () => {
  const { notifications } = useNotification();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((note) => (
        <div
          key={note.id}
          className={`p-4 rounded shadow-md text-white ${
            note.type === "emergency" ? "bg-red-600" :
            note.type === "medication" ? "bg-blue-500" :
            "bg-green-500"
          }`}
        >
          {note.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationDisplay;
