import React from 'react'
import images1 from '../../Assets/images1.jpeg';
import images from '../../Assets/images.jpeg'
import { CiHeart } from "react-icons/ci";
import { CiWheat } from "react-icons/ci";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiHealing } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import './Choosen.css';
const Choosen = () => {
  return (
    <>
       <div className="why-container">
      <div className="content">
        {/* Left Text */}
        <div className="text-section">
          <h4>WHY CHOOSE US</h4>
          <h2>Trusted Care, Lasting Wellness</h2>
          <ul>
            <li> <CiHeart className="choosenicon" /> Expert Healthcare Professionals</li>
            <li> <GiHealing className="choosenicon" /> Patient & Family-Centered Care</li>
            <li> <CiWheat className="choosenicon" />  Secure and Confidential Digital Platform</li>
            <li><RiMentalHealthLine className="choosenicon" /> Commitment to Healing and Wellbeing</li>
          </ul>
          <p>
           Choosing HealSync means choosing a trusted partner for your health and wellness journey. We combine medical expertise, compassionate care, personalized support, and a safe digital space to help you thrive.”
          </p>
          <Button href="/resourcecenter" className="contact-btn"  variant="primary"  >Reources</Button>
        </div>

        {/* Right Image */}
        <div className="right-img">
          <img src={images1} alt="Side" />
          <br/>
          <img src={images} alt="Side" />
        </div>
      </div>

    </div>
    </>
  )
}

export default Choosen
