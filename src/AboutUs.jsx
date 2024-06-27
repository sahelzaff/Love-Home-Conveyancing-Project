import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutHome from './Components/AboutHome/AboutHome'
import AboutMain from './AboutMain/AboutMain'
import WhySection from './Components/WhySection/WhySection'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <AboutHome/>
        <AboutMain/>
        <WhySection/>
        <Footer/>
    </div>
  )
}

export default AboutUs