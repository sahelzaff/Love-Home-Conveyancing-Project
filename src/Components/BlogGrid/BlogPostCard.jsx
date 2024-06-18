import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

// Sample data structure
const posts = [
  {
    id: 1,
    date: '15 Mar',
    imageUrl: assets.Blog1,
    text: 'Apartment purchases: use this guide to obtain the essential reports',
  },
  {
    id: 2,
    date: '12 Mar',
    imageUrl: assets.Blogs2,
    text: 'How Much Does Conveyancing Cost?',
  },
  {
    id: 3,
    date: '01 Mar',
    imageUrl: assets.Blogs3,
    text: 'When Do You Pay Conveyancing Fees?',
  },
  {
    id: 4,
    date: '09 Feb',
    imageUrl: assets.Blogs4,
    text: 'Highly Recommended Sydney Conveyancing',
  },
  {
    id: 5,
    date: '02 Feb',
    imageUrl: assets.Blogs5,
    text: 'Leading Sydney Conveyancer',
  },
  {
    id: 6,
    date: '05 Jan',
    imageUrl: assets.Blogs6,
    text: 'Why Should You Hire an Expert Conveyancer in Sydney',
  },
  {
    id: 7,
    date: '02 Jan',
    imageUrl: assets.Blogs7,
    text: 'Property Conveyancing Sydney - How to choose a conveyancer',
  },
];

const BlogPostCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-[86%] mx-auto py-32 bg-[#f4f4f4]">
      {posts.slice(0, 7).map((post, index) => (
        <div
          key={post.id}
          className={`relative ${
            index === 0
              ? 'md:col-span-2 md:row-span-2'
              : ''
          } aspect-w-1 aspect-h-1`}
        >
          <Link to={`/post/${post.id}`}>
            <img
              src={post.imageUrl}
              alt={post.text}
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="absolute top-0 left-0 bg-white text-red-500 px-4 py-2 rounded text-center text-xl font-bold">
              {post.date}
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded text-center">
              <span className="text-2xl font-bold cursor-pointer hover:text-[#f0532d] ">
                {post.text}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostCard;
