import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets'
import '../../Responsive.css'


const ServiceInfo = () => {
    const [bgImage, setBgImage] = useState(() => {
        // Set initial background image based on initial window width
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

        window.addEventListener('resize', updateBgImage); // Update on window resize

        return () => {
            window.removeEventListener('resize', updateBgImage); // Clean up the event listener on component unmount
        };
    }, []);

    return (
        <div>
            <div>
                <section className="relative h-screen  bg-center bg-cover bg-no-repeat " id='bg_contact' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="absolute inset-0 bg-[#f4f4f4] h-[40vh] bg-opacity-80 flex flex-col items-start justify-center px-8" id='contact_head_overlay'></div>
                    <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8">
                        <h1 className="text-black font-inter text-6xl font-[800]"id='serviceHead'>Services</h1>
                        <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-1 rounded-e-3xl'></div>
                        <p className='font-poppins font-medium text-xl pt-4 w-[45%]'id='servicePara'>We offer a comprehensive range of services to meet your property conveyancing needs. Our experienced team is dedicated to providing you with expert guidance and support throughout the entire process. Whether you're buying, selling, or refinancing, we are here to ensure a smooth and efficient transaction. Explore our services below to find out how we can assist you.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ServiceInfo