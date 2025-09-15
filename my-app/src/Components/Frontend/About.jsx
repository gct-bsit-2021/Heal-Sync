import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import medicalteam from '../../Assets/medicalteam.png';
import application from '../../Assets/application.png';
import './About.css'
const About = () => {
  return (
    <>
    <div>
         <Card className="card-outer" >
            <Card className="card-inner" >
                <div className="abouts">
                    <div>
                        <h4 className="ac" >How Do I Find a Caregiver with HealSync?</h4>
                        <Card className="av" >
                        <p>Choosing to hire a caregiver is an important step, and at HealSync, we make the process easier. Theres no one-size-fits-all in caregiving, which is why our platform helps match you with caregivers and home care services that meet your loved ones unique needs.When you're ready, HealSync connects you with trusted care providers in your area. Our in-app guidance and support team are here to assist you at no cost so you can confidently choose the right caregiver for your family.</p>
                        </Card>
                    </div>
                    <div>
                        <img className="ik"  src={medicalteam}/>
                    </div>

                </div>


                <div className="aboutt">
                    <div>
                        <img className="lk"  src={application}/>
                    </div>
                    <div >
                        <h4 className="lo" >How HealSync Can Help</h4>
                        <Card className="lp" >

                            <p>At HealSync, we understand the everyday challenges that families face while caring for a loved one. From managing appointments and transportation to handling medications, personal care, and household tasks caregivers are often overwhelmed. Thats where we step in.Our smart platform simplifies care coordination by helping you schedule services, track medications, access support resources, and stay connected with trusted caregivers all in one place. With the guidance of our care advisors and digital tools, HealSync empowers you to make informed decisions and find the right care for your loved one bringing peace of mind to your family.</p>
                        </Card>
                        
                       
                    </div>
                </div>
    </Card>
      
       
        
     
    </Card>
      </div>
    </>
  )
}

export default About
