import React from 'react'
import { assets } from '../../assets/assets'
import './Hero2.css'
import '../../Responsive.css'

const Hero2 = () => {
    return (
        <div className='relative h-auto mb-56 '>
            <section className="relative h-[100vh] bg-center bg-fixed bg-cover bg-no-repeat brightness-110" id='mainrc' style={{ backgroundImage: `url(${assets.banner_rc})` }}>
                <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col items-start justify-center"id='banner_rc'>
                    <h1 className="text-[#f0532d] font-outfit text-2xl sm:text-3xl font-bold leading-tight" id='text1'>Legal Pitfalls to Avoid When</h1>

                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-outfit py-2 text-[#f0532d]'id='text2'>Purchasing Property.</h2>
                    <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-bold leading-tight tracking-[0.38rem] text-[#f0532d]'id='text3'>Expert Advice for Peace of Mind</p>
                    <div className='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] my-3 sm:my-4 md:my-5 rounded-e-md'></div>
                    <p className='font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-4/6 md:w-3/6 pr-0 sm:pr-10 md:pr-20 text-white'id='text4'>Leave the hassle to me, and focus on what really matters to you. so you can chat directly with the qualified property lawyer.
                    </p>

                    <p className='font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-4/6 md:w-3/6 pt-4 sm:pt-5 md:pt-7 pr-0 sm:pr-10 md:pr-20 text-white'id='text5'><span className='text-[#f0532d] font-outfit ' id='text7' >Mr Robin Carter</span><br />Your Designation & Year of exp ( Principal Solicitor at Love Homes Conveyancing | 25 years of combined experience in accounting, law, and business)
                    </p>

                    <div className='pt-3 sm:pt-5'>
                        <a href="" className='text-sm sm:text-base md:text-lg font-poppins text-white font-medium hover:text-[#f0532d] cursor-pointer' id='text6'>My Stories</a>
                    </div>

                    <div className="pt-5 sm:pt-10">
                        <a href="#" className="button cursor-pointer" id='button1'>Let's Chat</a>
                    </div>
                </div>
            </section>
            <div className="absolute h-[30vh] top-[96%]  left-1/2 transform -translate-x-1/2 w-2/3 bg-[#f4f4f4] p-4 sm:p-6 md:p-8 rounded-2xl box-shadow" id='consultBox'>
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