import React from 'react';
import { assets } from './assets/assets';
import './Responsive.css'

const quotes = [
    "Turning your dream property into reality, one signature at a time.",
    "Simplifying the path to your perfect home, one document at a time.",
    "Seamlessly guiding you through every step of your property journey.",
    "Ensuring peace of mind in every property transaction.",
    "Expertly navigating the complexities, so you can enjoy the rewards.",
    "Your property dreams are our top priority, from contract to key.",
    "Transforming aspirations into addresses, one key at a time.",
    "Crafting your dream home journey, one milestone at a time.",
    "From dreams to deeds, we make your property ambitions a reality.",
    "Guiding you through the maze of real estate, one decision at a time.",
    "Making your home ownership journey smooth and stress-free.",
    "Bringing your vision to life, one home at a time.",
    "Unlocking the door to your future, one signature at a time.",
    "Your dream home, our dedicated mission.",
    "Simplifying home ownership, one step at a time.",
    "Your peace of mind is our priority in every real estate transaction.",
    "Expertly handling the details, so you can focus on your new home.",
    "From search to signing, we’re with you every step of the way.",
    "Turning real estate dreams into reality, one closing at a time.",
    "Guiding you home with expertise and care.",
    "Navigating the property market with precision and passion."
];

const LoadingPage = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className='h-screen '>

            <div className='h-screen bg-[#e5e4e4] flex flex-col justify-center  items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <img src={assets.logoBlackRed} className='w-2/5 ' alt="Logo" id='logo_loading' />
                    </div>

                    <div role="status" className=''>
                    <dotlottie-player
                            src="https://lottie.host/62bafd8f-2603-4d18-ae48-b1a23b8946d7/O8zXoE7F10.lottie"
                            background="transparent"
                            speed="1"
                            style={{ width: '300px', height: '180px' }}
                            id="loaderQuote"
                            loop
                            autoplay
                        ></dotlottie-player>

                    </div>
                </div>

                <div>
                    <p className='text-lg italic px-2 text-center font-poppins '>“ {randomQuote} ”</p>
                </div>
            </div>
        </div>
    );
}

export default LoadingPage;



