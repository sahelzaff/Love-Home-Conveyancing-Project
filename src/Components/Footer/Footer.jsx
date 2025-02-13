import React from 'react'
import { assets } from '../../assets/assets'
import '../../Homepage.css'
import { Link } from 'react-router-dom';
import '../../Responsive.css';



const Footer = () => {
    return (
        <div className='pt-10 h-auto w-full '>
            {/* <div className='bg-[#19345e] text-[#fff] p-14 px-28' id='footer_financial' >
                <p className='font-poppins font-medium text-[1.125rem] Homepage' id='footerfinancialpara'  >Financial Disclaimer: Please remember that past performance may not be indicative of future results. Different types of investments involve varying degrees of risk. Due to various factors, including changing market conditions, the content may no longer be reflective of current opinions or positions. Moreover, you should not assume that any discussion or information contained in this website serves as the receipt of, or as a substitute for, personalized investment advice from Borrower First. Please consult our financial experts for more information.</p>

            </div> */}
            <div className='h-auto bg-[#f0532d] text-[#fff] pt-[70px] pb-[20px]'>
                <div className=' py-10 Homepage' id='main_footer_main_div'>
                    <div className='grid grid-cols-3 gap-20 items-start' id='main_footer'>
                        <div className=''>
                            <div>
                                <img src={assets.logoWhite} className='min-w-32 max-w-80' alt="" srcset="" />
                            </div>
                            <div className='font-inter text-[20px] font-bold flex flex-row items-start pl-6 pb-3 pt-1 tracking-widest'>
                                <p>Simply Your Move</p>
                            </div>

                            <div className='flex flex-row gap-3  pt-8 items-center mb-2'>
                                <p className='font-poppins text-[1.125rem] font-semibold flex flex-row items-start'>Contact Us:</p>

                                <div className="sm:flex sm:items-center sm:space-x-1 " id='icons_footer'>
                                    {/* <img
                                        src={assets.facebook}
                                        alt="Facebook"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://www.facebook.com/lovehomesconveyancing/', '_blank')}
                                    /> */}
                                    <img
                                        src={assets.whatsapp_top}
                                        alt="Whatsapp"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://api.whatsapp.com/send?phone=61434303537&text=Hi%20Robin%20Carter%2C%20I%27m%20interested%20in%20your%20property%20conveyancing%20services.%20Can%20you%20please%20provide%20more%20information%3F%20Thank%20you!%0A', '_blank')}
                                    />
                                    {/* <img
                                        src={assets.insta}
                                        alt="Instagram"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://www.instagram.com/lovehomesconveyancing/', '_blank')}
                                    /> */}
                                    {/* <img
                                        src={assets.linkedin}
                                        alt="LinkedIn"
                                        className="h-8 w-8 cursor-pointer social-icon"
                                        onClick={() => window.open('https://www.linkedin.com/company/lovehomesconveyancing/', '_blank')}
                                    /> */}
                                </div>
                            </div>
                            <div className='w-full h-[0.1rem] bg-white mb-2'></div>
                            <div className='font-poppins text-[1rem] font-medium pb-6'><p>ABN: 73 636 440 152</p></div>
                            {/* <div className='font-poppins text-[1rem] font-medium'><p>Australian Credit License: </p></div> */}


                        </div>
                        <div className='mt-1'>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <p className='font-inter text-3xl font-bold flex flex-row items-start tracking-widest'>Other Resources</p>
                                    <div className='w-3/4 h-[0.12rem] bg-white mb-6'></div>
                                </div>
                                <div className="flex flex-col gap-0">
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
                        <div className='mt-1'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <p className='font-inter text-3xl font-bold flex flex-row items-start tracking-widest'>Contact Us</p>
                                    <div className='w-5/6 h-[0.12rem] bg-white mb-6'></div>
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <div>
                                        <p className='font-poppins text-[1rem] font-medium pr-8'>Suite 305, Level 3, 3 Hosking Place, Sydney 2000</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href="tel:+0293819118" className="flex items-center gap-4 text-inherit no-underline cursor-pointer">
                                            <img src={assets.phone_call} className="w-6" alt="Phone Call" />
                                            <p className="font-poppins text-[1rem] font-medium">02 9381 9118</p>
                                        </a>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href="mailto:hello@love-homes.com.au" className="flex items-center gap-4 text-inherit no-underline cursor-pointer">
                                            <img src={assets.email} className="w-6" alt="Email" />
                                            <p className="font-poppins text-[1rem] font-medium">hello@love-homes.com.au</p>
                                        </a>
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