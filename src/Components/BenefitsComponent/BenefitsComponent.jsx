import React from "react";
import { assets } from '../../assets/assets';
import './BenefitsComponent.css';
import '../../Responsive.css'

const BenefitsComponent = () => {
  return (
    <div className="bg-[#F4F4F4] p-8 h-auto pb-36 w-2/3" id="benefitMain" >
      <div className="max-w-screen-4xl mx-auto text-black flex flex-col justify-center items-start" id="benefitDiv">
        <h1 className="text-start text-4xl font-outfit font-bold mb-3 leading-none" id="benefitTitle">
          Experience The Benefits<br /><span className="text-[#f0532d]" id="benefitTitleSpan">Simplified With Our Service.</span>
        </h1>
        <p className="text-[#1B1817] text-center mb-24 text-xl font-poppins" id="benefitText">
          At love home, we redefine conveyancing by prioritizing simplicity and convenience.
        </p>
      </div>

      <div className='flex flex-row justify-evenly items-center gap-6' id="cardDiv"> 
        {/* card-1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg transition-height w-2/3 height card-hover cursor-pointer" id='box-shadow' data-aos='fade-out' data-aos-duration="1000">
          
            <img className="rounded-t-lg ml-5 rounded-xl w-2/6 pt-10 icons" src={assets.Benefit1} alt="" />
        
          <div className="p-5">
            
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-outfit" id="cardTitle1">
                Seamless Digital Experience
              </h5>
              <div className='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] my-3 sm:my-4 md:my-5 rounded-e-md'></div>
            
            <div className="relative overflow-hidden transition-all duration-300 ease-in-out card-content">
              <p className="font-normal text-gray-700 dark:text-gray-400 font-poppins" id="cardText">
                Experience the ease of digital convenience with transparent, 24/7 access to documents, updates, and messages. Whether you're at home or on the move, all content is seamlessly delivered to any mobile device, keeping you informed every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* card-2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg transition-height w-2/3 height card-hover cursor-pointer" id='box-shadow' data-aos='fade-out' data-aos-duration="1000">
         
            <img className="rounded-t-lg ml-5 rounded-xl w-2/6 pt-10 icons" src={assets.Benefit2} alt="" />
         
          <div className="p-5">
            
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-outfit" id="cardTitle">
                Stress-Free Communication
              </h5>
              <div className='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] my-3 sm:my-4 md:my-5 rounded-e-md'></div>
            
            <div className="relative overflow-hidden transition-all duration-300 ease-in-out card-content">
              <p className="font-normal text-gray-700 dark:text-gray-400 font-poppins" id="cardText">
                Say goodbye to stress with our streamlined communication process. All correspondence is securely delivered to you, your agent, and your broker in one online space hosted by your dedicated solicitor. This means you can communicate directly with your qualified property lawyer, ensuring clarity and efficiency throughout the transaction.
              </p>
            </div>
          </div>
        </div>

        {/* card-3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg transition-height w-2/3 height card-hover cursor-pointer" id='box-shadow' data-aos='fade-out' data-aos-duration="1000">
          
            <img className="rounded-t-lg ml-5 rounded-xl w-2/6 pt-10 icons" src={assets.Benefit3} alt="" />
          
          <div className="p-5">
            
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-outfit" id="cardTitle3">
                Trusted and Proven
              </h5>
              <div className='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] my-3 sm:my-4 md:my-5 rounded-e-md'></div>
            
            <div className="relative overflow-hidden transition-all duration-300 ease-in-out card-content">
              <p className="font-normal text-gray-700 dark:text-gray-400 font-poppins" id="cardText">
                At the core of our service is trust and reliability. We prioritize our customers and handle property deals with ease, speed, and confidence, ensuring a smooth and successful experience every time. Discover the difference with love home, where conveyancing is made simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsComponent;
