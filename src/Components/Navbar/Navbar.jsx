import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import TopBar from '../TopBar/TopBar';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import '../../Homepage.css';
import '../../Responsive.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

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

    const getLinkClass = (path) => {
        return location.pathname === path ? 'text-[#f0532d]' : 'text-[#0d0d0d] hover:text-[#f0532d]';
    };

    return (
        <div className="sticky  w-full z-50">
            <TopBar />
            <nav className="bg-white dark:bg-gray-900 w-full z-20 top-9 left-0 sticky" id="sticky">
                <div className="max-w-screen-3xl flex flex-wrap items-center justify-between Homepage py-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={isMobile ? assets.logoMobile : assets.logoBlackRed}
                            className="h-14 cursor-pointer"
                            id="logo"
                            alt="Love Home Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <div className="flex flex-row items-center gap-4">
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="text-[#0d0d0d] bg-transparent flex justify-center items-center gap-2 pl-2 font-bold rounded-lg text-lg text-center dark:bg-[#F57B1F] dark:hover:bg-[#F57B1F] font-montserrat"
                                id="border"
                            >
                                +02 9381 9118
                                <span><img src={assets.call_svgrepo_com} className="w-10" alt="" /></span>
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
                            <ul className="flex flex-col pl-24 md:flex-row md:space-x-8 md:mt-0 md:border-0" id="navText">
                                <li>
                                    <Link
                                        to="/"
                                        className={`block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-[#F57B1F] font-bold font-montserrat ${getLinkClass('/')}`}
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/service"
                                        className={`block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-[#F57B1F] font-bold font-montserrat ${getLinkClass('/service')}`}
                                    >
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className={`block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-[#F57B1F] font-bold font-montserrat ${getLinkClass('/about')}`}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blogs"
                                        className={`block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-[#F57B1F] font-bold font-montserrat ${getLinkClass('/blogs')}`}
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className={`block py-2 px-3 rounded md:bg-transparent md:p-0 cursor-pointer md:dark:text-[#F57B1F] font-bold font-montserrat ${getLinkClass('/contact')}`}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            <div className="w-[0.25rem] h-[4rem] bg-[#f0532d] ml-4" id="verticalLine"></div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
