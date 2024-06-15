import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import LoadingPage from './loadingPage';
import Contact from './Contact';
import Service from './Service';


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
          <>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
            </Routes>
          </>
        )}
      </>
    </Router>
  );
};

export default App;
