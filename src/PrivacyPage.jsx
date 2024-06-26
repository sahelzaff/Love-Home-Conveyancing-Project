import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './Homepage.css'
import { assets } from './assets/assets'

const PrivacyPage = () => {
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
          <h1 className='font-outfit text-6xl font-bold mx-auto relative z-20'>Privacy <span className='text-[#f0532d]'>Policy</span></h1>
          <div className='w-3/12 bg-[#f0532d] h-[0.3rem] rounded mx-auto'></div>
          <h2 className='font-outfit text-[23px] font-bold mx-auto mt-10 mb-10'>PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE.</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy and website disclaimer, govern lovehomeconveyancing.com.au’s relationship with you in relation to your use of this website.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>By using this website, you signify your acceptance of these terms and conditions of use. For the purposes of these terms and conditions, “Us”, “Our” and “We” refers to lovehomeconveyancing.com.au and “You” and “Your” refers to you, the client, visitor, website user or person using our website.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Information Collection And Use</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:</p>
         

          <div className='flex flex-col gap-2 ml-5'> 
            <div className='flex flex-row gap-2 items-center justify-start'>
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle'>Name</li>
            </div>
            <div className='flex flex-row gap-2 items-center justify-start'>
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle'>Email address</li>
            </div>
            <div className='flex flex-row gap-2 items-center justify-start'>
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle'>Telephone number</li>
            </div>
            <div className='flex flex-row gap-2 items-center justify-start'>
              <img src={assets.bullet} className='w-3 h-3'  alt="" />
              <li className='font-poppins text-[16px] list-circle'>Address</li>
            </div>

            <ul className='flex flex-col gap-2 '>
              <li className='font-poppins text-[16px] list-circle'></li>
              <li className='font-poppins text-[16px] list-circle'></li>
              <li className='font-poppins text-[16px] list-circle'></li>
            </ul>
          </div>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Log Data</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Cookies</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.</p>
           <p className='font-poppins text-[16px] font-medium mb-7'>We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Service Providers</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
           <p className='font-poppins text-[16px] font-medium mb-7'>These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Security</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Links To Other Sites</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
           <p className='font-poppins text-[16px] font-medium mb-7'>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Children’s Privacy</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>Our Service does not address anyone under the age of 18 (“Children”).</p>
           <p className='font-poppins text-[16px] font-medium mb-7'>We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Compliance With Laws</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>We will disclose your Personal Information where required to do so by law or subpoena.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Changes To This Privacy Policy</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
           <p className='font-poppins text-[16px] font-medium mb-7'>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Contact Us</h2>
           <p className='font-poppins text-[16px] font-medium mb-7'>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default PrivacyPage