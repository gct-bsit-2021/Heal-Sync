import React from 'react'
import girl from '../../Assets/girl.jpg';
import facebook1 from '../../Assets/facebook1.png';
import twitter1 from '../../Assets/facebook1.png';
import microsoft1 from '../../Assets/facebook1.png';
import instagram1 from '../../Assets/instagram.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
     <div className="footer-container">
        <footer className="footer">


            <div className="footer-top">
                <div className="heal-logo">
                    <a className="logo-link" href="#">
                        <img className="logo-png"  src={girl} alt=''/>
                        Heal Sync
                    </a>
                </div>
                    <p className="filler-text">Help older adults stay home.</p>
                <div className="social">
                      
                         <a className="social-link" href="#">
                          <img   className="social-icon"  src={microsoft1}/>
                        </a>
                         <a className="social-link"href="#">
                          <img     className="social-icon"  src={instagram1}/>
                        </a>
                  </div>
            </div>
                  <div className="footer-grid">


                      <div className="footer-grid-column">
                        <div className="footer-grid-heading">
                          Resource
                        </div>
                        <ul className="footer-link-list">
                          <li>
                            <a  href="https://www.youtube.com/results?search_query=healsync+tutorial"
        target="_blank"
        rel="noopener noreferrer" className="footer-link">Vedios</a>
                          </li>
                          <li>
                            <a  href="https://www.youtube.com/results?search_query=healthcare+technology+blog"
        target="_blank"
        rel="noopener noreferrer" className="footer-link">Blog</a>
                          </li>
                          <li>
                            <a href="/dashbord" className="footer-link">Services</a>
                          </li>
                          <li>
                            <a href="/homecare" className="footer-link">About</a>
                          </li>
                        </ul>
                      </div>


                        <div className="footer-grid-column">
                        <div className="footer-grid-heading">
                          HealSync
                        </div>
                        <ul className="footer-link-list">
                          <li>
                            <a href="/" className="footer-link">Home Page</a>
                          </li>
                          <li>
                            <a href="login" className="footer-link">Login</a>
                          </li>
                          <li>
                            <a href="/notification" className="footer-link">Notification</a>
                          </li>
                          <li>
                            <a href="/resourcecenter" className="footer-link">Resource Center</a>
                          </li>
                          <li>
                            <a href="/sos" className="footer-link">SOS Button</a>
                          </li>
                        </ul>
                      </div>


                        <div className="footer-grid-column">
                        <div className="footer-grid-heading">
                          Support
                        </div>
                        <ul className="footer-link-list">
                          <li>
                            <a href="https://www.google.com/search?q=healSync+faq"
        target="_blank"
        rel="noopener noreferrer" className="footer-link">FAQ</a>
                          </li>
                          <li>
                            <a href="https://www.google.com/search?q=healSync+api+documentation"
        target="_blank"
        rel="noopener noreferrer" className="footer-link">Documentation</a>
                          </li>
                          <li>
                            <a href="https://www.google.com/search?q=health+care+articles"
        target="_blank"
        rel="noopener noreferrer" className="footer-link">Aritcal</a>
                          </li>
                          <li>
                            <a  href="https://www.google.com/search?q=caregiver+resources"
        target="_blank"
        rel="noopener noreferrer" className="footer-link">Resources</a>
                          </li>
                        </ul>
                      </div>


                        <div className="footer-grid-column">
                        <div className="footer-grid-heading">
                          Legal
                        </div>
                        <ul className="footer-link-list">
                          <li>
                            <a  href="https://www.google.com/search?q=HealSync+term+of+services"
      target="_blank"
      rel="noopener noreferrer"  className="footer-link">TermOfServices</a>
                          </li>
                          <li>
                            <a  href="https://www.google.com/search?q=HealSync+privacy+policy"
      target="_blank"
      rel="noopener noreferrer" className="footer-link">PrivacyPolicy</a>
                          </li>
                          <li>
                            <a href="https://www.google.com/search?q=HealSync+cookie+setting"
      target="_blank"
      rel="noopener noreferrer" className="footer-link">CookieSetting</a>
                          </li>
                          
                        </ul>
                      </div>
              
                  </div>
                
            
        </footer>
        <div className="footer-copyright">
          @2025-Present HealSync.All right reserved.
        </div>
      </div>
      
    </>
  )
}

export default Footer

