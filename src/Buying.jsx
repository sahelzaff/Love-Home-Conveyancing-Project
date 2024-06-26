import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { assets } from './assets/assets'
import { Link } from 'react-router-dom';
import './Homepage.css'


const Buying = () => {
    useEffect(() => {
        window.scrollTo({
          top: 150,
          behavior: 'smooth'
        });
      }, []);
    return (
        <div className='bg-white overflow-x-hidden'>
            <Navbar />
            <div className='h-auto'>
                <section className="relative h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.buyinghead})` }}>
                    <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8 mt-36">
                        <h1 className="text-black font-inter text-5xl font-[800]" >Buying</h1>
                        <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-1'></div>
                        <p className='font-inter font-medium text-[1.5rem] font-sm pt-4 w-[40%]' id='ContactPara'>Explore our Buying page for comprehensive insights on property purchases. Utilize our intuitive tools and expert support to navigate your buying journey with ease. Get started today and make informed decisions with confidence.
                        </p>
                    </div>
                </section>
                <div className='flex flex-col pt-20 content '>
                    <h1 className='text-center text-4xl font-outfit font-bold'>Buying Your Dream Home with Love Homes</h1>
                    <div className='w-7/12 bg-[#f0532d] h-[0.25rem] my-1 rounded mx-auto mb-10'></div>
                    <p className='font-poppins font-medium text-[1rem] mb-10'>Purchasing a home is likely one of the most significant investments you will make in your lifetime. It deserves careful consideration and expert guidance.</p>
                    <p className='font-poppins font-medium text-[1rem] mb-10'>At Love Homes, we specialize in providing comprehensive support throughout your home-buying journey. Our team of experienced real estate professionals offers personalized service, blending sensitivity with professionalism to ensure a smooth and efficient process.</p>
                    <p className='font-poppins font-medium text-[1rem] mb-10'>Buying a home involves more than just securing a property. It's about finding a space that aligns with your lifestyle and future plans. Our knowledgeable agents will assist you in navigating the market, ensuring you find a home that meets your needs and fits within your budget.</p>
                    <p className='font-poppins font-medium text-[1rem] mb-10'>Our goal is to make the home-buying experience as seamless as possible. We take a proactive approach, addressing potential issues before they arise and providing clear, straightforward information at every step. From initial consultations to final closing, we are dedicated to supporting you and making the process understandable and stress-free.</p>

                    <h2 className='font-outfit font-extrabold text-[1.5rem] text-center text-[#f0532d]'>Trust Love Homes to find and secure your dream home with the expertise and care you deserve.</h2>

                    <div className='mx-auto py-10'>

                        <Link to='/calculator'>
                            <button class="w-[200px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f0532d] before:to-[#f0532d] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000] font-poppins font-bold text-lg hover:text-white">
                                Get Free Quote Now
                            </button>
                        </Link>
                    </div>
                </div>



                <section className='py-36'>
                    <div className='bg-[#f0532d] py-8 h-auto'>
                        <div className='flex flex-row gap-10 content justify-between w-full items-center'>
                            <div className=''>
                                <h2 className='font-outfit text-white font-bold text-[3rem] leading-[1] mb-5'>Buy Your Dream Home with <span className='text-[#19345E]'>Confidence</span> </h2>
                                <p className='font-poppins text-[15px] font-medium mb-5 pr-20'>At Love Homes, we understand that purchasing a home is one of the most significant investments you'll ever make. Our commitment to customer service excellence and innovative, digitally-enabled services ensures that your home-buying experience is smooth, secure, and tailored to fit your lifestyle needs. We prioritize transparent and open communication to protect your interests every step of the way.</p>
                                <p className='font-poppins text-[15px] font-medium mb-5 pr-20'>With our 24/7 online access, you can explore our services and make informed decisions at your convenience. Trust Love Homes to turn your dream of owning a home into a reality.</p>

                                <div className='mx-auto '>

                                    <Link to='/calculator'>
                                        <button class="w-[200px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#19345E] before:to-[#19345E] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000] font-poppins font-bold text-lg hover:text-white">
                                            Get Free Quote Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className=''><img src={assets.buying1} className='rounded-lg ' alt="" /></div>
                        </div>
                    </div>
                    <div className='bg-[#f0532d] py-8 h-auto mt-20'>
                        <div className='flex flex-row justify-between w-full items-center'>
                            <div className=''><img src={assets.buying2} className='rounded-lg w-10/12' alt="" /></div>
                            <div className='content2'>
                                <h2 className='font-outfit text-white font-bold text-[2.8rem] leading-[1] mb-8'><span className='text-[#19345E]'>Simplified Wills</span> and Conveyancing </h2>
                                <p className='font-poppins text-[15px]  font-medium mb-5 pr-'>At Love Homes, we understand that buying a home is a major investment. Preparing a will shouldn't be a hassle or an added expense. Our mission is to simplify the conveyancing process, making buying, selling, and protecting your property straightforward and stress-free. </p>
                                <p className='font-poppins text-[15px] font-medium mb-5 pr-'>Discover how we're transforming property practices in Sydney, so you can focus on what truly matters: you and your loved ones.</p>

                                <div className='mx-auto '>

                                    <Link to='/calculator'>
                                        <button class="w-[200px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#19345E] before:to-[#19345E] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000] font-poppins font-bold text-lg hover:text-white">
                                            Get Free Quote Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Buying