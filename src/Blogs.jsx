import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import BlogsInfo from './Components/BlogsInfo/BlogsInfo';
import BlogPostCard from './Components/BlogGrid/BlogPostCard';
import { Routes, Route } from 'react-router-dom';
import './Homepage.css'
import TopBar from './Components/TopBar/TopBar';

const Blogs = () => {


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
      <TopBar />
      <Navbar />
      <BlogsInfo />
      <div className='Homepage'>
        <Routes>
          <Route path="/" element={<BlogPostCard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
