<<<<<<< HEAD
import React, { useCallback } from 'react';'
import Navbar from './Components/Navbar/Navbar';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Footer from './Components/Footer/Footer';
import TopBar from './Components/TopBar/TopBar';

const BlogDetailsPage = () => {
  const handleLoad = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
=======
import React, { useState,useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import Footer from './Components/Footer/Footer'
import TopBar from './Components/TopBar/TopBar'


const BlogDetailsPage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 100,
      // behavior: 'smooth'
>>>>>>> 839b5aec36575cb46679d8e4160c5e9fda9da722
    });
  }, []);

  return (
    <div>
      <TopBar />
      <Navbar />
      <BlogDetails onLoad={handleLoad} />
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default BlogDetailsPage;
=======
export default BlogDetailsPage
>>>>>>> 839b5aec36575cb46679d8e4160c5e9fda9da722
