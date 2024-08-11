import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import ServiceInfo from './Components/ServiceInfo/ServiceInfo';
import Navbar from './Components/Navbar/Navbar';
import './Homepage.css';
import { assets } from './assets/assets';
import TopBar from './Components/TopBar/TopBar';
import ServiceHome from './Components/ServiceHome/ServiceHome';
import WorkSection from './Components/WorkSection/WorkSection';
import ServiceReview from './Components/ServiceReview/ServiceReview';
import Footer from './Components/Footer/Footer';
import GoogleReviewsWidget from './Components/GoogleReviewsWidget';

// const ServiceHome = lazy(() => import('./Components/ServiceHome/ServiceHome'));
// const WorkSection = lazy(() => import('./Components/WorkSection/WorkSection'));
// const ServiceReview = lazy(() => import('./Components/ServiceReview/ServiceReview'));
// const Footer = lazy(() => import('./Components/Footer/Footer'));

const Service = () => {
  const reviewRef = useRef(null);
  const workRef = useRef(null);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

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

  useEffect(() => {
    if (window.location.hash === '#reviews' && reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.hash === '#work' && workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth'
      });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Helmet>
        <title>Services | Love Home Conveyancing</title>
        <meta name="description" content="Discover the range of property conveyancing services offered by Love Home Conveyancing in Australia." />
        <meta name="keywords" content="Love Home Conveyancing services, property conveyancing Australia, conveyancing solutions" />
      </Helmet>
      <TopBar />
      <Navbar />
      <ServiceInfo />
      <ServiceHome />

      <div className='content' ref={workRef}>
        <WorkSection />
      </div>
      <div className='relative h-[35vh] my-10 bg-center bg-cover bg-no-repeat' id='pagedivider' style={{ backgroundImage: `url(${assets.pagedivider})` }}></div>
      <div className='content' ref={reviewRef}>
        <ServiceReview />
      </div>
      
      <Footer />
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className='scroll-top-button'
        >
          <svg fill="#ffffff" height="44px" width="44px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-204.6 -204.6 739.20 739.20" xmlSpace="preserve" stroke="#ffffff" strokeWidth="7.26">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Service;
