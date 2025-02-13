import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Homepage from './Homepage';

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
  return (
    <Router>
      <Suspense fallback={<></>}>
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
    </Router>
  );
};

export default App;
