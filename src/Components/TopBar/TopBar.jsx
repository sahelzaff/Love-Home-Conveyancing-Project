import React from 'react';
import { assets } from '../../assets/assets';
import './TopBar.css';
import '../../Homepage.css'


const TopBar = () => {
  return (
    <div className="bg-[#f0532d] text-[#fff] py-2">
      <div className="max-w-screen-3xl flex items-center mx-6 justify-between Homepage">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer">
            <a href="tel:+61468908807" className="flex items-center space-x-2 ">
              <img src={assets.phone_call} alt="Phone Call" className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-[1rem] font-normal font-inter">+61 468 908 807</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <a href="mailto:hello@love-homes.com.au" className="flex items-center space-x-2 ">
              <img src={assets.email} alt="Mail" className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="text-xs sm:text-[1rem] font-normal font-inter">hello@love-homes.com.au</span>
            </a>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:space-x-2 hidden">
          <img
            src={assets.facebook}
            alt="Facebook"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://www.facebook.com/lovehomesconveyancing/', '_blank')}
          />
          <img
            src={assets.whatsapp_top}
            alt="Whatsapp"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://wa.link/97756f', '_blank')}
          />
          <img
            src={assets.insta}
            alt="Instagram"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://www.instagram.com/lovehomesconveyancing/', '_blank')}
          />
          <img
            src={assets.linkedin}
            alt="LinkedIn"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://www.linkedin.com/company/lovehomesconveyancing/', '_blank')}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
