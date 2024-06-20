import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from '../../assets/assets';
import Globe from '../Globe/Globe'; // Assuming this is the correct import path
import reviews from './Review';
import '../../Responsive.css';

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className='h-screen mb-36 -mt-28 relative' id='backgroundReview' style={{ backgroundImage: `url(${assets.reviewBackground})`, backgroundSize: '55% auto', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
      <div className='flex flex-row h-full'>
        <div className='w-1/2 flex flex-col justify-center ml-28'>
          <div className='flex flex-col justify-center items-start'>
            <div className="flex w-3/4 justify-start items-start flex-col pt-36">
              <div>
                <p className='font-outfit text-5xl font-bold text-[#1B1817]' id='ReviewTitle'>Customer <span className='text-[#f0532d]'>Reviews</span></p>
              </div>
              <div className='w-1/4 h-[0.3rem] bg-[#f0532d] mt-2'></div>
            </div>
            <Slider {...settings} className='mt-20 w-2/3'>
              {/* First slide with specific content */}
              <div className='flex flex-col gap-5 items-center justify-center'>
                 <div className='flex flex-col gap-5 items-center justify-center'>
                  <img src={assets.google} alt="" />
                 </div>
                 <div>
                  <p className='font-outfit text-5xl font-extrabold mt-5' id='googleText'>100<span className='text-[#f0532d]'>+ 5 Star</span> Rated Reviews</p>
                 </div>
              </div>
              
              {/* Dynamic slides for reviews */}
              {reviews.map((review, index) => (
                <div key={index} className='flex flex-col gap-5 items-center justify-center'>
                  <div className='flex flex-row gap-4 items-center mb-5 px-12 justify-start' id='NameDiv'>
                    <img src={review.photo} className='w-16' id='ReviewPhoto' alt={`Profile ${index + 1}`} />
                    <div className='flex flex-col items-start'>
                      <p className='font-inter text-3xl font-bold whitespace-nowrap mb-2 text-[#f0532d]' id='ReviewName'>{review.name}</p>
                      <div className='flex flex-row gap-1 items-center mb-2'>
                        {[...Array(review.stars)].map((star, i) => (
                          <img key={i} src={assets.star} className='w-5' id='ReviewStar' alt={`Star ${i + 1}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='font-poppins text-xl pl-14' id='ReviewPara'>
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <Link to="/service#reviews" >
            <p className='cursor-pointer pt-[3rem] ml-[3.5rem] font-inter font-bold text-[#f0532d] hover:text-black text-[1.125rem]'>Read More</p>
          </Link>
        </div>
        <div className='w-1/2 flex justify-center items-center absolute top-0 left-0 h-full' id='globe' data-aos='fade-left' data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          {/* <Globe /> */}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
