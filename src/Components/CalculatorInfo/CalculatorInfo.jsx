import React, { useState,useEffect } from 'react';
import { assets } from '../../assets/assets'


const CalculatorInfo = () => {

  const [bgImage, setBgImage] = useState(() => {
    // Set initial background image based on initial window width
    return window.innerWidth <= 600 ? assets.calculatorhead_mobile : assets.calculatorhead;
});

useEffect(() => {
    const updateBgImage = () => {
        if (window.innerWidth <= 600) {
            setBgImage(assets.calculatorhead_mobile);
        } else {
            setBgImage(assets.calculatorhead);
        }
    };

    window.addEventListener('resize', updateBgImage); // Update on window resize

    return () => {
        window.removeEventListener('resize', updateBgImage); // Clean up the event listener on component unmount
    };
}, []);
  return (
    <div>
    <section className="relative h-screen bg-center bg-cover bg-no-repeat" id='bg_contact' style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="absolute inset-0 bg-[#f4f4f4] h-[40vh] bg-opacity-80 flex flex-col items-start justify-center px-8" id='contact_head_overlay'></div>
        <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8 mt-36" id='calculatordiv'>
            <h1 className="text-black font-inter text-5xl font-[800]" id='calculatorheadingpagemain'>Conveyancing Calculator</h1>
            <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-1 ml-2' id='horizontalline_sublines1'></div>
            <p className='font-inter font-medium text-[1.5rem] font-sm pt-4 w-[40%]' id='ContactPara'>Our Conveyancing Calculator page provides essential information for property transactions, offering seamless access to estimates and costs. Navigate confidently with our user-friendly tool, supported by our experienced team for any assistance you need.
            </p>
        </div>
    </section>
</div>
  )
}

export default CalculatorInfo