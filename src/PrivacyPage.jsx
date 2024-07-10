import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './Homepage.css'
import './Responsive.css';
import { assets } from './assets/assets'
import TopBar from './Components/TopBar/TopBar';

const PrivacyPage = () => {
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
          <h1 className='font-outfit text-6xl font-bold mx-auto relative z-20' id='privacy_heading'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Privacy <span className='text-[#f0532d]'>Policy</span></h1>
          <div className='w-3/12 bg-[#f0532d] h-[0.3rem] rounded mx-auto'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
          <h2 className='font-outfit text-[23px] font-bold mx-auto mt-10 mb-10' id='privacy_subline'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE.</h2>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy and website disclaimer, govern lovehomeconveyancing.com.au’s relationship with you in relation to your use of this website.</p>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'   data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">By using this website, you signify your acceptance of these terms and conditions of use. For the purposes of these terms and conditions, “Us”, “Our” and “We” refers to lovehomeconveyancing.com.au and “You” and “Your” refers to you, the client, visitor, website user or person using our website.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Information Collection And Use</h2>
          <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:</p>
         

          <div className='flex flex-col gap-2 ml-5'> 
            <div className='flex flex-row gap-2 items-center justify-start'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle' id='privacy_para'>Name</li>
            </div>
            <div className='flex flex-row gap-2 items-center justify-start'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle' id='privacy_para'>Email address</li>
            </div>
            <div className='flex flex-row gap-2 items-center justify-start'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle' id='privacy_para'>Telephone number</li>
            </div>
            <div className='flex flex-row gap-2 items-center justify-start'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle' id='privacy_para'>Address</li>
            </div>

            <ul className='flex flex-col gap-2 '>
              <li className='font-poppins text-[16px] list-circle'></li>
              <li className='font-poppins text-[16px] list-circle'></li>
              <li className='font-poppins text-[16px] list-circle'></li>
            </ul>
          </div>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Log Data</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Cookies</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.</p>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Service Providers</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Security</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Links To Other Sites</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Children’s Privacy</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Our Service does not address anyone under the age of 18 (“Children”).</p>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Compliance With Laws</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">We will disclose your Personal Information where required to do so by law or subpoena.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Changes To This Privacy Policy</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]' id='privacy_head'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Contact Us</h2>
           <p className='font-poppins text-[16px] font-medium mb-7' id='privacy_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">If you have any questions about this Privacy Policy, please contact us.</p>
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

export default PrivacyPage