import React from 'react'
import { assets } from '../../assets/assets'
import '../../Homepage.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='pt-10 h-auto w-full '>
            <div className='bg-[#19345e] text-[#fff] p-14 px-28'>
                <p className='font-poppins font-medium text-[1.125rem] Homepage'>Financial Disclaimer: Please remember that past performance may not be indicative of future results. Different types of investments involve varying degrees of risk. Due to various factors, including changing market conditions, the content may no longer be reflective of current opinions or positions. Moreover, you should not assume that any discussion or information contained in this website serves as the receipt of, or as a substitute for, personalized investment advice from Borrower First. Please consult our financial experts for more information.</p>

            </div>
            <div className='h-auto bg-[#f0532d] text-[#fff] pt-[70px] pb-[100px]'>
                <div className='px-28 py-10 Homepage'> 
                    <div className='grid grid-cols-3 gap-20 justify-center items-center '>
                        <div className=''>
                            <div>
                                <img src={assets.logoWhite} className='min-w-32 max-w-80' alt="" srcset="" />
                            </div>
                            <div className='font-inter text-[20px] font-bold flex flex-row items-start pl-6 pb-3 pt-1 tracking-widest'>
                                <p>Simply Your Move</p>
                            </div>

                            <div className='flex flex-row gap-3  pt-8 items-center mb-2'>
                                <p className='font-poppins text-[1.125rem] font-semibold flex flex-row items-start'>Follow Us:</p>

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
                            <div className='font-poppins text-[1rem] font-medium pb-6'><p>ABN: 84 991 312 097</p></div>
                            {/* <div className='font-poppins text-[1rem] font-medium'><p>Australian Credit License: </p></div> */}


                        </div>
                        <div>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <p className='font-inter text-3xl font-bold flex flex-row items-start tracking-widest'>Other Resources</p>
                                <div className='w-3/4 h-[0.12rem] bg-white mb-6'></div>
                                </div>
                                <div className="flex flex-col gap-6 ">
                                <Link to="/privacy-policy">
                                    <p className='text-white text-[1rem] hover:text-[#1B1817] font-poppins font-medium pl-3 mb-3 cursor-pointer'>Privacy Policy</p>
                                </Link>
                                <Link to="/terms-&-conditions">
                                    <p className='text-white text-[1rem] hover:text-[#1B1817] font-poppins font-medium pl-3 mb-3 cursor-pointer'>Terms and Conditions</p>
                                </Link>
                                <Link to="/disclaimer">
                                    <p className='text-white text-[1rem] hover:text-[#1B1817] font-poppins font-medium pl-3 mb-3 cursor-pointer'>Disclaimer</p>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <p className='font-inter text-3xl font-bold flex flex-row items-start tracking-widest'>Contact Us</p>
                                <div className='w-5/6 h-[0.12rem] bg-white mb-6'></div>
                                </div>
                                <div className='flex flex-col gap-8'>

                                <div>
                                    <p className='font-poppins text-[1rem] font-medium pr-8'>Suite 17, Minton House,2-14 Bayswater Road, Potts Point 2011</p>
                                </div>


                                    <div className="flex gap-4">
                                        <img src={assets.phone_call} className='w-6' alt="" srcset="" />
                                        <p className='font-poppins text-[1rem] font-medium'>02 9381 9118</p>
                                    </div>
                                <div className=''>

                                    <div className="flex gap-4">
                                        <img src={assets.email} className='w-6' alt="" srcset="" />
                                        <p className='font-poppins text-[1rem] font-medium'>hello@love-homes.com.au</p>
                                    </div>
                                    
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                                <div className='text-center mt-14 font-poppins text-[16px]'>
                                    <p>Copyright 2024 © Love Homes Conveyancing - All Rights Reserved </p>
                                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer