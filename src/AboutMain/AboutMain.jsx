import React from 'react'
import { assets } from '../assets/assets'

const AboutMain = () => {
    return (
        <div>
            <div>
                <div className='flex flex-row justify-center items-center w-full h-full pt-36'>
                    <div className='flex flex-col w-1/2 bg-[#f0532d] py-36 h-[165vh]  ' id='first' >
                    <div id='content'>
                        <div className='flex flex-col gap-2 items-start content1' >
                            <h1 className='font-inter text-[30px] text-white font-bold '>Value Statement</h1>
                            <div className='w-5/12 h-[5px] bg-gray-200 rounded-lg -mt-2 mb-1 '></div>
                            <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white  '>At Love Home Conveyancing, we value integrity, professionalism, and client-focused service. Our commitment to transparency, responsiveness, and excellence ensures that every client receives the highest level of care and expertise. We believe in fostering long-term relationships built on trust and mutual respect, and we strive to exceed expectations in every property transaction.</p>
                        </div>
                        <div className='flex flex-col gap-2 items-start content1 py-5'>
                            <h1 className='font-inter text-[30px] text-white font-bold '>Mission Statement</h1>
                            <div className='w-5/12 h-[5px] bg-gray-200 rounded-lg -mt-2 mb-1 '></div>
                            <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Our mission at Love Home Conveyancing is to provide fast, reliable, and stress-free conveyancing services that prioritize our clients' needs and goals. We aim to simplify the property transaction process with expert legal guidance, innovative digital solutions, and a client-centric approach. By partnering with dynamic professionals, we empower our clients to achieve their property dreams with confidence and ease.</p>
                        </div>
                        <div className='flex flex-col gap-2 items-start content1 py-5'>
                            <h1 className='font-inter text-[30px] text-white font-bold'>My Commitment</h1>
                            <div className='w-5/12 h-[5px] bg-gray-200 rounded-lg -mt-2 mb-1 '></div>
                            <div className='flex flex-col items-start gap-2'>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                    <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Ensuring a client-centric approach in all our interactions.</p>
                                </div>
                                <div className='flex flex-row items-start justify-center gap-2'>
                                    <img src={assets.bulletWhite} className='w-[10px] mt-1' alt="" />
                                    <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Handling property transactions with the utmost care and professionalism.</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                    <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Keeping clients informed and supported throughout the process.</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                    <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Maximizing the time and energy of agents and brokers.</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                    <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Delivering practical legal advice tailored to each client's needs.</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                    <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Being available after hours to meet client needs.</p>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-2'>
                                    <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                    <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Building long-term relationships based on trust and excellence
                                        .</p>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/2 h-full'>
                        <div className='bg-[#19345e] h-[165vh] py-32' id='first'>
                            <div className='flex flex-col gap-4  content2 py-5 pl-5' >
                                <div className='flex flex-row gap-3 items-center justify-start '>
                                    <img src={assets.abouthelp} className='w-20' alt="" />
                                    <div>
                                <h1 className='font-inter text-[30px] text-white font-bold'>How I Can Help?</h1>
                                <div className='w-8/12 h-[5px] bg-[#f0532d] rounded-lg -mt-1 mb-1  '></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-2'>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Specialize in Sydney conveyancing and property-related services.</p>
                                    </div>
                                    <div className='flex flex-row items-start justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px] mt-1' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Assist in buying, selling, transfer and  contract advice on real estate.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Support for first home buyers, couples, families, and developers.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Offer expert guidance and practical legal advice.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Aim to make your property journey simple, straightforward, and stress-free.</p>
                                    </div>


                                </div>
                            </div>
                            <div className='flex flex-col gap-4 items-start content2 py-5 pl-5'>
                            <div className='flex flex-row gap-3 items-center justify-start '>
                                    <img src={assets.aboutwork} className='w-20' alt="" />
                                    <div>
                                <h1 className='font-inter text-[30px] text-white font-bold whitespace-nowrap'>Why Do Clients Work with Me?</h1>
                                <div className='w-7/12 h-[5px] bg-[#f0532d] rounded-lg -mt-1 mb-1  '></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-2'>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Extensive experience in conveyancing, accounting, law, and business.</p>
                                    </div>
                                    <div className='flex flex-row items-start justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px] mt-1' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Highly responsive and deal-focused legal support.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Availability after hours to accommodate client needs.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Digital-savvy approach for modern, efficient service.</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-2'>
                                        <img src={assets.bulletWhite} className='w-[10px]' alt="" />
                                        <p className='font-poppins fonnt-medium text-[14px] pr-4 text-white'>Commitment to delivering 7-star service.</p>
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