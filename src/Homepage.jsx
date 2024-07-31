import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar/Navbar';
import Hero2 from './Components/Hero2/Hero2';
import TopBar from './Components/TopBar/TopBar';
import './Homepage.css';
import { assets } from './assets/assets';

// Lazy load non-critical components
const BenefitsComponent = lazy(() => import('./Components/BenefitsComponent/BenefitsComponent'));
const CustomerReviews = lazy(() => import('./Components/CustomerReviews/CustomerReviews'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const WorkSection = lazy(() => import('./Components/WorkSection/WorkSection'));
const TextReveal = lazy(() => import('./Components/TextReveal/TextReveal'));
const WhySection = lazy(() => import('./Components/WhySection/WhySection'));
const ServiceHome = lazy(() => import('./Components/ServiceHome/ServiceHome'));
const Faq = lazy(() => import('./Components/Faq/Faq'));
const Hero = lazy(() => import('./Components/Hero/Hero'));
const Section3New = lazy(() => import('./Components/Section3New/Section3New'));
const SliderClients = lazy(() => import('./Components/SliderClients/SliderClients'));
const Why2 = lazy(() => import('./Components/Why2/Why2'));
const Video = lazy(() => import('./Components/video/video'));
const Cards = lazy(() => import('./Components/Cards/Cards'));
const TheProcess = lazy(() => import('./Components/TheProcess/TheProcess'));
const Download_Home = lazy(() => import('./Components/Download/Download_Home'));

const Homepage = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleModalClick = () => {
    navigate('/download-lovehomes-conveyancing-app');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Love Home Conveyancing | Property Conveyancing in Australia</title>
        <meta name="description" content="Welcome to Love Home Conveyancing. We provide professional and efficient property conveyancing services across Australia. Our experienced team ensures a smooth property transfer process." />
        <meta name="keywords" content="Love Home Conveyancing, property conveyancing, conveyancing services Australia, home conveyancing, real estate conveyancing" />
        <meta name="author" content="Love Home Conveyancing" />
      </Helmet>
      <TopBar />
      <Navbar className="w-full z-50" />
      <div className="bg-[#0d0d0d]">
        <Hero2 />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="Homepage">
          <div className="flex flex-col items-center justify-center">
            <BenefitsComponent />
          </div>
        </div>
        <div className="Homepage1">
          <Hero />
        </div>
        <div className="relative z-10">
          <Video />
        </div>
        <div className="Homepage1">
          <CustomerReviews />
        </div>
        <div className="Homepage">
          <TheProcess />
        </div>
        <Why2 />
        <WhySection />
        {/* <div className="Homepage">
          <Download_Home />
        </div> */}
        <div className="Homepage">
          <Faq />
        </div>
        <Footer />
      </Suspense>

      {showScrollTopButton && (
        <button onClick={scrollToTop} className="scroll-top-button">
          <svg
            fill="#ffffff"
            height="44px"
            width="44px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-204.6 -204.6 739.20 739.20"
            xmlSpace="preserve"
            stroke="#ffffff"
            strokeWidth="7.26"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
              ></path>
            </g>
          </svg>
        </button>
      )}

      {showModal && (
<<<<<<< Updated upstream
        <div className="modal h-auto">
=======
        <div className="modal">
>>>>>>> Stashed changes
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={assets.Lovehome_ad_modal} className='cursor-pointer' alt="Love Home Ad" onClick={handleModalClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
