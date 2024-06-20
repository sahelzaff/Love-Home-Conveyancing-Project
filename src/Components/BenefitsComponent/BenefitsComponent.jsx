import React from "react";
import { assets } from '../../assets/assets';
import './BenefitsComponent.css';
import '../../Responsive.css'

const BenefitsComponent = () => {
  return (
    <div className="bg-[#f4f4f4]  h-auto pb-36 w-[75%]" id="benefitMain" >
      <div className="max-w-screen-4xl mx-auto  text-black flex flex-col justify-center items-start" id="benefitDiv">
        <h1 className="text-start text-2xl font-inter font-bold mb-3 leading-none" id="benefitTitle">
          Experience The Benefits<br /><span className="text-[#f0532d]" id="benefitTitleSpan">Simplified With Our Service.</span>
        </h1>
        <p className="text-[#1B1817] text-center mb-24 text-xl font-poppins" id="benefitText">
          At love home, we redefine conveyancing by prioritizing simplicity and convenience.
        </p>
      </div>
      {/*  */}
      <div class='flex flex-row justify-evenly items-center gap-6' id="cardDiv" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" >
  {/* <!-- Card 1 --> */}
  <div class="card">
    <div class="first-content hidden">
      <img class="rounded-t-lg rounded-xl w-2/6 icons" src={assets.Benefit1} alt="" />
      <h5 class="card-title">Seamless Digital Experience</h5>
    </div>
    <div class="second-content">
      <img class="rounded-t-lg rounded-xl w-2/6 icons" src={assets.Benefit1} alt="" />
      <h5 class="card-title">Seamless Digital Experience</h5>
      <div class='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] mb-3 sm:my-4 md:mb-5 rounded-e-md'></div>
      <p class="card-text">
        Experience the ease of digital convenience with transparent, 24/7 access to documents, updates, and messages. Whether you're at home or on the move, all content is seamlessly delivered to any mobile device, keeping you informed every step of the way.
      </p>
    </div>
  </div>

  {/* <!-- Card 2 --> */}
  <div class="card">
    <div class="first-content hidden">
      <img class="rounded-t-lg rounded-xl w-2/6 icons" src={assets.Benefit2} alt="" />
      <h5 class="card-title">Stress Free Communication</h5>
    </div>
    <div class="second-content">
      <img class="rounded-t-lg rounded-xl w-2/6 icons" src={assets.Benefit2} alt="" />
      <h5 class="card-title">Stress Free Communication</h5>
      <div class='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] mb-3 sm:my-4 md:mb-5 rounded-e-md'></div>
      <p class="card-text">
        Say goodbye to stress with our streamlined communication process. All correspondence is securely delivered to you, your agent, and your broker in one online space hosted by your dedicated solicitor. This means you can communicate directly with your qualified property lawyer, ensuring clarity and efficiency throughout the transaction.
      </p>
    </div>
  </div>

  {/* <!-- Card 3 --> */}
  <div class="card">
    <div class="first-content hidden">
      <img class="rounded-t-lg rounded-xl w-2/6 icons" src={assets.Benefit3} alt="" />
      <h5 class="card-title">Trusted and Proven</h5>
    </div>
    <div class="second-content">
      <img class="rounded-t-lg rounded-xl w-2/6 icons" src={assets.Benefit3} alt="" />
      <h5 class="card-title">Trusted and Proven</h5>
      <div class='w-24 sm:w-32 md:w-40 lg:w-44 h-[0.3rem] bg-[#f0532d] mb-3 sm:my-4 md:mb-5 rounded-e-md'></div>
      <p class="card-text">
        At the core of our service is trust and reliability. We prioritize our customers and handle property deals with ease, speed, and confidence, ensuring a smooth and successful experience every time. Discover the difference with love home, where conveyancing is made simple.
      </p>
    </div>
  </div>
</div>


    </div>
  );
};

export default BenefitsComponent;
