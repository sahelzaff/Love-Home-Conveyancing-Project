import React from 'react'
import { assets } from '../../assets/assets'

const services = [
    {
        title: 'Buying a Property',
        image: assets.buying,
        description: 'Navigate the purchasing journey with ease. From initial considerations to final settlement, trust us to expertly guide you through every stage.',
    },
    {
        title: 'Selling a Property',
        image: assets.selling,
        description: 'Accelerate your sales process with our meticulous contract preparation. We handle all documentation, empowering you to sell swiftly and confidently.',
    },
    {
        title: 'Property Transfer',
        image: assets.transfer,
        description: 'From novice buyers to seasoned investors, receive tailored contract guidance. Our expert advice ensures clarity and peace of mind throughout the transaction.',
    },
    {
        title: 'Contract Advice',
        image: assets.investor,
        description: 'Maximize your returns with our strategic investment advice.',
    },
];

const ServiceCard = ({ title, image, description }) => (
    <div className="relative group w-full sm:w-1/2 md:w-[25%] p-4 bg-[#f4f4f4] pb-20 ">
         <div className="h-[60vh] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-pointer shadow-2xl hover:shadow-3xl border border-transparent hover:border-gray-400 pb-10">

            <img
                src={image}
                alt={title}
                className="w-64 h-auto object-cover p-10 mb-10 "
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#f0532d] bg-opacity-90 px-4 group-hover:h-[9rem] transition-all duration-300 ease-in-out h-16 pb-10 ">
                <h3 className="text-xl font-bold font-outfit mt-2">{title}</h3>
                <p className="mt-1 text-sm text-gray-700 hidden group-hover:block font-poppins font-medium tracking-tighter">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const ServiceHome = () => {
    return (
        <div className='h-auto'>
            <div>
                <div className='flex flex-row items-center justify-center h-auto'>
                    <div className='flex flex-col items-start justify-center h-auto w-3/4 px-8'>
                        <h2 className='font-outfit font-semibold text-5xl'>Services</h2>
                        <div className='w-24 h-[0.3rem] bg-[#f0532d] mt-1'></div>
                        <p className='font-poppins font-medium text-[1rem] pr-36 pt-2'>At LoveHome Conveyancing, we offer expert home inspections, property evaluations, and personalized legal advice. Our comprehensive services ensure a seamless and stress-free property transaction, with meticulous document handling and continuous support.</p>
                    </div>
                    <div>
                        <img src={assets.services} alt="" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            image={service.image}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceHome
