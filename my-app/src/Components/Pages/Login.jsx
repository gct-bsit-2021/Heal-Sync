import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Login = () => {
  
  return (
    
    <>
    <div className="log">
      <Card className="box1">
     
      <Card.Body>
        <Card.Title className='p'>Family Member</Card.Title>
       
      
         <Button href="/logging"   className='bw' variant="danger"  
  onClick={() => localStorage.setItem("isLoggedIn", "true")} 
>
  Log In
</Button>

      
           
      </Card.Body>
    </Card>

    <Card  className="box1">
     
      <Card.Body>
        <Card.Title className='f' > Patient</Card.Title>
 
         <Button   href="/loggingpatient" className='bw' variant="danger" >Log In</Button>
            
      </Card.Body>
    </Card>


    </div>
<br/>
<br/>
<br/>
<br/>
    <div className="bottom">
       <h2 className="bottomh">Heal Sync</h2>
    
      <a href="/" className="bottoma1" >Home</a>
      <a href="/benefits" className="bottoma2">About</a>
      <a href="/advantage" className="bottoma3">Advantages</a>
      <a href="/login" className="bottom4">Login</a>
   
      
    </div>
    <div className="bar">
    <p>© Created by</p>
    <p>All rights Reserved</p>
   </div> 

  
    </>
  )
}

export default Login