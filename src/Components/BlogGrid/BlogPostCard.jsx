import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = () => {
  const [posts, setPosts] = useState([]);
  const [incrementedPostIds, setIncrementedPostIds] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      let data = await response.json();
      
      // Sort posts by date (assuming blogDate is a date field) to ensure newest posts are first
      data.sort((a, b) => new Date(b.blogDate) - new Date(a.blogDate));

      // Set posts and increment views for fetched posts
      setPosts(data);
      incrementViewsForFetchedPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const incrementViewsForFetchedPosts = (posts) => {
    try {
      // Filter posts that haven't been incremented yet
      const filteredPosts = posts.filter(post => !incrementedPostIds.includes(post._id));

      // Iterate over filtered posts and increment views
      filteredPosts.forEach(async (post) => {
        await fetch(`http://localhost:4000/api/blogs/${post._id}/views`, {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[86%] mx-auto py-32 bg-[#f4f4f4]" data-aos='fade-in' data-aos-duration="1000" data-aos-delay="200">
      {posts.slice(0, 7).map((post, index) => (
        <div
          key={post._id}
          className={`relative ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} aspect-w-1 aspect-h-1`}
        >
          <Link to={`/post/${post._id}`}>
            <img
              src={`http://localhost:4000/${post.blogCoverPhoto}`}
              alt={post.blogTitle}
              className="w-full h-full object-cover cursor-pointer group"
            />
            <div className="absolute top-4 left-0 bg-white text-red-500 px-3 py-4  text-center text-[16px] font-[800] font-inter group-hover:text-black">
            {formatDate(post.blogDate)}
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-2 rounded text-center">
              <span className="text-[1.125rem] font-bold cursor-pointer hover:text-[#f0532d]">
                {post.blogTitle}
              </span>
            </div>
              <div className="mt-2 text-sm text-gray-500 flex flex-row items-center justify-end gap-2">
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


