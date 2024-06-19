import React from 'react'
import ServiceInfo from './Components/ServiceInfo/ServiceInfo'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ServiceHome from './Components/ServiceHome/ServiceHome'
import './Homepage'
import WorkSection from './Components/WorkSection/WorkSection'
import './Homepage.css'

const Service = () => {
  return (
    <div>
      <Navbar/>
        <ServiceInfo/>
        <div className='content'>
        <ServiceHome/>
        <WorkSection/>
        </div>
        <Footer/>
    </div>
  )
}

export default Service