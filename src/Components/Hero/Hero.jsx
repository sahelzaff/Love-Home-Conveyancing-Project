import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './Hero.css';

const CustomSelect = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64 z-50">
      <div
        className="relative w-full py-3 pl-4 pr-8 text-center bg-[rgb(248,248,255)] text-black border border-2 border-[white] rounded leading-tight focus:outline-none custom-select cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption || placeholder}
        <div className="absolute right-0 top-0 h-full flex items-center bg-orange-500" style={{ backgroundColor: '#0086C3', width: '2.5rem' }}>
          <svg
            className={`absolute right-0 mr-2 transform ${isOpen ? '' : 'rotate-180'}`}
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 9l6 6 6-6" stroke="#ffffff" fill strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className="absolute z-50 w-full bg-white text-black border border-white rounded mt-1 bottom-full mb-1">
          {options.map((option) => (
            <li
              key={option}
              className="py-2 px-4 cursor-pointer hover:bg-gray-700"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Hero = () => {
  const [isMdSize, setIsMdSize] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdSize(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${assets.background})` }}>
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center text-white  md:px-4 pb-20 z-40 xl:pt-28 max-w-screen-xl mx-auto">
        <h1 className="text-7xl -tracking-wide pt-56 md:tracking-normal md:pt-6 md:text-[5.1rem] font-bold text-center  md:text-left font-gotham w-full">
          Simplify Your Move.
        </h1>
        <div className='relative w-full mt-4'>
          <p className="text-xs text-[#FFFFFF] text md:text-2xl pt-4 md:px-6 md:pt-6 text-center md:text-start tracking-widest font-poppins font-bold md:text-white w-full md:w-auto">
            Get a Tailored Conveyancing Quote in Minutes!
          </p>
        </div>
        <div className='relative w-full pt-64 px-4 md:pt-24'>
          <p className="text-xl text-[#0d0d0d]  md:text-2xl md:pt-3 text-left font-poppins w-full md:w-auto font-medium md:text-[#0d0d0d]">Property <span className=''>Conveyancing</span> </p>
        </div>

        <div className="flex flex-col md:flex-row items-center pt-4 space-y-4 md:space-y-0 md:space-x-4 w-full">
          <CustomSelect
            options={['Buying', 'Selling', 'Transferring']}
            placeholder="Buying or Selling?"
            className="w-full md:w-1/3"
          />
          <CustomSelect
            options={['House', 'Land', 'Apartment', 'TownHouse', 'Villa', 'Other']}
            placeholder="Property Type"
            className="w-full md:w-1/3"
          />
          <CustomSelect
            options={['New South Wales', 'QueensLand', 'South Australia', 'Victoria', 'Tasmania', 'Western Australia']}
            placeholder="State"
            className="w-full md:w-1/3"
          />
        </div>

        <button className="mt-8 bg-[#ffffff] text-[#0d0d0d] font-normal font-poppins pl-4 text-[1.6rem] flex items-center space-x-2 border-2 border-[#0d0d0d] z-30 text-center hover:translate-x-2 -tracking-wider transition-transform duration-300">
          <span>GET A QUOTE</span>
          <svg className="transform transition-transform duration-300 group-hover:translate-x-2" fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-33" y="-33" width="396.00" height="396.00" rx="0" fill="#0086C3" stroke-width="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
        </button>
      </div>
      <svg
        id="wave"
        className={`absolute bottom-0 left-0 w-full ${isMdSize ? 'md-wave' : 'lg-wave'}`}
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#0086C3" d="M0,98L40,147C80,196,160,294,240,334.8C320,376,400,359,480,334.8C560,310,640,278,720,245C800,212,880,180,960,138.8C1040,98,1120,49,1200,24.5C1280,0,1360,0,1440,0C1520,0,1600,0,1680,24.5C1760,49,1840,98,1920,138.8C2000,180,2080,212,2160,253.2C2240,294,2320,343,2400,359.3C2480,376,2560,359,2640,326.7C2720,294,2800,245,2880,187.8C2960,131,3040,65,3120,40.8C3200,16,3280,33,3360,98C3440,163,3520,278,3600,343C3680,408,3760,425,3840,375.7C3920,327,4000,212,4080,171.5C4160,131,4240,163,4320,204.2C4400,245,4480,294,4560,269.5C4640,245,4720,147,4800,98C4880,49,4960,49,5040,106.2C5120,163,5200,278,5280,326.7C5360,376,5440,359,5520,318.5C5600,278,5680,212,5720,179.7L5760,147L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path>
      </svg>
      <img src={assets.magnifier} alt="Magnifier"  id='magnifierTransform' className="absolute bottom-0 right-0 w-1/3 md:w-1/4 lg:w-1/6 custom-transform z-40" />
    </div>
  );
};

export default Hero;
