import React, { useContext, useEffect, useState } from 'react';
import { QuoteContext } from './QuoteContext';
import '@dotlottie/player-component';
import { assets } from './assets/assets';
import './Homepage.css';
import { generatePdf } from './generatePdf'; // Import the generatePdf function

const Quote = () => {
    const { quote } = useContext(QuoteContext);
    const [loading, setLoading] = useState(true);
    const [coupon, setCoupon] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
        script.type = 'module';
        document.body.appendChild(script);

        const timer = setTimeout(() => {
            setLoading(false);
            generatePdf(quote); // Generate and download the PDF after loading
        }, 8000); // 8-second loading time

        return () => {
            clearTimeout(timer);
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 600,
        });
    }, []);

    const applyCoupon = () => {
        if (coupon.toLowerCase() === 'lovehomes') {
            setCouponApplied(true);
            setError('');
        } else {
            setCouponApplied(false);
            setError('Invalid coupon code');
        }
    };

    const removeCoupon = () => {
        setCoupon('');
        setCouponApplied(false);
        setError('');
    };

    const handleDownloadClick = () => {
        generatePdf(quote);
    };

    if (loading) {
        return (
            <div className='h-auto w-full my-20'>
                <div className='flex flex-col items-center justify-center '>
                    <div>
                        <dotlottie-player
                            src="https://lottie.host/62bafd8f-2603-4d18-ae48-b1a23b8946d7/O8zXoE7F10.lottie"
                            background="transparent"
                            speed="1"
                            style={{ width: '300px', height: '300px' }}
                            id="loaderQuote"
                            loop
                            autoplay
                        ></dotlottie-player>
                    </div>
                    <div className='font-poppins text-4xl text-[#f0532d] font-semibold' id='quoteloadertext'>Your Quote is Getting Ready......</div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl h-auto mx-auto p-4 flex flex-col mt-20">
            <div className='mx-auto'>
                <img src={assets.logoBlackRed} className='w-[300px] max-w-[400px]' alt="" srcSet="" />
            </div>
            <h2 className="text-6xl tracking-normal mb-10 font-poppins font-medium text-center pt-5 text-[#f0532d]" id='quotehead'>Your Instant Quote</h2>
            <div className='w-full flex flex-row justify-between'>

            <p className="text-xl mb-4 font-poppins font-medium">
                Name : <span className='text-[#f0532d]'>{quote.name}</span>
            </p>
                <button
                    onClick={handleDownloadClick}
                    className="ml-4 bg-[#f0532d] text-white px-4 py-1 font-poppins font-medium rounded hover:bg-[#d0451e] transition duration-300 cursor-pointer" id='button_download'
                    >
                    Download PDF
                </button>
                    </div>
            <p className="text-xl mb-4 font-poppins font-medium">Email : <span className='text-[#f0532d]'>{quote.email}</span> </p>
            <div className='flex flex-col justify-center items-end' id='quotecalculationdiv'>
                <p className="text-2xl mb-4 font-medium font-poppins" id='calculationstext'>Exchange to Settlement: ${quote.exchangeToSettlement}</p>
                <p className="text-2xl mb-4 font-medium font-poppins" id='calculationstext'>Verification of Identity: ${quote.verificationOfIdentity}</p>
                <p className="text-2xl mb-4 font-medium font-poppins" id='calculationstext'>Searches - Estimated Price: ${quote.searchesEstimatedPrice}</p>
                <p className="text-2xl mb-6 font-medium font-poppins" id='calculationstext'>GST: ${quote.gst}</p>
                <p className="text-4xl mb-6 font-bold font-poppins" id='totalquote'>Your Quote Total inc GST: ${quote.total}</p>
                <p className="text-xl font-semibold font-poppins" id='asteriktext'>*additional verification required if multiple applicants</p>
                <p className='text-xl mb-4 font-semibold font-poppins' id='asteriktext'>*You have received an email with this information.</p>
            </div>
            <div>
                <div className='h-auto'>
                    <div className='bg-[#19345E] my-14 py-3 rounded-xl' id='offertextdiv'>
                        <h2 className='font-poppins font-bold text-4xl p-5 text-center text-white' id='textofferline'>Enter <span className='text-[#f0532d]'>LoveHomes</span> in the coupon field to get a <span className='text-[#f0532d]'>$100 discount</span> on your legal fees!</h2>
                    </div>
                    <p className='font-poppins font-medium text-xl' id='textquotetextbelowofferline'>Ready to get going on your conveyancing?</p>
                    <p className='font-poppins font-medium text-xl' id='textquotetextbelowofferline'>We'd love you to choose us today with this exclusive online only offer</p>
                    <p className='font-poppins font-medium text-xl' id='textquotetextbelowofferline'>Pay a deposit now and <span className='text-[#f0532d]'>SAVE $100</span> on your Legal fees!</p>
                </div>
            </div>
            <div className='h-auto pt-10 w-full'>
                <div>
                    <h2 className='font-poppins font-bold text-3xl mb-10'>Deposit</h2>
                    <div className='flex flex-row justify-between items-start gap-14' id='divdepositmobile'>
                        <div className='flex flex-row justify-between items-center w-4/6 bg-[#f0532d] py-6 px-12 rounded-lg' id='deposit400mobile' >
                            <h2 className='font-poppins font-semibold text-xl text-white'>Deposit</h2>
                            <h2 className='font-poppins font-semibold text-xl text-white'>
                                {couponApplied ? <><s>$400.00</s> $300.00</> : '$400.00'}
                            </h2>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <h2 className='font-poppins font-medium text-lg mb-3'>Apply Coupon Code</h2>
                            </div>
                            <div className='flex flex-row items-start justify-between'>
                                <input
                                    type="text"
                                    placeholder='Coupon Code'
                                    className='h-10 px-4 rounded-md border border-gray-300 outline-none'
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                />
                                <button onClick={applyCoupon} className="ml-2 p-2 text-sm font-inter border bg-[#f0532d] text-white rounded cursor-pointer">Apply</button>
                            </div>
                            {error && <p className="text-red-500 font-poppins text-sm mt-1">{error}</p>}
                            {couponApplied && !error && (
                                <div className="flex items-center justify-between">
                                    <p className="text-green-500 font-poppins text-[11px]">Coupon code applied successfully</p>
                                    <p className="text-red-500 font-poppins text-[11px] hover:underline ml-2 cursor-pointer" onClick={removeCoupon}>Remove</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="pt-20 pb-4 w-full flex justify-end" id='buttondiv'>
                    <button
                        type="button"
                        className="bg-white text-center w-[320px] max-w-md rounded-2xl h-14 relative font-poppins text-black text-lg font-semibold group cursor-pointer"
                    >
                        <div
                            className="bg-[#f0532d] rounded-xl h-12 w-[50px] flex items-center justify-center absolute left-1 top-[4px] group-hover:w-full z-10 duration-500"
                        >
                            <svg
                                height="50px"
                                width="50px"
                                version="1.1"
                                id="Capa_1"
                              
                                viewBox="-72.67 -72.67 372.44 372.44"
                               
                                fill="#ffffff"
                                stroke="#ffffff"
                                strokeWidth="15.442528000000001"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <polygon style={{ fill: '#ffffff' }} points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55 "></polygon>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p className="group-hover:text-white">Proceed To Payment</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quote;
