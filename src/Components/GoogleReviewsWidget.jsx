import React, { useEffect } from 'react';
import '../Homepage.css'

const GoogleReviewsWidget = () => {
  useEffect(() => {
    // Create a script element and set its attributes
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.async = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    
<div
  className='sk-ww-google-reviews'
  data-embed-id='25448258'
  id='GoogleReviewsWidget'
></div>

   
  );
};

export default GoogleReviewsWidget;

