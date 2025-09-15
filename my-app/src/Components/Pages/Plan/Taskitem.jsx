import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const isCompleted = task.status === 'completed'; //  use status

  return (
     <div className="animated-card" style={{
      border: '1px solid #EAEBD0',
      padding: 10,
      marginBottom: 10,
      width: '50%',
      paddingLeft: '50px',
      marginLeft: '190px',
      borderRadius: '6px',
      backgroundColor:"#EAEBD0",
      justifyContent:'center',
      color:"#AF3E3E",
    }}>
      <h3 style={{color:" #AF3E3E",fontWeight:"bold",marginLeft:"90px"}} >{task.title}</h3>
      <p style={{color:" #AF3E3E",marginLeft:"110px"}}>Deadline: {task.dueDate}</p>
      <p  style={{color:" #AF3E3E",marginLeft:"110px"}}>Priority: {task.priority}</p>
      <p  style={{color:"#AF3E3E",marginLeft:"110px"}}>Status: {isCompleted ? 'Completed' : 'Pending'}</p>

      {!isCompleted && (
        <button style={{marginLeft:"70px",marginBottom:"15px"}} className="button-33" onClick={() => onComplete(task._id)}> Complete</button>
      )}
      <button className="button-33" onClick={() => onDelete(task._id)} style={{ marginLeft: 8 }}>Delete</button>
    </div>
  );
};

export default TaskItem;