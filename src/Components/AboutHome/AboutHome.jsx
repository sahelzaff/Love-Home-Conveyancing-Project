import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import '../../Responsive.css';

const AboutHome = () => {
    const [bgImage, setBgImage] = useState(() => {
        // Set initial background image based on initial window width
        return window.innerWidth <= 600 ? assets.abouthead_mobile : assets.abouthead;
    });

    useEffect(() => {
        const updateBgImage = () => {
            if (window.innerWidth <= 600) {
                setBgImage(assets.abouthead_mobile);
            } else {
                setBgImage(assets.abouthead);
            }
        };

        window.addEventListener('resize', updateBgImage); // Update on window resize

        return () => {
            window.removeEventListener('resize', updateBgImage); // Clean up the event listener on component unmount
        };
    }, []);

    return (
        <div className='relative h-auto'>
            <section
                className="relative h-screen bg-center bg-cover bg-no-repeat brightness-110"
                id='mainrc'
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 w-full bg-white bg-opacity-0 flex flex-col items-start justify-center" id='robin' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                    <h1 className='font-inter text-[60px] font-[900] text-[#fff] tracking-[6px] ' id='nameRobin'>Robin Carter</h1>
                    <h2 className='font-poppins text-[20px] font-[500] leading-[0] mb-5 text-white' id='robin2'>Conveyancing Specialist (Property Lawyer)</h2>
                    <div className='w-3/12 h-[5px] bg-[#fff] rounded-lg ' id='aboutpagehorizontal'></div>
                    <p className='pt-10 font-poppins text-[14px] font-medium' id='namePara1'>I am the Principal Solicitor at Love Homes Conveyancing, <br /> a firm that provides fast, reliable, and stress-free conveyancing services for the benefit of clients and referrers. With over 25 years of combined experience in accounting, law, and business, I have the skills and knowledge to handle all types of property transactions and deliver practical legal advice.</p>
                    <p className='pt-5 font-poppins text-[14px] font-medium' id='namePara1'>My mission is to provide a fresh and client-centric approach to conveyancing that maximises the time and energy of agents and brokers, and enables them to focus on growing their business. I work with dynamic and ambitious professionals who want a legal partner who is highly responsive, deal-focused, available after hours, and digital savvy. I am passionate about providing 7-star service and creating long-term relationships with my clients.</p>

                    <div className='pt-10' id='btn_aboutpagespeak'>
                        <a href="https://api.whatsapp.com/send?phone=61434303537&text=Hi%20Robin%20Carter%2C%20I%27m%20interested%20in%20your%20property%20conveyancing%20services.%20Can%20you%20please%20provide%20more%20information%3F%20Thank%20you!%0A" target="_blank" rel="noopener noreferrer">
                            <button className="w-[250px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105  hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f0532d] before:to-[#f0532d] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000] font-poppins font-bold text-lg hover:text-white" id='btnaboutspeakmain'>Get A Quote</button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutHome;
