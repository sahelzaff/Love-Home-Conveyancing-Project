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
import Why2 from './Components/Why2/Why2'
import Video from './Components/video/video'
import Cards from './Components/Cards/Cards'
import './Homepage.css'
import TheProcess from './Components/TheProcess/TheProcess'
import TopBar from './Components/TopBar/TopBar'
import React, { useEffect } from 'react';


const Homepage = () => {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div className='overflow-x-hidden'>
            <TopBar />
            <Navbar className=" w-full z-50" />
            <div className='bg-[#0d0d0d]'>
                <Hero2 />
            </div>
            <div className='Homepage'>
                {/* <Cards/> */}
                {/* <div className="pl-14">
                    <Section2 />
                </div> */}
                <div className='flex flex-col items-center justify-center'>
                    <BenefitsComponent />
                </div>
            </div>
            <div className='Homepage1'>
                <Hero />
            </div>
            <div className='Homepage'>
                <SliderClients />
            </div>


            {/* <Cards/> */}
            {/* <Section3New/> */}
            {/* <TextReveal text="Experience seamless property transactions with peace of mind, every step of the way."
                highlight="peace of mind"
                highlightClass="text-[#f0532d] font-bold font-outfit"
                className="" /> */}
            <div className='relative z-10'>

                <Video />
            </div>
            <div className='Homepage1'>
                <CustomerReviews />
            </div>
            <div className='Homepage'>
                {/* <WorkSection /> */}
                <TheProcess />
            </div>
            <Why2 />
            <div className='Homepage'>
            </div>
            <WhySection />
            <div className="Homepage">

            </div>
            <div className="Homepage">
                {/* <ServiceHome /> */}
                <Faq />

            </div>
            <Footer />
        </div>
    )
}

export default Homepage
