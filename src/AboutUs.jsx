import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutHome from './Components/AboutHome/AboutHome'
import AboutMain from './AboutMain/AboutMain'
import WhySection from './Components/WhySection/WhySection'
import TopBar from './Components/TopBar/TopBar'
import './Responsive.css'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
      <TopBar/>
        <Navbar/>
        <AboutHome/>
        <AboutMain/>
        <div id='why_about_padding'>
        <WhySection/>
        </div >
        <Footer/>
    </div>
  )
}

export default AboutUs