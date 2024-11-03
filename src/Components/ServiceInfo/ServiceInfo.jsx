import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import '../../Responsive.css';

const ServiceInfo = () => {
    const [bgImage, setBgImage] = useState(() => {
        return window.innerWidth <= 600 ? assets.serviceshead_mobile : assets.serviceshead;
    });

    useEffect(() => {
        const updateBgImage = () => {
            if (window.innerWidth <= 600) {
                setBgImage(assets.serviceshead_mobile);
            } else {
                setBgImage(assets.serviceshead);
            }
        };

        window.addEventListener('resize', updateBgImage);

        return () => {
            window.removeEventListener('resize', updateBgImage);
        };
    }, []);

    return (
        <div>
            <div>
                <section className="relative h-screen bg-center bg-cover bg-no-repeat" id='bg_contact' style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="absolute inset-0 bg-[#f4f4f4] h-[40vh] bg-opacity-80 flex flex-col items-start justify-center px-8" id='contact_head_overlay'></div>
                    <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8">
                        <h1 className="text-black font-inter text-6xl font-[800]" id='serviceHead' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Services</h1>
                        <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-1 rounded-e-3xl' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
                        <p className='font-poppins font-medium text-xl pt-4 w-[45%]' id='servicePara' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                            We offer a comprehensive range of services to meet your property conveyancing needs. Our experienced team is dedicated to providing you with expert guidance and support throughout the entire process. Whether you're buying, selling, or refinancing, we are here to ensure a smooth and efficient transaction. Explore our services below to find out how we can assist you.
                        </p>
                        <Link to="/calculator">
                            <button className="bg-[#f0532d] hover:bg-orange-600 cursor-pointer font-inter font-bold text-white py-3 px-6 rounded-lg text-lg md:text-xl lg:text-2xl mt-8" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                                Get a Quote
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceInfo;