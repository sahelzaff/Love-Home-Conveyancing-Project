import React from 'react'
import ServiceInfo from './Components/ServiceInfo/ServiceInfo'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const Service = () => {
  return (
    <div>
      <Navbar/>
        <ServiceInfo/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default Service