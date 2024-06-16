import React from 'react';
import { assets } from '../../assets/assets';
import '../../Responsive.css'
import '../../Homepage.css'



const TheProcess = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full py-8 bg-[#f4f4f4] font-inter">
      <div className="lg:w-1/2 w-full py-8 h-full ">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-[900]" id='processH'>
          The <span className="text-[#f0532d]">Process</span>
        </h1>
        <div className="mt-14 w-[60%]" id='processW'>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">1</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-inter">Initial Consultation</h2>
              <p className="text-lg md:text-xl lg:text-2xl">Contact us and we’ll schedule a consultation to discuss your legal needs and objectives, <br /><span className="font-bold">in-office or online</span>.</p>
            </div>
          </div>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">2</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Strategy Development</h2>
              <p className="text-lg md:text-xl lg:text-2xl">We’ll formalise our engagement and collaboratively develop a tailored strategy for your legal matter.</p>
            </div>
          </div>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">3</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Execution</h2>
              <p className="text-lg md:text-xl lg:text-2xl">We’ll handle all necessary steps, from documentation to negotiations, to successfully manage your case and achieve the best outcome.</p>
            </div>
          </div>
          <div className="flex items-start mb-14">
            <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-6xl font-[900]">4</div>
            <div className="ml-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Resolution</h2>
              <p className="text-lg md:text-xl lg:text-2xl">Once we achieve the resolution of your matter, we’ll finalise all details, and provide post-resolution support as needed.</p>
            </div>
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
