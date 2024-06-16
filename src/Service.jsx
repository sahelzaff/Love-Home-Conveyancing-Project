import React from 'react'
import ServiceInfo from './Components/ServiceInfo/ServiceInfo'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ServiceHome from './Components/ServiceHome/ServiceHome'
import './Homepage'

const Service = () => {
  return (
    <div>
      <Navbar/>
        <ServiceInfo/>
        <div className='Homepage'>
        <ServiceHome/>
        </div>
        <Footer/>
    </div>
  )
}

export default Service