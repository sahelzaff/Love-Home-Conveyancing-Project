import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './Homepage.css'
import './Responsive.css';
import { assets } from './assets/assets'
import TopBar from './Components/TopBar/TopBar';

const Disclaimer = () => {

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
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
      <TopBar/>
      <Navbar />
      <section className=''>
        <div className='flex flex-col h-auto items-start content py-28' id='main_privacy'>
          <h1 className='font-outfit text-6xl font-bold mx-auto relative z-20 ' id='privacy_heading'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Discl<span className='text-[#f0532d]'>aimer</span></h1>
          <div className='w-2/12 bg-[#f0532d] h-[0.3rem] rounded mx-auto mb-10'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
          {/* <h2 className='font-outfit text-[23px] font-bold mx-auto mt-10 mb-10'>PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE.</h2> */}
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following disclaimer, together with our terms and conditions of use.</p>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">The information contained in this website is for general information purposes only and is provided by lovehomeconveyancing.com.au. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. You need to make your own enquiries to determine if the information or products are appropriate for your intended use.</p>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
          
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Through this website you may be able to link to other websites which are not under the control of lovehomeconveyancing.com.au. We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
          
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Every effort is made to keep the website up and running smoothly. However, lovehomeconveyancing.com.au takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">COPYRIGHT NOTICE</h2>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">This website and its contents are the copyright of Borrower First Pty Ltd – © 2024. All rights reserved.</p>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following. You may print or download contents to a local hard disk for your personal and non-commercial use only. You may copy some extracts only to individual third parties for their personal use, but only if you acknowledge the website as the source of the material.</p>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">You may not, except with our express written permission, distribute or commercially exploit the content. You may not transmit it or store it on any other website or other form of electronic retrieval system.</p>

          
        </div>

      </section>
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

export default Disclaimer