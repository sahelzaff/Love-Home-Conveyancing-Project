import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { assets } from '../../assets/assets';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ServiceReview.css'; // Assuming you have a CSS file for custom styles

const ServiceReview = () => {
    const [googleReviews, setGoogleReviews] = useState([]);

    useEffect(() => {
        const fetchGoogleReviews = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/google/google-reviews');
                if (!response.ok) {
                    throw new Error('Failed to fetch Google reviews');
                }
                const data = await response.json();
                setGoogleReviews(data);
            } catch (error) {
                console.error('Error fetching Google reviews:', error);
            }
        };

        fetchGoogleReviews();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const ReviewItem = ({ review }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        const handleReadMore = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <div className="p-4 h-full flex flex-col ">
                <div className="border border-gray-200 p-6 rounded-lg shadow-lg bg-white flex flex-col h-full justify-between ">
                    <div>
                        <div className="flex items-center mb-4">
                            {Array.from({ length: review.rating }, (_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.245 6.891H18l-5.75 4.188L14.49 19 10 15.117 5.51 19l1.5-6.92L2 7.89h5.755L10 1z" clipRule="evenodd" />
                                </svg>
                            ))}
                        </div>
                        <p className={`text-xl font-semibold mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
                            "{review.text}"
                        </p>
                        <button onClick={handleReadMore} className="text-[#f0532d] hover:underline">
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    <div className="flex items-center mt-4">
                        <img src={review.profile_photo_url || assets.defaultAvatar} alt={review.author_name} className="h-10 w-10 rounded-full mr-4" />
                        <div>
                            <p className="text-lg font-bold text-[#f0532d] font-inter">{review.author_name}</p>
                            <p className=" text-gray-500 font-bold">{new Date(review.time * 1000).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="h-auto pt-16 my-36">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={assets.google} alt="Google Logo" className="" />
                    <h2 className="text-5xl font-bold font-inter">107+ <span className="text-[#f0532d]">5 Star Rated</span> Customer Reviews</h2>
                </div>
                <div className="w-full mt-10">
                    {googleReviews.length > 0 ? (
                        <Slider {...settings}>
                            {googleReviews.map((review, index) => (
                                <ReviewItem key={index} review={review} />
                            ))}
                        </Slider>
                    ) : (
                        <p>Loading Google reviews...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceReview;