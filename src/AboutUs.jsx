import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      // behavior: 'smooth'
    });
  }, []);
  return (
    <div>
       <Helmet>
        <title>About Us | Love Home Conveyancing</title>
        <meta name="description" content="Learn more about Love Home Conveyancing, our mission, values, and the team dedicated to providing exceptional property conveyancing services in Australia." />
        <meta name="keywords" content="About Love Home Conveyancing, conveyancing team, property conveyancing Australia" />
      </Helmet>
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