import React from 'react'
import { assets } from '../../assets/assets'
import './Hero2.css'

const Hero2 = () => {
    return (
        <div className='relative h-auto mb-56 '>
            <section className="relative h-screen bg-center bg-cover bg-no-repeat brightness-110" style={{ backgroundImage: `url(${assets.banner_rc})` }}>
                <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col items-start justify-center px-4 sm:px-8 py-10 sm:py-20">
                    <h1 className="text-[#f0532d] font-outfit text-2xl sm:text-3xl font-bold leading-tight">Legal Pitfalls to Avoid When</h1>

                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-outfit py-2 text-[#f0532d]'>Purchasing Property.</h2>
                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-bold leading-tight tracking-[0.38rem] text-[#f0532d]' id='expert'>Expert Advice for Peace of Mind</p>
                    <div className='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] my-3 sm:my-4 md:my-5 rounded-e-md'></div>
                    <p className='font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-4/6 md:w-3/6 pr-0 sm:pr-10 md:pr-20 text-white'>Leave the hassle to me, and focus on what really matters to you. so you can chat directly with the qualified property lawyer.
                    </p>

                    <p className='font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-4/6 md:w-3/6 pt-4 sm:pt-5 md:pt-7 pr-0 sm:pr-10 md:pr-20 text-white'>Mr Robin Carter - Your Designation & Year of exp ( Principal Solicitor at Love Homes Conveyancing | 25 years of combined experience in accounting, law, and business)
                    </p>

                    <div className='pt-3 sm:pt-5'>
                        <a href="" className='text-sm sm:text-base md:text-lg font-poppins text-white font-medium hover:text-[#f0532d] cursor-pointer' id='border_bottom'>My Stories</a>
                    </div>

                    <div className="pt-5 sm:pt-10">
                        <a href="#" className="button cursor-pointer" id='buttonsec'>Let's Chat</a>
                    </div>
                </div>
            </section>
            <div className="absolute h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[30vh] top-[96%] sm:top-[90%] md:top-[90%] left-1/2 transform -translate-x-1/2 w-full sm:w-5/6 md:w-4/6 lg:w-4/6 bg-[#f4f4f4] p-4 sm:p-6 md:p-8 rounded-2xl box-shadow">
                <div className="flex flex-col justify-center items-center gap-2 sm:gap-1 md:gap-0">
                    <h2 className="font-outfit font-medium text-base sm:text-lg md:text-xl lg:text-lg">Online & In-person Consultations Available</h2>
                    <div className="flex flex-row justify-center items-center -mt-3 sm:-mt-4 md:-mt-5 gap-4 sm:gap-6 md:gap-10">
                        <img src={assets.whatsapp} className="w-16 sm:w-24 md:w-32" alt="" />
                        <img src={assets.zoom} className="w-16 sm:w-24 md:w-32" alt="" />
                        <img src={assets.we} className="w-16 sm:w-24 md:w-32" alt="" />
                        <img src={assets.skype} className="w-16 sm:w-24 md:w-32" alt="" />
                        <img src={assets.teams} className="w-14 sm:w-20 md:w-28" alt="" />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Hero2