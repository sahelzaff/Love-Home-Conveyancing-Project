import React, { useState,useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CalculatorInfo from './Components/CalculatorInfo/CalculatorInfo';
import CalculatorMain from './Components/CalculatorMain/CalculatorMain';
import Quote from './Quote';
// import { Route, Routes } from 'react-router-dom';
import { QuoteProvider } from './QuoteContext';


const Calculator = () => {
  const [showQuote, setShowQuote] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  }, []);

  return (
    <QuoteProvider>
      <div>
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

