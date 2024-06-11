import React from 'react';
import { assets } from '../../assets/assets';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="flex h-auto pt-20 pb-32 bg-[#F4F4F4]">
      <div className="w-full md:w-1/2 bg-transparent p-6 flex flex-col justify-start 2xl:p-12">
        <div className="flex flex-col space-y-4">
          <div className=" items-center space-x-2" id='text-div'>
            <div className=' flex flex-col items-start .space-x-2'>
              <p className='text-4xl font-bold  font-outfit md:pt-8' id='legal'>
                Legal Pitfalls to Avoid When </p>
              <h2 className='text-7xl font-extrabold font-outfit py-2' id='spancolor-text' >Purchasing Property:</h2>
              <p className='text-4xl font-outfit  font-bold tracking-[.5rem]' id='expert'>Expert Advice for Peace of Mind</p>

            </div>
          </div>
          <div className='md:pt-2 font-poppins text-sm'>
            <p className='pr-36' id='p-text'>Leave the hassle to me, and focus on what really matters to you.
              so you can chat directly with the qualified property lawyer.
            </p>
          </div>

          {/* <div className='md:pt-4'>
            <h2 className='font-outfit text-2xl font-semibold'>Mr Robin Carter-</h2>
            <p className='font-poppins md:pt-3 text-xl pr-10'>Principal Solicitor at Love Homes Conveyancing | 25 years of combined experience in accounting, law and business</p>
          </div> */}

          <div className='pt-20'>
            <a href="" className='text-xl font-poppins font-medium hover:text-[#f0532d] cursor-pointer' id='border_bottom'>My Stories</a>
          </div>
          <div className="pt-10">
            <a href="#" className="button cursor-pointer" id='buttonsec'>Let's Chat</a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 overflow-hidden flex justify-end items-center">
        <div className='relative'>
          <img src={assets.rc_w_text} className='w-[50rem] max-w-full' alt="" loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default Section2;
