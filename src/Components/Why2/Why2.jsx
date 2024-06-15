import React from 'react';
import { assets } from '../../assets/assets';

const Why2 = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center py-20 my-48">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${assets.sydney})`, filter: 'brightness(0.7)' }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8">
        <h1 className="text-[7rem] leading-none text-left font-inter font-[800] text-white mt-[30rem]" id='WhyText1'>
          Why<br /><span className='text-[9rem] text-[#f0532d]' id='WhyText2'>Choose Us</span>
        </h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-28 pt-44 text-left px-52'>
            
        <div className="mb-8  font-outfit">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] ">We offer in-office and online consultations</h2>
          <p className="text-lg md:text-xl lg:text-2xl">You can tell us about your matter at the comfort of our office or your home. Whatever you choose, we'll deliver the same quality services and results.</p>
        </div>
        <div className="mb-8  font-outfit">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] ">We are PEXA Certified</h2>
          <p className="text-lg md:text-xl lg:text-2xl">We use PEXA to ensure fast and smooth service property settlements. This allows us to make our processes more efficient and convenient for our busy clients like you.</p>
        </div>
        <div className="mb-8  font-outfit">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] ">Exceptional customer service</h2>
          <p className="text-lg md:text-xl lg:text-2xl">Most of our clients are either repeat clients or referral from past clients. This is a testament to our outstanding service, personalised services and client-focused approach.</p>
        </div>
        <div className="mb-8  font-outfit">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] ">Exceptional customer service</h2>
          <p className="text-lg md:text-xl lg:text-2xl">Most of our clients are either repeat clients or referral from past clients. This is a testament to our outstanding service, personalised services and client-focused approach.</p>
        </div>
        </div>
        <button className="bg-[#f0532d] hover:bg-orange-600 font-inter text-[1rem] mt-10 text-white py-5 px-6 rounded-lg text-lg md:text-xl lg:text-2xl">Speak With A Solicitor</button>
      </div>
    </div>
  );
};

export default Why2;
