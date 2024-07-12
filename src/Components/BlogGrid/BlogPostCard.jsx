import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Responsive.css';
import './BlogPostCard.css'
import '@dotlottie/player-component';

const BlogPostCard = () => {
  const [posts, setPosts] = useState([]);
  const [incrementedPostIds, setIncrementedPostIds] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://lovehomeconvyancingbackend-production.up.railway.app/api/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      let data = await response.json();
      
      // Sort posts by date (assuming blogDate is a date field) to ensure newest posts are first
      data.sort((a, b) => new Date(b.blogDate) - new Date(a.blogDate));

      // Set posts and increment views for fetched posts
      setPosts(data);
      incrementViewsForFetchedPosts(data);
      setLoading(false); // Set loading to false after posts are fetched
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  const incrementViewsForFetchedPosts = (posts) => {
    try {
      // Filter posts that haven't been incremented yet
      const filteredPosts = posts.filter(post => !incrementedPostIds.includes(post._id));

      // Iterate over filtered posts and increment views
      filteredPosts.forEach(async (post) => {
        await fetch(`https://lovehomeconvyancingbackend-production.up.railway.app/api/blogs/${post._id}/views`, {
          method: 'PUT',
        });
        // Update incremented post IDs state
        setIncrementedPostIds(prevIds => [...prevIds, post._id]);
      });
    } catch (error) {
      console.error('Error updating views:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <dotlottie-player
          src="https://lottie.host/798dae93-fbd3-4d46-aba8-00c7d07a6c6b/Y4qF1GQzdi.json"
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[86%] mx-auto py-32 bg-[#f4f4f4] group" id='blogpostcardmain'>
      {posts.slice(0, 7).map((post, index) => (
        <div
          key={post._id}
          className={`relative ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} aspect-w-1 aspect-h-1`}
          data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"
        >
          <Link to={`/post/${post._id}`} id='postheight'>
            <div className="overflow-hidden post-card">
              <img
                src={`https://lovehomeconvyancingbackend-production.up.railway.app/${post.blogCoverPhoto}`}
                alt={post.blogTitle}
                loading='lazy'
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 post-card-image"
                id='blogpostcardcoverphoto'
              />
            </div>
            <div className="absolute top-4 left-0 bg-white text-red-500 px-3 py-4 text-center text-[16px] font-[800] font-inter group-hover:text-black" id='blogpostdate'>
              {formatDate(post.blogDate)}
            </div>
            <div className={`absolute ${index === 0 ? 'bottom-4' : 'bottom-10'} left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-2 rounded text-center`} id='blogposttitlediv'>
              <span className="text-[1.125rem] font-bold cursor-pointer hover:text-[#f0532d]" id='blogtitletext'>
                {post.blogTitle}
              </span>
              <div className='mx-auto w-14 rounded-2xl opacity-80 h-[0.2rem] bg-[#f0532d]'></div>
            </div>
            <div className="mt-[0.15rem] text-sm text-gray-500 flex flex-row items-center justify-end gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5" />
              </svg>
              <div className='font-poppins font-bold text-[16px] text-black'>
                {post.views}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostCard;
