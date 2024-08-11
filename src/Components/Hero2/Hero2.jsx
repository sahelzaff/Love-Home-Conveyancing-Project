import React, { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { assets } from '../../assets/assets';
import './Hero2.css';
import '../../Responsive.css';

const Hero2 = () => {
    const [bgImage, setBgImage] = useState(() => {
        return window.matchMedia('(max-width: 600px)').matches ? assets.banner_rc_mobile_placeholder : assets.banner_rc_placeholder;
    });

    useEffect(() => {
        const preloadImage = (src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setBgImage(src);
            };
        };

        const updateBgImage = () => {
            if (window.matchMedia('(max-width: 600px)').matches) {
                preloadImage(assets.banner_rc_mobile);
            } else {
                preloadImage(assets.banner_rc);
            }
        };

        const debouncedResize = debounce(updateBgImage, 100);

        window.addEventListener('resize', debouncedResize);

        updateBgImage();

        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    }, []);

    const sectionStyle = useMemo(() => ({
        backgroundImage: `url(${bgImage})`,
    }), [bgImage]);

    return (
        <>
            <link 
                rel="preload" 
                href={assets.banner_rc_mobile} 
                as="image" 
                importance="high" 
            />
            <link 
                rel="preload" 
                href={assets.banner_rc} 
                as="image" 
                importance="high" 
            />
            <div className='relative h-auto mb-44'>
                <section
                    className="relative h-[100vh] bg-center bg-cover bg-no-repeat brightness-110"
                    id='mainrc'
                    style={sectionStyle}
                >
                    <img src={assets.banner_rc_mobile_overlay} className='absolute bottom-0' id='mobile_banner_rc_overlay' alt="" />
                    <div className="absolute inset-0 w-[43%] bg-white bg-opacity-0 flex flex-col items-start justify-center" id='banner_rc' data-aos='fade-right' data-aos-duration="1000">
                        <h1 className="text-[#f0532d] font-inter text-2xl sm:text-3xl font-[700] leading-tight" id='text1'>Legal Pitfalls to Avoid When</h1>

                        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[900] font-inter py-2 text-[#fff]' id='text2'>Purchasing Property.</h2>
                        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-inter font-medium leading-tight text-[#f0532d]' id='text3'>Expert Advice for Peace of Mind</p>
                        <div className='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] my-3 sm:my-4 md:my-5 rounded-e-md'></div>
                        <p className='font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl w-full  text-white' id='text4'>Leave the hassle to me, and focus on what really matters to you. So you can chat directly with the qualified property lawyer.</p>

                        <p className='font-poppins font-normal w-full text-white' id='text5'><span className='text-[#f0532d] font-inter ' id='text7' >Mr Robin Carter</span><br />Principal Solicitor at Love Homes Conveyancing
                            <br />
                            <span className=''>25 years of combined experience in accounting, law, and business</span>
                        </p>

                        <div className='pt-3 sm:pt-5'>
                            <a href="" className='text-sm sm:text-base md:text-lg font-poppins text-[#f0532d] font-medium hover:text-[#fff] cursor-pointer' id='text6'>My Stories</a>
                        </div>

                        <div className="pt-5 sm:pt-10">
                            <a href="https://api.whatsapp.com/send?phone=61434303537&text=Hi%20Robin%20Carter%2C%20I%27m%20interested%20in%20your%20property%20conveyancing%20services.%20Can%20you%20please%20provide%20more%20information%3F%20Thank%20you!%0A" target="_blank"
                                rel="noopener noreferrer" className="button cursor-pointer font-inter" id='button1'>Let's Chat</a>
                        </div>
                    </div>
                </section>
                <div className="absolute h-[30vh] top-[96%]  left-1/2 transform -translate-x-1/2 w-[75%] bg-[#f4f4f4] py-2 rounded-2xl box-shadow" id='consultBox'>
                    <div className="flex flex-col justify-center items-center gap-2 sm:gap-1 md:gap-0">
                        <h2 className="font-inter mt-2 font-medium text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl" id='online_text'>Online & In-person Consultations Available</h2>
                        <div className="flex flex-row justify-center items-center -mt-3 sm:-mt-4 md:-mt-5 gap-4 sm:gap-6 md:gap-7" id='boxPhoto'>
                            <a href="https://api.whatsapp.com/send?phone=61434303537&text=Hi%20Robin%20Carter%2C%20I%27m%20interested%20in%20your%20property%20conveyancing%20services.%20Can%20you%20please%20provide%20more%20information%3F%20Thank%20you!%0A"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={assets.whatsapp} className="w-16 sm:w-24 md:w-32 2xl:w-40 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" alt="WhatsApp" id='box_image' />
                            </a>

                            <a href="https://calendly.com/ceo-lovehomes/video-consultation-with-robin-carter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={assets.zoom} className="w-16 sm:w-24 md:w-32 xl:w-40 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" alt="Schedule a Zoom Consultation" id='box_image' loading="lazy" />
                            </a>
                            <a href="https://calendly.com/ceo-lovehomes/video-consultation-with-robin-carter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={assets.skype} className="w-16 sm:w-24 md:w-32 2xl:w-40 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" alt="Schedule a Skype Consultation" id='box_image' loading="lazy" />
                            </a>
                            <a href="mailto:hello@love-homes.com.au"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={assets.emailphoto} className="w-16 sm:w-24 md:w-32 2xl:w-40 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" alt="Schedule a Email Consultation" id='box_image' loading="lazy" />
                            </a>
                            <a href="https://calendly.com/ceo-lovehomes/consultation-with-robin-carter-lovehomes-conveyancing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={assets.calendly} className="w-16 sm:w-24 md:w-32 2xl:w-40 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" alt="Schedule a Offline Consultation" id='box_image' loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default Hero2;