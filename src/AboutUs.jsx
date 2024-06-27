import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutHome from './Components/AboutHome/AboutHome'
import AboutMain from './AboutMain/AboutMain'
import WhySection from './Components/WhySection/WhySection'
import TopBar from './Components/TopBar/TopBar'

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
        <WhySection/>
        <Footer/>
    </div>
  )
}

export default AboutUs