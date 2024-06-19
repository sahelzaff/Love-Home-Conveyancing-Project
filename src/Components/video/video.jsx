import React from 'react';
import { assets } from '../../assets/assets';
import '../../Homepage.css'
import '../../Responsive.css'




const VideoBackground = () => {
  return (
    <div className="relative h-screen w-full">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src={assets.video} 
        autoPlay 
        loop 
        muted 
      />
      <div className="absolute inset-0 flex items-center justify-start w-4/5 mb-10 Homepage1" id='videoTextDiv'>
        <h1 className="text-white text-6xl font-meduim font-outfit " id='videoText1' data-aos='fade-up' data-aos-duration="1000" >Experience seamless property transactions with <span className='text-[#f0532d] text-9xl font-extrabold font-outfit' id='videoText2'>Peace Of Mind,</span>
        <br />every step of the way.</h1>
      </div>
    </div>
  );
}

export default VideoBackground;
