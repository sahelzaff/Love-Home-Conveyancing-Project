import React from 'react'
import { assets } from '../../assets/assets'
import '../../Responsive.css'


const BlogsInfo = () => {
  return (
    <div>
         <div>
            <section className="relative h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.bloghead})` }}>
                <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8">
                    <h1 className="text-black font-inter text-6xl font-[800] relative z-10" id='BloginfoHead'>Blogs</h1>
                    <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-2'></div>
                    <p className='font-inter font-medium text-[1.5rem] pt-4 w-[40%]' id='BloginfoPara'>We value your feedback and inquiries. Whether you have questions about our services, need assistance, or just want to share your thoughts, feel free to reach out to us. Our dedicated team is here to help you every step of the way.
                    </p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default BlogsInfo