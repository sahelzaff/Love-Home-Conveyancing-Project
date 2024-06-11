import React from 'react'
import { assets } from '../../assets/assets'
import './Hero2.css'

const Hero2 = () => {
    return (
        <div className='relative h-auto mb-56 '>
            <section className="relative h-screen  bg-center bg-cover bg-no-repeat brightness-110" style={{ backgroundImage: `url(${assets.banner_rc})` }}>
                <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-start px-8 py-20">
                    <h1 className="text-black font-outfit text-3xl font-bold leading-[10px]">Legal Pitfalls to Avoid When</h1>

                    <h2 className='text-7xl font-extrabold font-outfit py-2 text-[#f0532d]'>Purchasing Property.</h2>
                    <p className='text-4xl font-outfit leading-[30px] font-bold tracking-[0.3rem]' id='expert'>Expert Advice for Peace of Mind</p>
                    <div className='w-44 h-[0.3rem] bg-[#f0532d] my-5 rounded-e-md'></div>
                    <p className='font-poppins font-medium text-lg w-3/6 pr-20'>Leave the hassle to me, and focus on what really matters to you.
                        so you can chat directly with the qualified property lawyer.
                    </p>

                    <p className='font-poppins font-medium text-lg w-3/6 pt-7 pr-20'>Mr Robin Carter - Your Designation & Year of exp ( Principal Solicitor at Love Homes Conveyancing | 25 years of combined experience in accounting, law, and business)
                    </p>

                    <div className='pt-5'>
                        <a href="" className='text-lg font-poppins font-medium hover:text-[#f0532d] cursor-pointer' id='border_bottom'>My Stories</a>
                    </div>

                    <div className="pt-10">
                        <a href="#" className="button cursor-pointer" id='buttonsec'>Let's Chat</a>
                    </div>


                </div>
            </section>
            <div className="absolute h-[30vh] top-[96%] left-1/2 transform -translate-x-1/2 w-4/6 bg-[#f4f4f4] p-8 rounded-2xl box-shadow ">
                <div className="flex flex-col justify-center items-center gap-0">
                    <h2 className='font-outfit font-medium text-lg'>Online & In-person Consultations Available</h2>
                    <div className='flex flex-row justify-center items-center -mt-5 gap-10'>
                    <img src={assets.whatsapp} className='w-32' alt="" srcset="" />
                    <img src={assets.zoom} className='w-32' alt="" srcset="" />
                    <img src={assets.we} className='w-32' alt="" srcset="" />
                    <img src={assets.skype} className='w-32' alt="" srcset="" />
                    <img src={assets.teams} className='w-28' alt="" srcset="" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Hero2