import React from 'react'
import Footer from '../Frontend/Footer';
import Herosection from '../Frontend/Herosection';
import Benefits from '../Frontend/Benefits';
import Advantages from '../Frontend/Advantages';
import Working from '../Frontend/Working';
import About from '../Frontend/About';
import Choosen from '../Frontend/Choosen';
import Box from '../Frontend/Box';
import HelpSection from '../Frontend/HelpSection';
const Home = () => {
  return (
    <>
    <Herosection/>
   <Choosen/>
   <Box/>
   <HelpSection/>
    <Working/>
    <Benefits/>
     <About/>
    <Advantages/>
     <Footer/>
     
    </>
  )
}

export default Home
