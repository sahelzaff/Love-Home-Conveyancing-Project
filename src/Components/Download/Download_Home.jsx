import React from 'react'
import { assets } from '../../assets/assets'


const Download_Home = () => {
  return (
    <div>
         <div className='h-auto  pt-32 max-w-screen-2xl w-full flex items-center justify-center'>
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
    </div>
  )
}

export default Download_Home
