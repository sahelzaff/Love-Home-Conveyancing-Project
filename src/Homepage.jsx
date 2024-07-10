import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Helmet } from 'react-helmet';
// import Section2 from './Components/Section2/Section2'
import BenefitsComponent from './Components/BenefitsComponent/BenefitsComponent'
// import { assets } from './assets/assets'
import CustomerReviews from './Components/CustomerReviews/CustomerReviews'
import Footer from './Components/Footer/Footer'
import WorkSection from './Components/WorkSection/WorkSection'
import TextReveal from './Components/TextReveal/TextReveal'
// import Cards from './Components/Cards/Cards'
import WhySection from './Components/WhySection/WhySection'
import ServiceHome from './Components/ServiceHome/ServiceHome'
import Faq from './Components/Faq/Faq'
import Hero2 from './Components/Hero2/Hero2'
import Section3New from './Components/Section3New/Section3New'
import SliderClients from './Components/SliderClients/SliderClients'
import Why2 from './Components/Why2/Why2'
import Video from './Components/video/video'
import Cards from './Components/Cards/Cards'
import './Homepage.css'
import TheProcess from './Components/TheProcess/TheProcess'
import TopBar from './Components/TopBar/TopBar'
import React, { useEffect, useRef, useState } from 'react';


const Homepage = () => {
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
        <div className='overflow-x-hidden'>
            <Helmet>
                <title>Love Home Conveyancing | Property Conveyancing in Australia</title>
                <meta name="description" content="Welcome to Love Home Conveyancing. We provide professional and efficient property conveyancing services across Australia. Our experienced team ensures a smooth property transfer process." />
                <meta name="keywords" content="Love Home Conveyancing, property conveyancing, conveyancing services Australia, home conveyancing, real estate conveyancing" />
                <meta name="author" content="Love Home Conveyancing" />
            </Helmet>
            <TopBar />
            <Navbar className=" w-full z-50" />
            <div className='bg-[#0d0d0d]'>
                <Hero2 />
            </div>
            <div className='Homepage'>
                {/* <Cards/> */}
                {/* <div className="pl-14">
                    <Section2 />
                </div> */}
                <div className='flex flex-col items-center justify-center'>
                    <BenefitsComponent />
                </div>
            </div>
            <div className='Homepage1'>
                <Hero />
            </div>
            <div className='Homepage'>
                <SliderClients />
            </div>


            {/* <Cards/> */}
            {/* <Section3New/> */}
            {/* <TextReveal text="Experience seamless property transactions with peace of mind, every step of the way."
                highlight="peace of mind"
                highlightClass="text-[#f0532d] font-bold font-outfit"
                className="" /> */}
            <div className='relative z-10'>

                <Video />
            </div>
            <div className='Homepage1'>
                <CustomerReviews />
            </div>
            <div className='Homepage'>
                {/* <WorkSection /> */}
                <TheProcess />
            </div>
            <Why2 />
            <div className='Homepage'>
            </div>
            <WhySection />
            <div className="Homepage">

            </div>
            <div className="Homepage">
                {/* <ServiceHome /> */}
                <Faq />

            </div>
            <Footer />

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

export default Homepage
