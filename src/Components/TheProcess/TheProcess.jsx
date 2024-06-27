import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import '../../Responsive.css'
import '../../Homepage.css'



const TheProcess = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full py-8 bg-[#f4f4f4] font-inter" style={{ backgroundImage: `url()`, backgroundSize: '60% auto', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
      <div className="lg:w-1/2 w-full py-8 h-full ml-28">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-[900] font-inter" id='processH'>
          The <span className="text-[#f0532d]">Process</span>
        </h1>
        <div className="mt-14 w-[60%]" id='processW'>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">1</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 font-inter text-[#f0532d]">Engagement</h2>
              <p className="text-[1.125rem] font-poppins">Customer engages a licensed conveyancer or solicitor specializing in online conveyancing.</p>
            </div>
          </div>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">2</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 font-inter text-[#f0532d] whitespace-nowrap">Consultation & Documentation</h2>
              <p className="text-[1.125rem]  font-poppins ">Conducts an initial consultation with the customer to gather information and details by document collection, and contract review.</p>
            </div>
          </div>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">3</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-inter text-[#f0532d]">Property Checks</h2>
              <p className="text-[1.125rem]  font-poppins">As a Conveyancer we conduct property searches and due diligence.</p>
            </div>
          </div>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">4</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-inter text-[#f0532d]">Financial Arrangements</h2>
              <p className="text-[1.125rem] font-poppins">Coordination of financial aspects and settlement preparation.</p>
            </div>
          </div>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">5</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-inter text-[#f0532d]">Settlement</h2>
              <p className="text-[1.125rem] font-poppins">Facilitation of ownership transfer and post-purchase support.</p>
            </div>
          </div>
          <div className="flex items-start ">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">6</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-inter text-[#f0532d]">Post-Purchase Support</h2>
              <p className="text-[1.125rem] font-poppins">The conveyancer ensures ongoing customer support post-settlement, including property registrations and legal guidance, to protect their interests</p>
            </div>
          </div>
          <div className='mt-2  mb-14 sm:pt-5'>
          <Link to="/service#work">
            <p className='cursor-pointer ml-20 font-inter font-bold text-[#f0532d] hover:text-black text-[1.125rem]'>Read More</p>
          </Link>
                    </div>
          
          <button className="bg-[#f0532d] hover:bg-orange-600 text-white py-3 px-6 ml-20 rounded-lg text-lg md:text-xl lg:text-3xl font-semibold" id='buttonProcess'>Speak With A Solicitor</button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:p-8">
        <img src={assets.process} alt="Process Background" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default TheProcess;
