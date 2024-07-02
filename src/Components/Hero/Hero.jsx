import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './Hero.css';
import Cards from '../Cards/Cards';
import '../../Responsive.css';

const Hero = () => {
  const desktopBackgroundImages = [
    assets.Background_new,
    assets.Background_new2,
  ];

  const mobileBackgroundImages = [
    // assets.Background_new_mobile,
    // assets.Background_new2_mobile,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % (isMobile ? mobileBackgroundImages.length : desktopBackgroundImages.length));
        setFade(false);
      }, 500); // Match this time to the animation duration in CSS
    }, 7000);

    return () => clearInterval(intervalId);
  }, [isMobile, desktopBackgroundImages.length, mobileBackgroundImages.length]);

  const backgroundImages = isMobile ? mobileBackgroundImages : desktopBackgroundImages;

  return (
    <div className="relative w-full h-screen overflow-hidden pb-24">
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-fixed scale-[100%] bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      />
      <Cards />
    </div>
  );
};

export default Hero;
