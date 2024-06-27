import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './Homepage.css'
import { assets } from './assets/assets'
import TopBar from './Components/TopBar/TopBar';

const TermsPage = () => {
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
        <div className='flex flex-col h-auto items-start content py-28'>
          <h1 className='font-outfit text-6xl font-bold mx-auto relative z-20'>Terms & <span className='text-[#f0532d]'>Conditions</span></h1>
          <div className='w-4/12 bg-[#f0532d] h-[0.3rem] rounded mx-auto'></div>
          <h2 className='font-outfit text-[23px] font-bold mx-auto mt-10 mb-10'>PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE.</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy and website disclaimer, govern lovehomeconveyancing.com.au’s relationship with you in relation to your use of this website.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>By using this website, you signify your acceptance of these terms and conditions of use. For the purposes of these terms and conditions, “Us”, “Our” and “We” refers to lovehomeconveyancing.com.au and “You” and “Your” refers to you, the client, visitor, website user or person using our website.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Accounts</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>



          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Intellectual Property</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>The Service and its original content, features and functionality are and will remain the exclusive property of Love Homes Conveyancing and its licensors.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Links To Other Web Sites</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>Our Service may contain links to third-party web sites or services that are not owned or controlled by Love Homes Conveyancing.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>Love Homes Conveyancing has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Love Homes Conveyancing shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Termination</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
          <p className='font-poppins text-[16px] font-medium mb-7'>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>



          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Disclaimer</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>




          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Governing Law</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>These Terms shall be governed and construed in accordance with the laws of Australia without regard to its conflict of law provisions.

          </p>
          <p className='font-poppins text-[16px] font-medium mb-7'>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.

          </p>



          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Changes</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

          </p>
          <p className='font-poppins text-[16px] font-medium mb-7'>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.

          </p>



          <h2 className='font-outfit text-[35px] font-bold  text-[#f0532d]'>Contact Us</h2>
          <p className='font-poppins text-[16px] font-medium mb-7'>If you have any questions about this Privacy Policy, please contact us.</p>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default TermsPage


