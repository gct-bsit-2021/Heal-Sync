import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";

// Pages
import Signup from './Components/Pages/Signup';  
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Navbar from './Components/Frontend/Navbar';
import Footer from './Components/Frontend/Footer';
import Button from 'react-bootstrap/esm/Button';
import Dashboard from './Components/Pages/Dashboard';
import Task from './Components/Pages/Task';
import TaskList from './Components/Pages/Progresss/Tasklist';
import Progress from './Components/Pages/Progress';
import TaaskList from './Components/Pages/Plan/TaaskList';
import Mood from './Components/Pages/Mood';
import Healthmontorning from './Components/Pages/Healthmontorning';
import Appointment from './Components/Pages/Appointment';
import Sosbutton from './Components/Pages/Sosbutton';
import Work from './Components/Pages/Work';
import Heal from './Components/Pages/Heal';
import Homecare from './Components/Pages/Homecare';
import Logging from './Components/Pages/Logging';
import NotificationAlert from './Components/Pages/NotificationAlert';
import LinkPatientpage from './Components/Pages/LinkPatientPage';
import LoggingPatient from './Components/Pages/LoggingPatient';
import Resource from './Components/Pages/Resource'; 
//import SosPage from './Components/Pages/SosPage';

// ✅ Corrected path for Location
import Location from './Components/Pages/Locations/Location';  

import ErrorBoundary from "./Components/ErrorBoundary";
import RouteError from "./Components/RouteError";

// Context
//import { NotificationsProvider } from './Components/Pages/Notification/NotificationContext';

const router = createBrowserRouter([
  { path: "/", element: <><Navbar/><Home/></> },
  { path: "/login", element: <><Navbar/><Login/></> },
  { path: "/footer", element: <><Navbar/><Footer/></> },
  { path: "/heal", element: <Heal/> },
  { path:"/resourcecenter", element:<Resource/> },

  {
    path: "/location",
    element: (
      <ErrorBoundary>
        <div>
          <Navbar />
          <Location role="patient" /> {/* can be dynamic later */}
        </div>
      </ErrorBoundary>
    ),
    errorElement: <RouteError />,
  },

  // 🚀 Role-based routes
  {
    path: "/location-patient",
    element: (
      <ErrorBoundary>
        <div>
          <Navbar />
          <Location role="patient" />
        </div>
      </ErrorBoundary>
    ),
    errorElement: <RouteError />,
  },
  {
    path: "/location-family",
    element: (
      <ErrorBoundary>
        <div>
          <Navbar />
          <Location role="family" />
        </div>
      </ErrorBoundary>
    ),
    errorElement: <RouteError />,
  },

  { path: "/loggingpatient", element: <><Navbar/><LoggingPatient/></> },
  { path: "/link", element: <><Navbar/><LinkPatientpage/></> },
  { path: "/logging", element: <Logging/> },
  { path: "/notification", element: <NotificationAlert/> },
  { path: "/homecare", element: <Homecare/> },
  { path: "/sos", element: <><Navbar/><Sosbutton/></> },   //  patient side (press button)
  //{ path: "/sos-alerts", element: <><Navbar/><SosPage/></> },
  { path: "/button", element: <><Navbar/><Button/></> },
  { path: "/dashbord", element: <Dashboard/> },
  { path: "/task", element: <Task/>, children: [{ path: "taasklist", element: <TaaskList/> }] },
  { path: "/progress", element: <Progress/>, children: [{ path: "tasklist", element: <TaskList/> }] },
  { path: "/mood", element: <Mood/> },
  { path: "/healthmontorning", element: <Healthmontorning/> },
  { path: "/calender", element: <Appointment/> },
  { path: "/work", element: <Work/> },
  { path: "/sign", element: <><Navbar/><Signup/></> },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* Toastify container should be here */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};
export default App;
