import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CalculatorInfo from './Components/CalculatorInfo/CalculatorInfo';
import CalculatorMain from './Components/CalculatorMain/CalculatorMain';
import Quote from './Quote';
// import { Route, Routes } from 'react-router-dom';
import { QuoteProvider } from './QuoteContext';
import TopBar from './Components/TopBar/TopBar';


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
        <TopBar/>
        <Navbar />
        <CalculatorInfo />
        {!showQuote ? (
          <CalculatorMain setShowQuote={setShowQuote} />
        ) : (
          <Quote />
        )}
        <Footer />
      </div>
    </QuoteProvider>
  );
};

export default Calculator;

