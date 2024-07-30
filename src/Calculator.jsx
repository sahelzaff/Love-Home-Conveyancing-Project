import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar/Navbar';
import CalculatorInfo from './Components/CalculatorInfo/CalculatorInfo';
import { QuoteProvider } from './QuoteContext';
import TopBar from './Components/TopBar/TopBar';

// Lazy load the components
const Footer = lazy(() => import('./Components/Footer/Footer'));
const CalculatorMain = lazy(() => import('./Components/CalculatorMain/CalculatorMain'));
const Quote = lazy(() => import('./Quote'));

const Calculator = () => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 600) {
        window.scrollTo({
          top: 500, // Adjust this value as needed for mobile devices
          // behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: 700, // Adjust this value as needed for larger devices
          // behavior: 'smooth'
        });
      }
    };

    handleScroll(); // Call the function on component mount

    window.addEventListener('resize', handleScroll); // Re-evaluate on resize

    return () => {
      window.removeEventListener('resize', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <QuoteProvider>
      <div>
        <Helmet>
          <title>Conveyancing Calculator | Love Home Conveyancing</title>
          <meta name="description" content="Use the Love Home Conveyancing calculator to estimate the costs of your property conveyancing services in Australia." />
          <meta name="keywords" content="Conveyancing calculator, property conveyancing cost estimate, Love Home Conveyancing calculator" />
        </Helmet>
        <TopBar />
        <Navbar />
        <CalculatorInfo />
        <Suspense fallback={<div>Loading...</div>}>
          {!showQuote ? (
            <CalculatorMain setShowQuote={setShowQuote} />
          ) : (
            <Quote />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </QuoteProvider>
  );
};

export default Calculator;
