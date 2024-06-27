  import React, { useEffect } from 'react';
import TopBar from './Components/TopBar/TopBar'
import Navbar from './Components/Navbar/Navbar'
import ContactInfo from './Components/ContactInfo/ContactInfo'
import Contactform from './Components/Contactforrm/Contactforrm'
import Footer from './Components/Footer/Footer'

const Contact = () => {

 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <ContactInfo/>
        <Contactform/>
        <Footer/>


    </div>
  )
}

export default Contact