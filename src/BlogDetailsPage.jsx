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

export default BlogDetailsPage;
