import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './Hero.css';
import Cards from '../Cards/Cards';
import '../../Responsive.css'


const Hero = () => {
  const backgroundImages = [
    assets.Background_new,
    assets.Background_new2,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        setFade(false);
      }, 500); // Match this time to the animation duration in CSS
    }, 7000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

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
