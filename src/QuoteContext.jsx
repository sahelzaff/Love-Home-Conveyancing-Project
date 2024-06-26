import React, { createContext, useState } from 'react';

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quote, setQuote] = useState({
    exchangeToSettlement: 0,
    verificationOfIdentity: 0,
    searchesEstimatedPrice: 0,
    gst: 0,
    total: 0,
    name: '',
    email: ''
  });

  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
