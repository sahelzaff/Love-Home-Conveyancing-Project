import React from 'react'
import { assets } from '../../assets/assets'


const ServiceInfo = () => {
    return (
        <div>
            <div>
                <section className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.serviceshead})` }}>
                    <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8">
                        <h1 className="text-black font-inter text-6xl font-[800]">Services</h1>
                        <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-1 rounded-e-3xl'></div>
                        <p className='font-inter font-medium font-sm pt-4 w-[50%]'>We offer a comprehensive range of services to meet your property conveyancing needs. Our experienced team is dedicated to providing you with expert guidance and support throughout the entire process. Whether you're buying, selling, or refinancing, we are here to ensure a smooth and efficient transaction. Explore our services below to find out how we can assist you.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ServiceInfo