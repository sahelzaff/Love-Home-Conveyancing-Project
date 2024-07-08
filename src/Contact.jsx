  import React, { useEffect } from 'react';
import TopBar from './Components/TopBar/TopBar'
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar/Navbar'
import ContactInfo from './Components/ContactInfo/ContactInfo'
import Contactform from './Components/Contactforrm/Contactforrm'
import Footer from './Components/Footer/Footer'

const Contact = () => {

 useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Contact Us | Love Home Conveyancing</title>
        <meta name="description" content="Get in touch with Love Home Conveyancing for any inquiries or support regarding our property conveyancing services in Australia." />
        <meta name="keywords" content="Contact Love Home Conveyancing, property conveyancing contact, conveyancing support" />
      </Helmet>
        <TopBar/>
        <Navbar/>
        <ContactInfo/>
        <Contactform/>
        <Footer/>


    </div>
  )
}

export default Contact