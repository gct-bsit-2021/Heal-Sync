import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import ResourceCenter from './/Components/Pages/Resourcecenter';
import Navbar from './Components/Frontend/Navbar';
import Footer from './Components/Frontend/Footer';
import Notification from  './Components/Pages/Notification';
import Button from 'react-bootstrap/esm/Button';
import Dashboard from './Components/Pages/Dashboard';
import Healthmontorning from './Components/Pages/Healthmontorning';
import Task from './Components/Pages/Task';
import TaskList from './Components/Pages/Progresss/Tasklist';
import Progress from './Components/Pages/Progress';
import TaaskList from './Components/Pages/Plan/TaaskList';

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
    ,
  },
   {
    path:"/login",
    element:<div>
      <Navbar/>
      <Login/>
    </div>,
  },
   {
    path:"/resourcecenter",
    element:<div>
      <Navbar/>
      <ResourceCenter/>
    </div>,
  },
  {
    path:"/footer",
    element:<div>
      <Navbar/>
      <Footer/>
    </div>,
  },
  {
    path:"/notification",
    element:<Notification/>,
  },
{
    path:"/button",
    element:<div>
      <Navbar/>
      <Button/>
    </div>,
  },
{
    path:"/dashbord",
    element: <Dashboard/>,
},
{
   path:"/healthmontorning",
    element: <Healthmontorning/>,
},
{
   path:"/task",
    element:<div>
      <Task/>
    </div>,
    children:[
      {
        path:"taasklist",
        element:<TaaskList/>,
      },
    ]
},
{
   path:"/progress",
    element:<div>
      <Progress/>
    </div>,
    children:[
      {
        path:"tasklist",
        element:<TaskList/>,
      },
    ]
},

   
  
])

const App = () => {
  
  return (
    <div>
      <RouterProvider router={router}/> 
      </div>

  
     
  )
}

export default App


