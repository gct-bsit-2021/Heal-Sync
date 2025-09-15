import React from 'react'
import Navbar from '../Frontend/Navbar.jsx'; 
import Card from 'react-bootstrap/Card';
import './Homecare.css'
const Homecare = () => {
  return (
    <> <Navbar/>
<div className="about-header">
        <h2 className="about-title">Learn More About In Home Care</h2>
        <p className="about-description">
          In-home care allows your loved one to receive personalized support in
          the comfort of their own home. From daily assistance with meals,
          mobility, and personal care to skilled medical services, HealSync
          connects you with trusted caregivers who prioritize safety, dignity,
          and quality of life.
        </p>
      </div>

      <div className="about-cards">
        <Card className="main-card">
          <Card className="inner-card">
            <div className="abouts">
              <div>
                <h4 className="section-title">Types of In-Home Care</h4>
                <Card className="text-card">
                  <p>
                    At HealSync, we connect patients and families with the right
                    type of support whether it’s help with daily living, health
                    monitoring, or specialized medical assistance.
                  </p>

                  <h4 className="section-title">Family Support</h4>
                  <p>
                    Family members often take on the role of providing daily care
                    helping with meals, mobility, hygiene, and emotional
                    well-being. Even without formal training, they are the first
                    line of comfort for loved ones.
                  </p>

                  <h4 className="section-title">
                    Community & Volunteer Support
                  </h4>
                  <p>
                    Volunteers from community programs or nonprofit organizations
                    offer companionship, transportation, and occasional respite
                    for family members helping reduce stress and improve quality
                    of life.
                  </p>

                  <h4 className="section-title">Private In-Home Assistance</h4>
                  <p>
                    Privately hired professionals provide personalized, one-on-one
                    support. They may help with daily living, light housekeeping,
                    or companionship, and can often be more flexible with
                    scheduling.
                  </p>

                  <h4 className="section-title">
                    Professional In-Home Services
                  </h4>
                  <p>
                    Licensed home health agencies offer trained personnel who can
                    provide everything from daily living assistance to skilled
                    nursing care—ensuring safety, compliance, and reliable
                    service.
                  </p>

                  <h4 className="section-title">
                    What is a Professional In-Home Support Provider?
                  </h4>
                  <p>
                    A professional in-home support provider is someone trained to
                    assist individuals who need help with daily living or health
                    management. Their goal is to improve quality of life, ensure
                    safety, and promote independence for the person receiving
                    care
                  </p>
                  <p>
                    A professional in-home support provider is someone trained to
                    assist individuals who need help with daily living or health
                    management. Their goal is to improve quality of life, ensure
                    safety, and promote independence for the person receiving
                    care
                  </p>
                </Card>
              </div>
            </div>
          </Card>
        </Card>
      </div>
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

export default Homecare
