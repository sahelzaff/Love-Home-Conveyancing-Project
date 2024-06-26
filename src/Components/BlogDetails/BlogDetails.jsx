import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../../assets/assets';
import '../../Homepage.css';

const BlogDetails = () => {
  const { id } = useParams(); // Fetching the 'id' parameter from the URL
  const [post, setPost] = useState(null); // State to hold the fetched blog post
  const [comments, setComments] = useState([]); // State to hold comments
  const [commentText, setCommentText] = useState(''); // State for comment input

  useEffect(() => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    // Function to fetch blog post by ID
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/blogs/${id}`); // Fetch from backend endpoint for specific post
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

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here, such as sending the comment to the backend
    const newComment = {
      text: commentText,
      date: new Date().toLocaleDateString()
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  if (!post) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
  };
  
  return (
    <div className="p-4 h-auto w-full font-inter pt-20">
      <div>
        <div className="flex flex-row justify-between gap-[1rem] items-start content">
          <div className="flex flex-row items-center w-[68%] h-auto pb-44">
            <div className="max-w-4xl w-full">
              <h2 className="text-sm font-bold text-[#19345E]">ARTICLES</h2>
              <div>
                <h1 className="text-4xl font-bold my-4 w-full">{post.blogTitle}</h1>
                <div className="w-[5rem] h-[0.25rem] bg-[#19345E] mb-3 rounded-lg"></div>
                <p className="text-black font-[900] text-xs">POSTED ON <span className='text-[#19345E]'> {formatDate(post.blogDate)}</span> BY <span className='text-[#19345E]'>ROBIN CARTER</span></p>
              </div>
              <div className="w-full h-auto mt-6">
                <img 
                  src={`http://localhost:4000/${post.blogCoverPhoto}`} 
                  alt={post.blogTitle} 
                  className="w-full h-auto object-cover" 
                  style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                />
                {/* Debugging: Display image URL */}
                {/* <p>Image URL: http://localhost:4000/{post.blogCoverPhoto}</p> */}
              </div>
              <div className="mt-6 text-lg leading-relaxed blog-content" dangerouslySetInnerHTML={{ __html: post.blogContent }} />
              {/* Comment Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Comments</h3>
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows="4"
                    placeholder="Write your comment here..."
                  ></textarea>
                  <button type="submit" className="bg-[#f0532d] text-white px-4 py-2 rounded-md mt-2">Submit</button>
                </form>
                <div className="mt-4">
                  {comments.map((comment, index) => (
                    <div key={index} className="border-b border-gray-300 pb-2 mb-2">
                      <p>{comment.text}</p>
                      <p className="text-gray-500 text-sm">{comment.date}</p>
                    </div>
                  ))}
                </div>
              </div>
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

                  <li className="flex items-center py-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs2})`, }}>
                        <div className="text-center">
                          <div className="text-sm">12</div>
                          <div className="text-sm">Oct</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-blue-800">
                        <a href="#" className="hover:text-[#f0532d] cursor-pointer">How Much Does Conveyancing Cost?</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li className="flex items-center py-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs3})`, }}>
                        <div className="text-center absolute">
                          <div className="text-sm">01</div>
                          <div className="text-sm">Oct</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-blue-800">
                        <a href="#" className="hover:text-[#f0532d] cursor-pointer">When Do You Pay Conveyancing Fees?</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li className="flex items-center py-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs4})`, }}>
                        <div className="text-center">
                          <div className="text-sm">09</div>
                          <div className="text-sm">Jun</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-blue-800">
                        <a href="#" className="hover:text-[#f0532d] cursor-pointer">Highly Recommended Sydney Conveyancing</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li className="flex items-center py-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs5})`, }}>
                        <div className="text-center">
                          <div className="text-sm">08</div>
                          <div className="text-sm">May</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-blue-800">
                        <a href="#" className="hover:text-[#f0532d] cursor-pointer">Leading Sydney Conveyancer</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li className="flex items-center py-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs6})`, }}>
                        <div className="text-center">
                          <div className="text-sm">10</div>
                          <div className="text-sm">Apr</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-blue-800">
                        <a href="#" className="hover:text-[#f0532d] cursor-pointer">Why Should You Hire an Expert Conveyancer in Sydney</a>
                      </h3>
                    </div>
                  </li>
                  <div className='w-full bg-gray-500 h-[0.05rem]'></div>
                  <li className="flex items-center py-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center bg-cover bg-center text-[#f0532d] text-lg font-[900] rounded-lg font-inter" style={{ backgroundImage: `url(${assets.Blogs7})`, }}>
                        <div className="text-center">
                          <div className="text-sm">02</div>
                          <div className="text-sm">Mar</div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-blue-800">
                        <a href="#" className="hover:text-[#f0532d] cursor-pointer">Property Conveyancing Sydney – How to choose a conveyancer</a>
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
