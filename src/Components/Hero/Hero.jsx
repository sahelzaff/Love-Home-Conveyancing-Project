import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './Hero.css';
import Cards from '../Cards/Cards';

const CustomSelect = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50 custom-select-container" style={{ marginRight: '100px' }}>
    <div
      className="relative w-full py-4 text-center bg-[rgb(248,248,255)] text-black font-montserrat font-bold border-2 border-[#f0532d] rounded leading-tight custom-select cursor-pointer"
      onClick={toggleDropdown}
      style={{ width: '300px'}}
    >
      {selectedOption || placeholder}
      <div className="absolute right-0 top-0 h-full flex items-center" style={{ backgroundColor: '#f5320d', width: '2.5rem' }}>
        <svg
          className={`absolute right-0 mr-2 transform ${isOpen ? '' : 'rotate-180'}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9l6 6 6-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    {isOpen && (
      <ul className="absolute z-50 w-full bg-white text-black border border-[white] rounded mt-1 bottom-full mb-5 menu open" style={{ width: '300px' }}>
        {options.map((option) => (
          <li
            key={option}
            className="py-2 px-4 cursor-pointer hover:bg-gray-700 menu-item"
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
    <div className="relative w-full h-auto bg-fixed bg-cover bg-center overflow-hidden pb-14" style={{ backgroundImage: `url(${assets.Background_new})` }}>
      <Cards/>
      </div>
     
  );
};

export default Hero;
