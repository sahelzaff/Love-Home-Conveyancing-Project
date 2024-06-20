import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const BlogPostCard = () => {
  const [posts, setPosts] = useState([]);

  // Fetch initial posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch all posts from backend
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blogs'); // Fetch from backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data); // Update state with fetched posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to add a new post
  const addNewPost = async (newPost) => {
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error('Failed to add new post');
      }
      const data = await response.json();
      fetchPosts(); // Fetch updated posts after adding new post
    } catch (error) {
      console.error('Error adding new post:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[86%] mx-auto py-32 bg-[#f4f4f4]" data-aos='fade-in' data-aos-duration="1000" data-aos-delay="200">
      {posts.slice(0, 7).map((post, index) => (
        <div
          key={post._id} // Use MongoDB's _id as key
          className={`relative ${
            index === 0 ? 'md:col-span-2 md:row-span-2' : ''
          } aspect-w-1 aspect-h-1`}
        >
          <Link to={`/post/${post._id}`}>
            <img
              src={post.blogCoverPhoto} // Assuming blogCoverPhoto is the URL from backend
              alt={post.blogTitle}
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="absolute top-0 left-0 bg-white text-red-500 px-4 py-6 rounded text-center text-xl font-[800] font-inter">
              {post.blogDate}
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-10 py-2 rounded text-center">
              <span className="text-[1.125rem] font-bold cursor-pointer hover:text-[#f0532d] ">
                {post.blogTitle}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostCard;
