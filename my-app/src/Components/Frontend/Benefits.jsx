import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Benefits.css';
import benefits from '../../Assets/benefits.png';
import benefitss from '../../Assets/benefitss.png';
import socialresponsibility from '../../Assets/socialresponsibility.png';
const Benefits = () => {
  return (
    <>
   <div className="benefits">
    <Card className="bn" >
      <Card.Body>
        <div className="benefitfirst">
        <div className="bm" >
        <h4 className="bv" >Benefits of in-home care</h4>
        <Button href="/homecare"  className="benefitbtn"  variant="primary">Learn More About In Home Care</Button>
        </div>
        <div className="benefitspic" >
              <img className="bx"  src={benefits }/>
            <img className="bh"  src={benefitss}/>
            <img className="be"  src={socialresponsibility}/>
        </div>
        <div  className="benefitsf" >
            <h4 className="bne" >Quality help at home</h4>
            <p className="bpp">HealSync ensures quality help at home with timely care reminders, health monitoring, and instant support for patients and families.</p>
            <h4 className="bne" >Respite for family caregivers</h4>
            <p className="bpp">HealSync gives family caregivers relief by keeping them informed and supported with real-time updates and alerts.</p>
            <h4 className="bne"  >Peace of mind</h4>
            <p className="bpp" >HealSync provides peace of mind through real-time health updates, reminders, and emergency alerts keeping care connected and stress reduced.</p>
        </div>
        </div>
         </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Benefits
