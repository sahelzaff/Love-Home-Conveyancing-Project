import React from 'react'
import { assets } from '../../assets/assets'
import './Hero2.css'
import '../../Responsive.css'

const Hero2 = () => {
    return (
        <div className='relative h-auto mb-44 '>
            <section className="relative h-[90vh] bg-center bg-cover bg-no-repeat brightness-110" id='mainrc' style={{ backgroundImage: `url(${assets.banner_rc})` }}>
                <div className="absolute inset-0 w-[45vw] bg-white bg-opacity-0 flex flex-col items-start justify-center" id='banner_rc' data-aos='fade-right' data-aos-duration="1000">
                    <h1 className="text-[#f0532d] font-sans text-2xl sm:text-3xl font-medium leading-tight" id='text1'>Legal Pitfalls to Avoid When</h1>

                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-sans py-2 text-[#f0532d]' id='text2'>Purchasing Property.</h2>
                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium leading-tight tracking-[0.38rem] text-[#f0532d]' id='text3'>Expert Advice for Peace of Mind</p>
                    <div className='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] my-3 sm:my-4 md:my-5 rounded-e-md'></div>
                    <p className='font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl w-full  text-white' id='text4'>Leave the hassle to me, and focus on what really matters to you. so you can chat directly with the qualified property lawyer.
                    </p>

                    <p className='font-poppins font-normal w-full text-white' id='text5'><span className='text-[#f0532d] font-outfit ' id='text7' >Mr Robin Carter</span><br />Principal Solicitor at Love Homes Conveyancing
                      <br />
                      <span className=''>25 years of combined experience in accounting, law, and business</span>

                    </p>

                    <div className='pt-3 sm:pt-5'>
                        <a href="" className='text-sm sm:text-base md:text-lg font-poppins text-white font-medium hover:text-[#f0532d] cursor-pointer' id='text6'>My Stories</a>
                    </div>

                    <div className="pt-5 sm:pt-10">
                        <a href="#" className="button cursor-pointer" id='button1'>Let's Chat</a>
                    </div>
                </div>
            </section>
            <div className="absolute h-[30vh] top-[96%]  left-1/2 transform -translate-x-1/2 w-2/3 bg-[#f4f4f4] py-2 rounded-2xl box-shadow" id='consultBox'>
                <div className="flex flex-col justify-center items-center gap-2 sm:gap-1 md:gap-0">
                    <h2 className="font-outfit font-medium text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl">Online & In-person Consultations Available</h2>
                    <div className="flex flex-row justify-center items-center -mt-3 sm:-mt-4 md:-mt-5 gap-4 sm:gap-6 md:gap-7">
                        <img src={assets.whatsapp} className="w-16 sm:w-24 md:w-32 2xl:w-40" alt="" />
                        <img src={assets.zoom} className="w-16 sm:w-24 md:w-32 xl:w-40" alt="" />
                        <img src={assets.we} className="w-16 sm:w-24 md:w-32 2xl:w-40" alt="" />
                        <img src={assets.skype} className="w-16 sm:w-24 md:w-32 2xl:w-40" alt="" />
                        <img src={assets.teams} className="w-14 sm:w-20 md:w-28 2xl:w-40" alt="" />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Hero2