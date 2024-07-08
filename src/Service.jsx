import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import ServiceInfo from './Components/ServiceInfo/ServiceInfo';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ServiceHome from './Components/ServiceHome/ServiceHome';
import './Homepage.css';
import WorkSection from './Components/WorkSection/WorkSection';
import ServiceReview from './Components/ServiceReview/ServiceReview';
import { assets } from './assets/assets';
import TopBar from './Components/TopBar/TopBar';

const Service = () => {
  const reviewRef = useRef(null);
  const workRef = useRef(null);

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

  return (
    <div>
       <Helmet>
        <title>Services | Love Home Conveyancing</title>
        <meta name="description" content="Discover the range of property conveyancing services offered by Love Home Conveyancing in Australia." />
        <meta name="keywords" content="Love Home Conveyancing services, property conveyancing Australia, conveyancing solutions" />
      </Helmet>
      <TopBar/>
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
    </div>
  );
};

export default Service;
