import React from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const { loginWithRedirect,isAuthenticated ,logout,} = useAuth0();
  return (
    
    <>
    <div className="log">
      <Card className="box1" style={{ width: '15rem' ,height:'7rem', }}>
     
      <Card.Body>
        <Card.Title className='p'>Family Member</Card.Title>
        {isAuthenticated ?
         (<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}     >LogOut</Button>
           ):(
         <div>
         <Button   className='bw' variant="danger"  onClick={()  =>  loginWithRedirect() }> Log In</Button>
           </div>
            )
            }
      </Card.Body>
    </Card>

    <Card  className="box1" style={{ width: '15rem' ,  height: '7rem' }}>
     
      <Card.Body>
        <Card.Title className='f' > Patient</Card.Title>
       { isAuthenticated ?
         (<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}     >LogOut</Button>
           ):(
         <Button   className='bw' variant="danger"  onClick={()  =>  loginWithRedirect() }>Log In</Button>
            )
            }
      </Card.Body>
    </Card>


    </div>

  
     
    </>
  )
}

export default Login
