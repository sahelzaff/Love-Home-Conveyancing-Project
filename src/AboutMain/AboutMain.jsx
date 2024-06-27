import React from 'react'
import { assets } from '../assets/assets'

const AboutMain = () => {
    return (
        <div>
            <div>
                <div className='flex flex-row justify-start items-start w-full h-full py-36'>
                    <div className='flex flex-col  w-1/2 bg-transparent gap-20 h-full py-[7.8rem]' id='first' >
                        <div id='content'>
                            <div className='w-2/3 bg-[#f0532d] mx-auto px-14 py-10 rounded-2xl shadow-2xl cursor-text hover:scale-105 transition-transform duration-300' >
                                <div className='flex flex-col gap-2 items-start ' >
                                    <h1 className='font-inter text-[35px] text-white font-bold '>Value Statement</h1>
                                    <div className='w-6/12 h-[5px] bg-gray-200 rounded-lg -mt-2 mb-1 '></div>
                                    <p className='font-poppins fonnt-medium text-[14px]  text-white  '>At Love Home Conveyancing, we value integrity, professionalism, and client-focused service. Our commitment to transparency, responsiveness, and excellence ensures that every client receives the highest level of care and expertise. We believe in fostering long-term relationships built on trust and mutual respect, and we strive to exceed expectations in every property transaction.</p>
                                </div>
                            </div>

                            <div className='w-2/3 bg-[#f0532d] mx-auto px-14 mt-60  py-10 rounded-2xl shadow-2xl cursor-text hover:scale-105 transition-transform duration-300' id='aboutcard2' >
                                <div className='flex flex-col gap-2 items-start py-5'>
                                    <h1 className='font-inter text-[30px] text-white font-bold '>Mission Statement</h1>
                                    <div className='w-5/12 h-[5px] bg-gray-200 rounded-lg -mt-2 mb-1 '></div>
                                    <p className='font-poppins fonnt-medium text-[14px] text-white'>Our mission at Love Home Conveyancing is to provide fast, reliable, and stress-free conveyancing services that prioritize our clients' needs and goals. We aim to simplify the property transaction process with expert legal guidance, innovative digital solutions, and a client-centric approach. By partnering with dynamic professionals, we empower our clients to achieve their property dreams with confidence and ease.</p>
                                </div>
                            </div>




                        </div>
                    </div>
                    <div className='flex flex-col w-1/2 h-full'>
                        <div className='bg-transparent h-[165vh] py-32' id='first'>
                            <div className='flex flex-col gap-4  content2 py-5 pl-5' >
                                <div className='flex flex-row gap-3 items-center justify-start '>
                                    <img src={assets.abouthelp} className='w-20' alt="" />
                                    <div>
                                        <h1 className='font-inter text-[40px] text-black font-bold'>How I <span className='text-[#f0532d]'>Can Help?</span> </h1>
                                        <div className='w-8/12 h-[5px] bg-[#f0532d] rounded-lg -mt-1 mb-1  '></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-2'>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Specialize in Sydney conveyancing and property-related services.</p>
                                    </div>
                                    <div className='flex flex-row items-start justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px] mt-1' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Assist in buying, selling, transfer and  contract advice on real estate.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Support for first home buyers, couples, families, and developers.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Offer expert guidance and practical legal advice.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Aim to make your property journey simple, straightforward, and stress-free.</p>
                                    </div>


                                </div>
                            </div>
                            <div className='flex flex-col gap-4 items-start content2 py-5 pl-5'>
                                <div className='flex flex-row gap-3 items-center justify-start '>
                                    <img src={assets.aboutwork} className='w-20' alt="" />
                                    <div>
                                        <h1 className='font-inter text-[32px] text-black font-bold whitespace-nowrap'>Why Do Clients <span className='text-[#f0532d]'>Work With Me?</span></h1>
                                        <div className='w-7/12 h-[5px] bg-[#f0532d] rounded-lg -mt-1 mb-1  '></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-2'>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black whitespace-nowrap'>Extensive experience in conveyancing, accounting, law, and business.</p>
                                    </div>
                                    <div className='flex flex-row items-start justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px] mt-1' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Highly responsive and deal-focused legal support.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Availability after hours to accommodate client needs.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Digital-savvy approach for modern, efficient service.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Commitment to delivering 7-star service.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 items-start content2  py-5 pl-5'>
                            <div className='flex flex-row gap-3 items-center justify-start '>
                                    <img src={assets.commitment} className='w-20' alt="" />
                                    <div>
                                        <h1 className='font-inter text-[32px] text-black font-bold whitespace-nowrap'>My <span className='text-[#f0532d]'>Commitment</span></h1>
                                        <div className='w-7/12 h-[5px] bg-[#f0532d] rounded-lg -mt-1 mb-1  '></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-2'>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Ensuring a client-centric approach in all our interactions.</p>
                                    </div>
                                    <div className='flex flex-row items-start justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px] mt-1' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Handling property transactions with the utmost care and professionalism.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Keeping clients informed and supported throughout the process.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Maximizing the time and energy of agents and brokers.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Delivering practical legal advice tailored to each client's needs.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Being available after hours to meet client needs.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletBlack} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-black'>Building long-term relationships based on trust and excellence
                                            .</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AboutMain