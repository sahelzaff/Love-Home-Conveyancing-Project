import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Homepage from './Homepage';
import LoadingPage from './loadingPage';
import { assets } from './assets/assets';

const Homepage = lazy(() => import('./Homepage'));
const Contact = lazy(() => import('./Contact'));
const Service = lazy(() => import('./Service'));
const Blogs = lazy(() => import('./Blogs'));
const BlogDetailsPage = lazy(() => import('./BlogDetailsPage'));
const Calculator = lazy(() => import('./Calculator'));
const Buying = lazy(() => import('./Buying'));
const Selling = lazy(() => import('./Selling'));
const Transferring = lazy(() => import('./Transferring'));
const Contract_Advice = lazy(() => import('./Contract_Advice'));
const PrivacyPage = lazy(() => import('./PrivacyPage'));
const Disclaimer = lazy(() => import('./Disclaimer'));
const TermsPage = lazy(() => import('./TermsPage'));
const AboutUs = lazy(() => import('./AboutUs'));
const Download = lazy(() => import('./Download'));

const App = () => {
  const [isHomepageLoading, setIsHomepageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHomepageLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isHomepageLoading ? (
        <LoadingPage />
      ) : (
        <Suspense fallback={<div className='h-screen '>

          <div className='h-screen bg-[#e5e4e4] flex flex-col justify-center  items-center'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex flex-row justify-center items-center gap-4'>
                <img src={assets.logoBlackRed} className='w-2/5 ' alt="Logo" id='logo_loading' />
              </div>

              <div role="status" className=''>
                <dotlottie-player
                  src="https://lottie.host/62bafd8f-2603-4d18-ae48-b1a23b8946d7/O8zXoE7F10.lottie"
                  background="transparent"
                  speed="1"
                  style={{ width: '300px', height: '180px' }}
                  id="loaderQuote"
                  loop
                  autoplay
                ></dotlottie-player>

              </div>
            </div>

            <div>
              <p className='text-lg italic px-2 text-center font-poppins '>“Turning your dream property into reality, one signature at a time. ”`</p>
            </div>
          </div>
        </div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/*" element={<Service />} />
            <Route path="/blogs/*" element={<Blogs />} />
            <Route path="/post/:id" element={<BlogDetailsPage />} />
            <Route path="/calculator/*" element={<Calculator />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/property-transfer" element={<Transferring />} />
            <Route path="/contract-advice" element={<Contract_Advice />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-&-conditions" element={<TermsPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/download-lovehomes-conveyancing-app" element={<Download />} />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
};

export default App;
