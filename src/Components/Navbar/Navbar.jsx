import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import TopBar from '../TopBar/TopBar';
import './Navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogoClick = () => {
        window.location.href = 'src\Homepage.jsx';
    };


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="sticky w-full z-50 ">
            <TopBar />
            <nav className="bg-white dark:bg-gray-900 w-full z-20 top-9 left-0 sticky " id='sticky'>
                <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={isMobile ? assets.logoMobile : assets.logoBlackRed}
                            className="h-14 cursor-pointer"
                            id='logo'
                            alt="Love Home Logo"
                            onClick={handleLogoClick}
                            
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="text-[#0d0d0d] bg-transparent flex justify-center items-center gap-2 pl-2 font-bold rounded-lg text-lg  text-center dark:bg-[#F57B1F] dark:hover:bg-[#F57B1F]  font-roboto ml-3" id='border'
                        >
                            Call Now +02 9381 9118
                            <span><img src={assets.call_svgrepo_com}  className='w-10' alt="" srcset="" /></span>
                        </button>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col pl-24 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link
                                    href="./Homepage.jsx"
                                    className="block py-2 px-3 text-[#f0532d] rounded md:bg-transparent md:text--[#0d0d0d] md:p-0  cursor-pointer md:dark:text-[#F57B1F] font-bold font-montserrat"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="block py-2 px-3 text-[#0d0d0d] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f0532d] md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold font-montserrat cursor-pointer "
                                >
                                    Process
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-[#0d0d0d] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f0532d] md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold font-montserrat cursor-pointer"
                                >
                                    Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-[#0d0d0d] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f0532d] md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold font-montserra cursor-pointer"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-[#0d0d0d] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f0532d] md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold font-montserrat cursor-pointer"
                                >
                                    Free Resource
                                </a>
                            </li>
                            <li>
                                <Link
                                    href=""
                                    className="block py-2 px-3 text-[#0d0d0d] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f0532d] md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold font-montserrat cursor-pointer"
                                    to="/contact"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
