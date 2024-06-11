import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 h-auto w-full'>
            <div className='bg-[#19345ef1] text-[#fff] p-14'>
                <p className='font-poppins font-medium text-[1rem]'>Financial Disclaimer: Please remember that past performance may not be indicative of future results. Different types of investments involve varying degrees of risk. Due to various factors, including changing market conditions, the content may no longer be reflective of current opinions or positions. Moreover, you should not assume that any discussion or information contained in this website serves as the receipt of, or as a substitute for, personalized investment advice from Borrower First. Please consult our financial experts for more information.</p>

            </div>
            <div className='h-[60vh] bg-[#f0532d] text-[#fff] py-2'>
                <div className='px-8 py-10'>
                    <div className='grid grid-cols-3 gap-20 justify-center items-center'>
                        <div className=''>
                            <div>
                                <img src={assets.logoWhite} alt="" srcset="" />
                            </div>
                            <div className='font-outfit text-3xl font-bold flex flex-row items-start pl-6 pb-3 pt-1 tracking-widest'>
                                <p>Simply Your Move</p>
                            </div>

                            <div className='flex flex-row gap-3  pt-8 items-center mb-2'>
                                <p className='font-poppins text-xl font-semibold flex flex-row items-start'>Follow Us:</p>

                                <div className="sm:flex sm:items-center sm:space-x-1 hidden">
                                    <img
                                        src={assets.facebook}
                                        alt="Facebook"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://www.facebook.com', '_blank')}
                                    />
                                    <img
                                        src={assets.twitter}
                                        alt="Twitter"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://www.twitter.com', '_blank')}
                                    />
                                    <img
                                        src={assets.insta}
                                        alt="Instagram"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://www.instagram.com', '_blank')}
                                    />
                                    <img
                                        src={assets.linkedin}
                                        alt="LinkedIn"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://www.linkedin.com', '_blank')}
                                    />
                                </div>
                            </div>
                            <div className='w-full h-[0.1rem] bg-white mb-2'></div>
                            <div className='font-poppins text-lg font-medium'><p>ABN: 84 991 312 097</p></div>
                            <div className='font-poppins text-lg font-medium'><p>Australian Credit License: 5446944</p></div>


                        </div>
                        <div>
                            <div>
                                <div>
                                    <p className='font-outfit text-3xl font-bold flex flex-row items-start tracking-widest'>Other Resources</p>
                                </div>
                                <div className='w-3/4 h-[0.12rem] bg-white mb-6'></div>
                                <div className="flex flex-col">
                                    <p className='text-white text-lg hover:text-[#1B1817] font-poppins font-medium pl-3 mb-3 cursor-pointer'>Privacy Policy</p>
                                    <p className='text-white text-lg hover:text-[#1B1817] font-poppins font-medium pl-3 mb-3 cursor-pointer'>Terms and Conditions</p>
                                    <p className='text-white text-lg hover:text-[#1B1817] font-poppins font-medium pl-3 mb-3 cursor-pointer'>Disclaimer</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <p className='font-outfit text-3xl font-bold flex flex-row items-start tracking-widest'>Contact Us</p>
                                </div>
                                <div className='w-5/6 h-[0.12rem] bg-white mb-6'></div>
                                <div>
                                    <p className='font-poppins text-lg font-medium pr-10'>Suite 17, Minton House,2-14 Bayswater Road, Potts Point 2011</p>
                                </div>


                                <div className='mt-2'>
                                    <div className="flex gap-4">
                                        <img src={assets.phone_call} className='w-6' alt="" srcset="" />
                                        <p className='font-poppins text-lg font-medium'>02 9381 9118</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <img src={assets.email} className='w-6' alt="" srcset="" />
                                        <p className='font-poppins text-lg font-medium'>hello@love-homes.com.au</p>
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

export default Footer