import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Frontend/Footer'


const Login = () => {
  
  return (
    
    <>
    <div className="log">
      <Card className="box1" style={{ width: '15rem' ,height:'7rem', }}>
     
      <Card.Body>
        <Card.Title className='p'>Family Member</Card.Title>
       
      
         <Button  href="/logging"   className='bw' variant="danger"  > Log In</Button>
      
           
      </Card.Body>
    </Card>

    <Card  className="box1" style={{ width: '15rem' ,  height: '7rem' }}>
     
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
      <br/>
     <Footer/>
    </>
  )
}

export default Login