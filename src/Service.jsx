import React, { useEffect, useRef } from 'react';
import ServiceInfo from './Components/ServiceInfo/ServiceInfo';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ServiceHome from './Components/ServiceHome/ServiceHome';
import './Homepage.css';
import WorkSection from './Components/WorkSection/WorkSection';
import ServiceReview from './Components/ServiceReview/ServiceReview';
import { assets } from './assets/assets';

const Service = () => {
  const reviewRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#reviews' && reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.hash === '#work' && workRef.current) {
      workRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Navbar/>
      <ServiceInfo/>
      <ServiceHome/>
      <div className='content' ref={workRef}>
        <WorkSection/>
      </div>
      <div className='relative h-[35vh] my-10 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${assets.pagedivider})` }}></div>
      <div className='content' ref={reviewRef}>
        <ServiceReview />
      </div>
      <Footer/>
    </div>
  );
};

export default Service;
