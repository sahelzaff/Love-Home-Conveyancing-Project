import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import '../../Homepage.css';
import '../../Responsive.css';

const Why2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImage = isMobile ? assets.sydney_mobile : assets.sydney;

  return (
    <div className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center p-20 mt-48" id='why2main'>
      <div
        className="absolute inset-0 bg-cover bg-center" id='background_why2'
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(1)' }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-8" id='WhyText'>
        <h1 className="text-[7rem] leading-none text-left font-inter font-[800] text-white mt-[30rem]" id='WhyText1' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
          Why<br /><span className='text-[9rem] text-[#f0532d]' id='WhyText2'>Choose Us</span>
        </h1>
        <h2 className=' pt-5 font-medium text-xl font-poppins ' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" id='why2paramain2'>At Love Home, our excellence in conveyancing makes us the top choice for clients.</h2>
        <h2 className=' pt-5 font-medium text-xl font-poppins  ' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" id='why2paramain1'>At Love Home, our commitment to excellence sets us apart as the qremier choice for all your conveyancing needs. Here's why clients continue to choose us with confidence</h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-x-28  pt-44 text-left bg-transparent' id='why2paralignment'>
          <div className='flex items-start ' id='mainparasrowdivwhy2'>
            <div className="text-[#f0532d] text-4xl md:text-4xl lg:text-6xl font-[900]" id='why2_numbers' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">1</div>
            <div className="mb-8  font-inter" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] font-bold whitespace-nowrap " id='whyHead'>Expertise and Experience</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-poppins" id='whyPara'>Our legal team is comprised of seasoned property lawyers with a wealth of experience and deep understanding of conveyancing matters. Whether your case is straightforward or complex, rest assured that our experts will provide professional guidance and cost-effective solutions tailored to your specific needs.</p>
            </div>
          </div>
          <div className='flex items-start ' id='mainparasrowdivwhy2'>
            <div className="text-[#f0532d] text-4xl md:text-4xl lg:text-6xl font-[900]" id='why2_numbers' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">2</div>
            <div className="mb-8  font-inter" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] font-bold " id='whyHead'>Personalized Service</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-poppins" id='whyPara'>We understand that every client and every property transaction is unique. That's why we prioritize personalized service, taking the time to listen to your concerns, understand your goals, and craft bespoke solutions that align with your individual requirements. With Love Home, you're not just another case – you're a valued partner on your journey to property success.</p>
            </div>
          </div>
          <div className='flex items-start ' id='mainparasrowdivwhy2'>
            <div className="text-[#f0532d] text-4xl md:text-4xl lg:text-6xl font-[900]" id='why2_numbers' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">3</div>

            <div className="mb-8  font-inter" data-aos='fade-up' data-aos-duration="1000 " data-aos-once="true">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] font-bold " id='whyHead'>Digital Convenience</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-poppins" id='whyPara'>Embracing technology, we offer a seamless and convenient conveyancing experience. Our intuitive online platform grants you 24/7 access to important documents, updates, and communication channels, ensuring transparency and accessibility at your fingertips. Say goodbye to paperwork hassles and hello to effortless digital convenience with Love Home.</p>
            </div>
          </div>
          <div className='flex items-start ' id='mainparasrowdivwhy2'>
            <div className="text-[#f0532d] text-4xl md:text-4xl lg:text-6xl font-[900]" id='why2_numbers' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">4</div>
            <div className="mb-8  font-inter" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] font-bold " id='whyHead'>Well Informed</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-poppins" id='whyPara'>Knowledge is power, and at Love Home, we empower our clients with timely and accurate information every step of the way. From initial consultations to final settlements, we keep you well informed about the progress of your transaction, answering your questions and addressing your concerns promptly and comprehensively. With us by your side, you'll feel confident and well-prepared for every decision you make.</p>
            </div>
          </div>
          <div className='flex items-start ' id='mainparasrowdivwhy2'>
            <div className="text-[#f0532d] text-4xl md:text-4xl lg:text-6xl font-[900]" id='why2_numbers' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">5</div>
            <div className="mb-8  font-inter" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-[#f0532d] font-bold whitespace-nowrap " id='whyHead'>Trusted & Good Support</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-poppins" id='whyPara'>Building trust is at the heart of everything we do. Our dedicated team is committed to providing you with unwavering support and guidance throughout your conveyancing journey. With our proven track record of reliability and integrity, you can trust Love Home to deliver exceptional service and stand by you every step of the way. Your success is our success, and we'll go above and beyond to ensure you achieve your property goals.</p>
            </div>
          </div>

        </div>
        <a href="https://calendly.com/sahelzaffarwork/property-conveyancing-consultation" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#f0532d]  hover:bg-orange-600 cursor-pointer font-inter font-bold text-[1rem] mt-10 text-white py-3 px-6 rounded-lg text-lg md:text-xl lg:text-2xl">Speak With A Solicitor</button>
        </a>
      </div>
    </div>
  );
};

export default Why2;
