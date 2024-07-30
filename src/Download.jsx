import React, { useEffect, useState, Suspense, lazy } from 'react';
import TopBar from './Components/TopBar/TopBar';
import Navbar from './Components/Navbar/Navbar';
import { assets } from './assets/assets';
import './Homepage.css';
import './Responsive.css';

// Lazy load the Footer component
const Footer = lazy(() => import('./Components/Footer/Footer'));

const Download = () => {
    const [bgImage, setBgImage] = useState(() => {
        return window.innerWidth <= 600 ? assets.download_head_mobile : assets.download_head;
    });

    useEffect(() => {
        const updateBgImage = () => {
            if (window.innerWidth <= 600) {
                setBgImage(assets.download_head_mobile);
            } else {
                setBgImage(assets.download_head);
            }
        };

        window.addEventListener('resize', updateBgImage); // Update on window resize

        return () => {
            window.removeEventListener('resize', updateBgImage); // Clean up the event listener on component unmount
        };
    }, []);

    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        });
    }, []);

    return (
        <div>
            <TopBar />
            <Navbar />
            <div>
                <section
                    className="relative h-screen bg-center bg-cover bg-no-repeat"
                    id='bg_contact'
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="absolute inset-0 bg-[#f4f4f4] h-[40vh] bg-opacity-80 flex flex-col items-start justify-center px-8" id='contact_head_overlay'></div>
                    <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8">
                        <h1 className="text-black font-inter text-6xl font-[800]" id='serviceHead' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Downloads</h1>
                        <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-1 rounded-e-3xl' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
                        <p className='font-poppins font-medium text-xl pt-4 w-[45%]' id='servicePara' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                            Experience seamless property conveyancing at your fingertips with our user-friendly app! Download now to simplify your property transactions and stay on top of every detail with ease. Let’s get things moving with LoveHomes Conveyancing—your trusted partner in property management.
                        </p>
                    </div>
                </section>
            </div>
            
            <Suspense fallback={<div>Loading footer...</div>}>
            <div className='h-auto py-20 max-w-screen-2xl w-full flex items-center justify-center'>
                <div className='flex flex-row items-center justify-center h-auto content gap-10' id='downloaddiv'>
                    <div className='flex flex-col items-start justify-center h-auto w-3/4 '>
                        <h2 className='font-outfit font-semibold text-5xl' id='serviceHead1' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Downloads</h2>
                        <div className='w-24 h-[0.3rem] bg-[#f0532d] mt-1 rounded-lg' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
                        <div className='flex flex-col items-center justify-center mt-8'>
                            <div data-aos='fade-right' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200" className='w-full'>
                                <a href="https://play.google.com/store/apps/details?id=com.perfectportal.ppb2a61c3a03a04e76" target="_blank" rel="noopener noreferrer">
                                    <img src={assets.playstore} className='w-4/6 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' id='image_playstore' alt="Play Store" loading='lazy' />
                                </a>
                            </div>
                            <div data-aos='fade-right' data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">
                                <a href="https://apps.apple.com/au/app/love-homes/id1484461396" target="_blank" rel="noopener noreferrer">
                                    <img src={assets.appstore} className='w-[70%] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' id='image_appstore' alt="App Store" loading='lazy' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <img src={assets.download_main} className='rounded-xl' alt="" loading='lazy' />
                    </div>
                </div>
            </div>
         
                <Footer />
            </Suspense>

            {showScrollTopButton && (
                <button
                    onClick={scrollToTop}
                    className='scroll-top-button'
                >
                    <svg fill="#ffffff" height="44px" width="44px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-204.6 -204.6 739.20 739.20" xmlSpace="preserve" stroke="#ffffff" strokeWidth="7.26">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path>
                        </g>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Download;
