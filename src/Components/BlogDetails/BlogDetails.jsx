import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import '../../Homepage.css';

const BlogDetails = () => {
  const { id } = useParams(); // Fetching the 'id' parameter from the URL
  const [post, setPost] = useState(null); // State to hold the fetched blog post

  useEffect(() => {
    // Function to fetch blog post by ID
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`); // Fetch from backend endpoint for specific post
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const data = await response.json();
        setPost(data); // Update state with fetched blog post
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost(); // Call fetchPost function when component mounts
  }, [id]); // Dependency array to ensure fetch happens when 'id' changes

  if (!post) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="p-4 h-auto w-full font-inter pt-20">
      <div>
        <div className="flex flex-row justify-between gap-[1rem] items-start content ">
          <div className="flex flex-row items-center w-[68%] h-auto">
            <div className="max-w-4xl w-full">
              <h2 className="text-sm font-bold text-[#19345E]">ARTICLES</h2>
              <div>
                <h1 className="text-4xl font-bold my-4 w-full">{post.blogTitle}</h1>
                <div className="w-[5rem] h-[0.25rem] bg-[#19345E] mb-3 rounded-lg"></div>
                <p className="text-black font-[900] text-xs">POSTED ON <span className='text-[#19345E]'>{post.blogDate}</span> BY <span className='text-[#19345E]'>ROBIN CARTER</span> </p>
              </div>
              <div
                className="w-full h-auto object-cover mt-6"
                style={{
                  backgroundImage: `url(${post.blogCoverPhoto})`,
                  filter: 'brightness(80%)',
                }}
              >
                <img src={post.blogCoverPhoto} alt={post.blogTitle} className="w-full h-auto object-cover opacity-0" />
              </div>
              <div className="mt-6 text-lg leading-relaxed blog-content">
                <p>{post.blogContent}</p>
              </div>
              {/* Render comments box here */}
            </div>
          </div>

          <div className="w-[32%] h-auto border-l-2 border-gray-300">
            {/* Sidebar content */}
            <div className="max-w-md mx-auto bg-[#f4f4f4] rounded-lg overflow-hidden px-6">
              <div>
                <h2 className="text-xl font-[800] text-[#0d0d0d]">Latest Blogs</h2>
              </div>
              <div className="py-2">
                {/* List of latest blogs */}
                <ul className="divide-y divide-gray-200">
                  {/* Example list items */}
                  <li className="flex items-center py-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blog1})`, }}>
                        <div>
                          <div className="text-center">
                            <div className="text-sm">15</div>
                            <div className="text-sm">Mar</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-blue-800">
                        <a href="#" className="hover:text-[#f0532d] cursor-pointer">Apartment purchases: use this guide to obtain the essential reports</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>

                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs2})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">12</div>
                        <div class="text-sm">Oct</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">How Much Does Conveyancing Cost?</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs3})`, }}>                        
                        <div class="text-center absolute">
                        <div class="text-sm">01</div>
                        <div class="text-sm">Oct</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">When Do You Pay Conveyancing Fees?</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs4})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">09</div>
                        <div class="text-sm">Jun</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Highly Recommended Sydney Conveyancing</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs5})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">08</div>
                        <div class="text-sm">May</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Leading Sydney Conveyancer</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">f0532d
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs6})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">10</div>
                        <div class="text-sm">Apr</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Why Should You Hire an Expert Conveyancer in Sydney</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li class="flex items-center py-4">
                    <div class="flex-shrink-0">
                      <div class="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs7})`, }}>                        
                        <div class="text-center">
                        <div class="text-sm">02</div>
                        <div class="text-sm">Mar</div>
                      </div>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-bold text-blue-800">
                        <a href="#" class="hover:text-[#f0532d] cursor-pointer">Property Conveyancing Sydney – How to choose a conveyancer</a>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
