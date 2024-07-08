import React, { useState,useEffect } from 'react';
import { assets } from '../../assets/assets'
import '../../Responsive.css'


const BlogsInfo = () => {

  const [bgImage, setBgImage] = useState(() => {
    // Set initial background image based on initial window width
    return window.innerWidth <= 600 ? assets.bloghead_mobile : assets.bloghead;
});

useEffect(() => {
    const updateBgImage = () => {
        if (window.innerWidth <= 600) {
            setBgImage(assets.bloghead_mobile);
        } else {
            setBgImage(assets.bloghead);
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
            <section className="relative h-screen bg-center bg-cover bg-no-repeat" id='bg_contact' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-[#f4f4f4] h-[40vh] bg-opacity-80 flex flex-col items-start justify-center px-8" id='contact_head_overlay'></div>
                <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8">
                    <h1 className="text-black font-inter text-6xl font-[800] relative z-10" id='BloginfoHead'>Blogs</h1>
                    <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-2' id='horizontalline_sublines4'></div>
                    <p className='font-poppins font-medium text-[1.5rem] pt-4 w-[40%]' id='BloginfoPara'>We value your feedback and inquiries. Whether you have questions about our services, need assistance, or just want to share your thoughts, feel free to reach out to us. Our dedicated team is here to help you every step of the way.
                    </p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default BlogsInfo