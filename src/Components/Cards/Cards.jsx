import React, { useState, useEffect } from 'react';


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
        style={{ width: '300px' }}
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

const Cards = () => {

  return (
    <div>
      <div className='h-screen w-full px-24 py-5'>
        <div className='flex flex-col items-start justify-between h-screen'>
          <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-col space-y-4">
              <div class="wrapper font-outfit 2xl:text-[7rem] " id='rotating_Text'>
                <p className=''>Simpliy Your</p>
                <div class="words">
                  <span id='rotate'></span>
                  <span id='rotate'>Move</span>
                  <span id='rotate'>Search</span>
                  <span id='rotate'>Lifestyle</span>
                  <span id='rotate'>Stress</span>

                </div>
              </div>
            </div>
            <div>
              <p className='text-xs text-[#1B1817] text md:text-2xl xl:text-2xl 2xl:text-4xl tracking-[0.28rem]
font-poppins font-bold'>Get a Tailored Conveyancing Quote in Minutes!</p>
            </div>
          </div>
          <div className='flex flex-col items-start justify-center w-full'>
            <div>
              <p className="text-xl text-[#0d0d0d] 2xl:text-4xl md:text-2xl m font-poppins w-full  font-semibold md:text-[#0d0d0d]">Property <span className='text-[#f0532d]'>Conveyancing</span> </p>
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

            <button className="mt-8 bg-[#ffffff] text-[#0d0d0d] font-normal font-poppins pl-4 text-[1.6rem] flex items-center space-x-2 =z-30 text-center hover:translate-x-2 -tracking-wider transition-transform duration-300 cursor-pointer" id='borderHero' >
          <span>GET A QUOTE</span>
          <svg className="transform transition-transform duration-300 group-hover:translate-x-2" fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-33" y="-33" width="396.00" height="396.00" rx="0" fill="#f0532d" stroke-width="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
        </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cards