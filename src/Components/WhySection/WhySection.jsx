import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../../assets/assets';
// import './Counter.css';

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
        <div className='bg-[#f4f4f4] w-full max-w-screen-4xl h-auto py-20'>
            <div className='flex flex-col items-stretch justify-center gap-12 h-auto'>
                <div className='flex flex-row items-center justify-center px-[5rem]'>
                    <div className='flex flex-col items-start justify-center w-full max-w-screen-2xl h-auto'>
                        <h2 className='font-outfit text-4xl font-medium'>Why Love Home Conveyancing?</h2>
                        <div className='w-1/5 h-[0.3rem] bg-[#f0532d] mt-2'></div>
                        <p className='font-poppins tracking-tighter w-2/3 text-[1rem] pr-24 py-3 text-[#494747]'>At Love Home Conveyancing, we simplify property transactions with expert guidance and personalized service, ensuring a seamless and stress-free experience for you.</p>
                    </div>
                    <div>
                        <img src={assets.why} className='' alt="" srcset="" />
                    </div>
                </div>
                <div ref={counterRef} className='flex flex-row justify-center items-center bg-[#19345E] py-20'>
                    <div className="flex flex-row items-center justify-center w-full max-w-screen-2xl h-auto ">
                        <div className='flex flex-col items-center justify-center w-1/3 h-auto'>
                            <div className='font-outfit text-5xl font-bold text-white'>{count1}<span className='text-[#f0532d]'>+</span></div>
                            <h3 className='font-poppins font-medium text-[#fff] text-2xl'>Satisfied customers</h3>
                        </div>
                        <div className='h-24 w-[0.19rem] bg-[#f0532d]'></div>
                        <div className='flex flex-col items-center justify-center w-1/3 h-auto'>
                            <div className='font-outfit text-5xl font-bold text-white'>{count2}<span className='text-[#f0532d]'>+</span></div>
                            <h3 className='font-poppins font-medium text-[#fff] text-2xl'>5-Star reviews</h3>
                        </div>
                        <div className='h-24 w-[0.19rem] bg-[#f0532d]'></div>
                        <div className='flex flex-col items-center justify-center w-1/3 h-auto'>
                            <div className='font-outfit text-5xl font-bold text-white'>{count3}<span className='text-[#f0532d]'>+</span></div>
                            <h3 className='font-poppins font-medium text-[#fff] text-2xl'>Years of experience</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WhySection;
