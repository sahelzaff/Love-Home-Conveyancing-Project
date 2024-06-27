import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import LoadingPage from './loadingPage';
import Contact from './Contact';
import Service from './Service';
import Blogs from './Blogs';
import BlogDetailsPage from './BlogDetailsPage';
import Calculator from './Calculator';
import Buying from './Buying';
import Selling from './Selling';
import Transferring from './Transferring';
import Contract_Advice from './Contract_Advice';
import PrivacyPage from './PrivacyPage';
import Disclaimer from './Disclaimer';
import TermsPage from './TermsPage';
import AboutUs from './AboutUs';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <>
        {isLoading ? <LoadingPage /> : (
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
          </Routes>
        )}
      </>
    </Router>
  );
};

export default App;


