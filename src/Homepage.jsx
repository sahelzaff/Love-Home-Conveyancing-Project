import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
// import Section2 from './Components/Section2/Section2'
import BenefitsComponent from './Components/BenefitsComponent/BenefitsComponent'
// import { assets } from './assets/assets'
import CustomerReviews from './Components/CustomerReviews/CustomerReviews'
import Footer from './Components/Footer/Footer'
import WorkSection from './Components/WorkSection/WorkSection'
import TextReveal from './Components/TextReveal/TextReveal'
// import Cards from './Components/Cards/Cards'
import WhySection from './Components/WhySection/WhySection'
import ServiceHome from './Components/ServiceHome/ServiceHome'
import Faq from './Components/Faq/Faq'
import Hero2 from './Components/Hero2/Hero2'
import Section3New from './Components/Section3New/Section3New'
import SliderClients from './Components/SliderClients/SliderClients'
import Cards from './Components/Cards/Cards'

const Homepage = () => {
    return (
        <div>
            <Navbar className="fixed w-full z-50" />
            <div className='bg-[#0d0d0d]'>
            <Hero2/>
            </div>
            {/* <Cards/> */}
            {/* <div className="pl-14">
                <Section2 />
            </div> */}
            <div className='px-14'>
                <BenefitsComponent />
            </div>
            <Hero />
            <div className="px-[5.6rem]">

            <SliderClients/>
            </div>
            {/* <Cards/> */}
            {/* <Section3New/> */}
            <TextReveal text="Experience seamless property transactions with peace of mind, every step of the way."
                highlight="peace of mind"
                highlightClass="text-[#f0532d] font-bold font-outfit"
                className="" />
            <div className='pl-12'>
                <CustomerReviews />
            </div>
            <div className='px-14'>
                <WorkSection />
            </div>
            <WhySection />
            <div className="px-[3rem]">
                <ServiceHome />
            </div>
            <Faq />
            <Footer />

        </div>
    )
}

export default Homepage
