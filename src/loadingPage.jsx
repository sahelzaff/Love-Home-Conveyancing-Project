import React from 'react';
import { assets } from './assets/assets';

const quotes = [
    "Turning your dream property into reality, one signature at a time.",
    "Simplifying the path to your perfect home, one document at a time.",
    "Seamlessly guiding you through every step of your property journey.",
    "Ensuring peace of mind in every property transaction.",
    "Expertly navigating the complexities, so you can enjoy the rewards.",
    "Your property dreams are our top priority, from contract to key."
];

const LoadingPage = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className='h-screen '>

        <div className='h-screen bg-[#e5e4e4] flex flex-col justify-center  items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <img src={assets.logoBlackRed} className='w-2/5 ' alt="Logo" />
                </div>

                <div role="status" className='s'>
                    <dotlottie-player
                        src="https://lottie.host/62bafd8f-2603-4d18-ae48-b1a23b8946d7/O8zXoE7F10.lottie"
                        background="transparent"
                        speed="1"
                        style={{ width: '300px', height: '180px' }}
                        loop
                        autoplay
                        ></dotlottie-player>
                </div>
            </div>

                <div>
                    <p className='text-lg italic font-poppins '>“ {randomQuote} ”</p>
                </div>
        </div>
                        </div>
    );
}

export default LoadingPage;
