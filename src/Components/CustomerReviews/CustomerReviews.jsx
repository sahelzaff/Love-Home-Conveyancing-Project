import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from '../../assets/assets';
import Globe from '../Globe/Globe';
import reviews from './Review';

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
    <div className='h-screen mb-36'>
      <div className='flex flex-row'>
        <div className='w-1/2 relative -z-0 pl-8'>
          <div className='flex flex-col h-screen justify-center items-start'>
            <div className="flex w-3/4 justify-start items-start flex-col ">
            <div>
              <p className='font-outfit text-5xl font-bold text-[#1B1817]'>Customer Reviews</p>
            </div>
            <div className='w-1/4 h-[0.3rem] bg-[#f0532d] mt-2'></div>
            </div>
            <Slider {...settings} className='mt-20 w-2/3'>
              {reviews.map((review, index) => (
                <div key={index} className='flex flex-col gap-3 items-center justify-center'>
                  <div className='flex flex-row gap-3 items-center mb-2 justify-center'>
                    <img src={review.photo} className='w-16' alt={`Profile ${index + 1}`} />
                    <div className='flex flex-col items-start'>
                      <p className='font-outfit text-3xl font-bold'>{review.name}</p>
                      <div className='flex flex-row gap-1 items-center mb-2'>
                        {[...Array(review.stars)].map((star, i) => (
                          <img key={i} src={assets.star} className='w-5' alt={`Star ${i + 1}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='font-poppins text-xl pl-14'>
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='w-1/2 relative z-10 bg-cover bg-center overflow-hidden' style={{ backgroundImage: `url(${assets.reviewBackground})` }}>
                <div className='flex justify-end items-end'>
          {/* <Globe
          className={'absolute -right-36'}
          /> */}
          </div>
                
        </div>
      </div>
    </div>  
  );
}

export default CustomerReviews;
