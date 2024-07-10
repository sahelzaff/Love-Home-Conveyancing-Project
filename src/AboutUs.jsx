import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutHome from './Components/AboutHome/AboutHome'
import AboutMain from './AboutMain/AboutMain'
import WhySection from './Components/WhySection/WhySection'
import TopBar from './Components/TopBar/TopBar'
import './Responsive.css'

const AboutUs = () => {
   
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

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

        {showScrollTopButton && (
        <button 
          onClick={scrollToTop}
          className='scroll-top-button'
        >
       <svg fill="#ffffff" height="44px" width="44px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-204.6 -204.6 739.20 739.20" xmlSpace="preserve" stroke="#ffffff" strokeWidth="7.26">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> 
            </g>
          </svg>
        </button>
      )}
    </div>
  )
}

export default AboutUs