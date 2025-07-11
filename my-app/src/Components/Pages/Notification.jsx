import React from "react";
import { NotificationProvider } from "./Contex/NotificationContext";
import NotificationDisplay from "./Notifications/NotificationDisplay";
import Notificationnnss from "./Notificationnnss";
function App() {
  return (
    <NotificationProvider>
      <Notificationnnss/>
      <NotificationDisplay />
    </NotificationProvider>
  );
}

export default App;
