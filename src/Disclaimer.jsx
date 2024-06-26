import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './Homepage.css'
import { assets } from './assets/assets'

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
      <Navbar />
      <section className=''>
        <div className='flex flex-col h-auto items-start content py-28'>
          <h1 className='font-outfit text-6xl font-bold mx-auto relative z-20 '>Discl<span className='text-[#f0532d]'>aimer</span></h1>
          <div className='w-2/12 bg-[#f0532d] h-[0.3rem] rounded mx-auto mb-10'></div>
          {/* <h2 className='font-outfit text-[23px] font-bold mx-auto mt-10 mb-10'>PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE.</h2> */}
          <p className='font-poppins text-[16px] font-medium mb-7'>Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following disclaimer, together with our terms and conditions of use.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>The information contained in this website is for general information purposes only and is provided by lovehomeconveyancing.com.au. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. You need to make your own enquiries to determine if the information or products are appropriate for your intended use.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
          
          <p className='font-poppins text-[16px] font-medium mb-7'>Through this website you may be able to link to other websites which are not under the control of lovehomeconveyancing.com.au. We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
          
          <p className='font-poppins text-[16px] font-medium mb-7'>Every effort is made to keep the website up and running smoothly. However, lovehomeconveyancing.com.au takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>COPYRIGHT NOTICE</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>This website and its contents are the copyright of Borrower First Pty Ltd – © 2024. All rights reserved.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following. You may print or download contents to a local hard disk for your personal and non-commercial use only. You may copy some extracts only to individual third parties for their personal use, but only if you acknowledge the website as the source of the material.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>You may not, except with our express written permission, distribute or commercially exploit the content. You may not transmit it or store it on any other website or other form of electronic retrieval system.</p>

          
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default Disclaimer