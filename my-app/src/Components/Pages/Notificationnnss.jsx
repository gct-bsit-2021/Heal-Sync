import React from 'react'
import { useNotification } from '../Pages/Contex/NotificationContext';
import './Notificationnn.css'
const Notificationnnss = () => {

  const { addNotification } = useNotification();

  return (
    <>
    <div className="p-4" >

      <h1 className="text-xl font-bold mb-4">HealSync Dashboard</h1>
      <button style={{
        color:" #EAEBD0;",padding:"20px",fontSize:"15px" ,marginRight:"20px"
      }}  
        className="bg-green-600 text-white px-4 py-2 rounded mr-2"
        onClick={() => addNotification("appointment", "You have an appointment at 4:00 PM.")}
      >
        Trigger Appointment Alert
      </button>
      <button  style={{
        color:" #EAEBD0;",padding:"20px",fontSize:"15px" ,marginRight:"20px"
      }}  
        className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
        onClick={() => addNotification("medication", "Time to take your medicine."   )}
      >
        Trigger Medication Alert
      </button>
      <button  style={{
        color:" #EAEBD0;",padding:"20px",fontSize:"15px" ,marginRight:"20px"
      }}  
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => addNotification("emergency", "Emergency! SOS signal sent.")}
      >
        Trigger SOS Alert
      </button>
      </div>


    </>
  )
}

export default Notificationnnss
