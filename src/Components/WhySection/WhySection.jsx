import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';
// import './Counter.css';
import '../../Homepage.css'


const WhySection = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const target1 = 6000;
    const target2 = 80;

    const intervalTime1 = 10;
    const intervalTime2 = 30;

    const counterRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    startCounting();
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    const startCounting = () => {
        const interval1 = setInterval(() => {
            if (count1 < target1) {
                setCount1(prevCount => Math.min(prevCount + 15, target1));
            }
        }, intervalTime1);

        const interval2 = setInterval(() => {
            if (count2 < target2) {
                setCount2(prevCount => Math.min(prevCount + 1, target2));
            }
        }, intervalTime2);

        const interval3 = setInterval(() => {
            if (count3 < target2) {
                setCount3(prevCount => Math.min(prevCount + 1, target2));
            }
        }, intervalTime2);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    };

    return (
        <div className='bg-[#f4f4f4] w-full max-w-screen-4xl h-auto  pb-20'>
            {/* <div className='flex flex-col items-stretch justify-center gap-12 h-auto'>
                <div className='h-[120vh] bg-black bg-center bg-cover bg-no-repeat Homepage' style={{ backgroundImage: `url(${assets.sydney})` }}>
                    <div className='flex flex-col items-center justify-center h-auto absoulute w-full left-[10rem]'>
                        <div className='flex flex-col items-start justify-center h-auto w-full '>

                        <h2 className='text-black font-inter font-[900] text-[5rem] ' id='whyT1'>Why</h2>
                        <h2 className='text-[#f0532d] font-inter font-[900] text-[9rem] ' id='whyT2'>Choose Us</h2>
                        </div>

                    </div>

                </div> */}
                <div ref={counterRef} className='flex flex-row justify-center items-center bg-[#19345E] py-20'>
                    <div className="flex flex-row items-center justify-center w-full max-w-screen-2xl h-auto ">
                        <div className='flex flex-col items-center justify-center w-1/3 h-auto'>
                            <div className='font-outfit text-7xl font-bold text-white'>{count1}<span className='text-[#f0532d]'>+</span></div>
                            <h3 className='font-poppins font-medium text-[#fff] text-2xl'>Satisfied customers</h3>
                        </div>
                        <div className='h-24 w-[0.19rem] bg-[#f0532d]'></div>
                        <div className='flex flex-col items-center justify-center w-1/3 h-auto'>
                            <div className='font-outfit text-7xl font-bold text-white'>{count2}<span className='text-[#f0532d]'>+</span></div>
                            <h3 className='font-poppins font-medium text-[#fff] text-2xl'>5-Star reviews</h3>
                        </div>
                        <div className='h-24 w-[0.19rem] bg-[#f0532d]'></div>
                        <div className='flex flex-col items-center justify-center w-1/3 h-auto'>
                            <div className='font-outfit text-7xl font-bold text-white'>{count3}<span className='text-[#f0532d]'>+</span></div>
                            <h3 className='font-poppins font-medium text-[#fff] text-2xl'>Years of experience</h3>
                        </div>
                    </div>
                </div>

            
        </div>
    );
}

export default WhySection;
