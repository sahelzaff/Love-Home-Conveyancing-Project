import React, { useState, useRef, useEffect } from "react";
import { assets } from '../../assets/assets';
import './BenefitsComponent.css';

const BenefitsComponent = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  return (
    <div className="bg-[#F4F4F4] p-8 h-auto pb-36">
      <div className="max-w-screen-4xl mx-auto text-black flex flex-col justify-center items-start">
        <h1 className="text-start text-4xl 2xl:text-7xl md:text-[3.2rem] font-outfit font-bold mb-3 leading-none">
          Experience The Benefits<br /><span className="text-[#f0532d]">Simplified With Our Service</span>
        </h1>
        <p className="text-[#1B1817] text-center mb-24 text-xl font-poppins 2xl:text-2xl xl:text-xl">
          At love home, we redefine conveyancing by prioritizing simplicity and convenience.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-auto">
          <div className="card1 bg-[#f0532d] text-white p-6 rounded-lg  shadow-lg w-[23rem] max-w-[25rem] mx-auto cursor-">
            <img src={assets.Benefit1} alt="Talent Shortage" className="w-full h-50 object-cover mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold mt-10 text-center font-outfit text-[#1B1817]">Seamless Digital Experience</h2>
            <p className="mt-4 text-[1rem] text-center tracking-[-0.5px] font-poppins leading-normal max-w-prose mx-auto text-[#f4f4f4] font-medium">
              Experience the ease of digital convenience with transparent, 24/7 access to documents, updates, and messages. Whether you're at home or on the move, all content is seamlessly delivered to any mobile device, keeping you informed every step of the way.
            </p>
          </div>
          <div className="card2 bg-[#f0532d] text-white p-6 rounded-lg shadow-lg w-[23rem] max-w-[25rem] mx-auto cursor-">
            <img src={assets.Benefit2} alt="Competitive Market" className="w-full h-50 object-cover mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold mt-10 text-center font-outfit text-[#1B1817]">Stress-Free Communication</h2>
            <p className="mt-4 text-[1rem] text-center tracking-[-0.5px] font-poppins leading-normal max-w-prose mx-auto text-[#f4f4f4] font-medium">
              Say goodbye to stress with our streamlined communication process. All correspondence is securely delivered to you, your agent, and your broker in one online space hosted by your dedicated solicitor. This means you can communicate directly with your qualified property lawyer, ensuring clarity and efficiency throughout the transaction.
            </p>
          </div>
          <div className="card3 bg-[#f0532d] text-white p-6 rounded-lg shadow-lg w-[23rem] max-w-[25rem] mx-auto cursor-">
            <img src={assets.Benefit3} alt="Skills Mismatch" className="w-full h-50 object-cover mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold mt-10 text-center font-outfit text-[#1B1817]">Trusted and Proven</h2>
            <p className="mt-4 text-[1rem] text-center tracking-[-0.5px] font-poppins leading-normal max-w-prose mx-auto text-[#f4f4f4] font-medium">
              At the core of our service is trust and reliability. We prioritize our customers and handle property deals with ease, speed, and confidence, ensuring a smooth and successful experience every time. Discover the difference with love home, where conveyancing is made simple.
            </p>
          </div>
        </div> */}
      </div>


      <div className='flex flex-row justify-center items-center gap-6'> 
        {/* card-1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-height w-1/2" id='box-shadow'>
      <a href="#">
        <img className="rounded-t-lg ml-5 rounded-xl w-2/6" src={assets.Benefit1} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-outfit">
          Seamless Digital Experience
          </h5>
        </a>
        <div className="relative overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: contentHeight }}>
          <p ref={contentRef} className="font-normal text-gray-700 dark:text-gray-400 font-poppins">
          Experience the ease of digital convenience with transparent, 24/7 access to documents, updates, and messages. Whether you're at home or on the move, all content is seamlessly delivered to any mobile device, keeping you informed every step of the way.
          </p>
        </div>
        <button 
          onClick={toggleExpand} 
          className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#f0532d] rounded-lg hover:bg-[#f0532dec] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#f0532d] dark:focus:ring-[#f0532dec] cursor-pointer font-montserrat"
        >
          {isExpanded ? "Read less" : "Read more"}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>

        {/* Card-2 */}
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id='box-shadow'>
      <a href="#">
        <img className="rounded-t-lg ml-5 rounded-xl w-2/6" src={assets.Benefit2} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-outfit">
          Stress-Free Communication
          </h5>
        </a>
        <div className="relative overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: contentHeight }}>
          <p ref={contentRef} className="font-normal text-gray-700 dark:text-gray-400 font-poppins">
          Say goodbye to stress with our streamlined communication process. All correspondence is securely delivered to you, your agent, and your broker in one online space hosted by your dedicated solicitor. This means you can communicate directly with your qualified property lawyer, ensuring clarity and efficiency throughout the transaction.
          </p>
        </div>
        <button 
          onClick={toggleExpand} 
          className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#f0532d] rounded-lg hover:bg-[#f0532dec] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#f0532d] dark:focus:ring-[#f0532dec] cursor-pointer font-montserrat"
        >
          {isExpanded ? "Read less" : "Read more"}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>

        {/* Card-3 */}
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id='box-shadow'>
      <a href="#">
        <img className="rounded-t-lg ml-5 rounded-xl w-2/6" src={assets.Benefit3} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-outfit">
          Trusted and Proven
          </h5>
        </a>
        <div className="relative overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: contentHeight }}>
          <p ref={contentRef} className="font-normal text-gray-700 dark:text-gray-400 font-poppins">
          At the core of our service is trust and reliability. We prioritize our customers and handle property deals with ease, speed, and confidence, ensuring a smooth and successful experience every time. Discover the difference with love home, where conveyancing is made simple.
          </p>
        </div>
        <button 
          onClick={toggleExpand} 
          className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#f0532d] rounded-lg hover:bg-[#f0532dec] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#f0532d] dark:focus:ring-[#f0532dec] cursor-pointer font-montserrat"
        >
          {isExpanded ? "Read less" : "Read more"}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
      </div>


    </div>
  );
};

export default BenefitsComponent;
