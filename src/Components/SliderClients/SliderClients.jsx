import React from 'react';
import './SliderClients.css';
import { assets } from '../../assets/assets';

const logos = [
  assets.logoBlackRed,
  assets.logoBlackRed,
  assets.logoBlackRed,
  assets.logoBlackRed,
  assets.logoBlackRed,
  assets.logoBlackRed,
  assets.logoBlackRed,
  assets.logoBlackRed,
];

const SliderClients = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-outfit text-center">
        Trusted By these <span className='text-[#f0532d]'>Satisfied Clients</span>
      </h2>
      <div className="relative h-24 w-full overflow-hidden">
        <div className="slider flex items-center">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className="logo h-10 w-20 sm:h-12 sm:w-24 md:h-20 md:w-80 mx-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderClients;
