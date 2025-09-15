import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import technology from '../../Assets/technology.png';
import rpa from '../../Assets/rpa.png';
import computer from '../../Assets/computer.png';
import './Working.css';
const Working = () => {
  return (
    <>
      <div className="work">
        <Card  className="cea" >
     
      <Card.Body>
       <div className="workss" >
        <h4 className="hj">HealSync simplifies support for patients and their families</h4>
        <p className="pa" >How it works</p>
       </div>
       <div className="worksimg" >
        <img className="iyu" src={computer} alt=''/>
        <img  className="iop"  src={rpa} alt=''/>
        <img  className="ikl" src={technology} alt=''/>
       </div>
       <div className="worksss">
       <div>
        <h5 className="jk">Determine your needs</h5>
       
       </div>
       <div>
        <h5 className="hy" >Personalize your plan</h5>
      
       </div>
       <div>
        <h5 className="hg">Select your support provider</h5>
       
       </div>
       </div>
       <div className="workpara" >
          <Card className="cvb" >
     <Card.Text className="txd" >
         HealSync helps you identify when and where support is needed.
        </Card.Text>
    </Card>
      <Card className="bnm" >
        <Card.Text>
          Choose the right in-home services to ensure the care you deserve.
        </Card.Text>
    </Card>
      <Card className="bhj" >
      
      <Card.Text>
         Select trusted care providers that fit your needs with HealSync
        </Card.Text>
    </Card>
       </div>
      
        <Button  href="/heal" className="workbtn"  >Heal Sync</Button>
      </Card.Body>
    </Card>
      </div>
    </>
  )
}

export default Working
