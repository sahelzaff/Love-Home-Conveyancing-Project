import React, { useState,useEffect } from 'react';'
import Navbar from './Components/Navbar/Navbar'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import Footer from './Components/Footer/Footer'
import TopBar from './Components/TopBar/TopBar'


const BlogDetailsPage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 100,
      // behavior: 'smooth'
    });
  }, []);

  return (
    <div>
        <TopBar/>
        <Navbar/>
        <BlogDetails/>
        <Footer/>
    </div>
  )
}

export default BlogDetailsPage