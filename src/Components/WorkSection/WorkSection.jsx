import React from 'react'
import { assets } from '../../assets/assets'
import '../../Responsive.css'

const WorkSection = () => {
    return (
        <div className='h-auto flex flex-col pt-48 '>
            <div className=' flex flex-row justify-between items-center '>
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-8xl font-[900] font-inter" id='processH'>The <span className="text-[#f0532d]">Process</span>
                    </h1>
                    <div className='w-44 h-[0.3rem] bg-[#f0532d] mt-2'></div>
                    <p className='font-outfit text-2xl font-medium tracking-wider pt-5'>At LoveHome Conveyancing,</p>
                    
                    <p className='font-outfit text-3xl  font-medium tracking-wider'>We do exactly what we promise.</p>
                    <p className='font-outfit text-3xl  font-medium tracking-wider'>We handle every detail with care.</p>
                </div>
                <div>
                    <img src={assets.house_Work1} alt="" srcset="" />
                </div>
            </div>
            <div className='grid grid-cols-2 grid-rows-3 gap-10 w-full mx-auto ' id='workGrid'>
                <div className='flex flex-row gap-5 items-start justify-start ' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <div>
                    <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-8xl font-[900]">1</div>
                    </div>
                    <div className='flex flex-col items-start'  >
                        <h2 className='font-outfit text-3xl pt-6  text-[#f0532d] font-bold ' id='workHead'>Engagement</h2>
                        <div className='w-[8rem] h-[0.3rem] bg-[#f0532d] my-2  mb-5'></div>
                        <p className='font-poppins text-lg' id='workPara'> This initial step involves selecting and appointing a professional who is proficient in handling property transactions through digital platforms. The conveyancer or solicitor will explain the process, answer any initial questions, and begin gathering essential information. They will also provide a clear outline of the services they will offer, ensuring that the customer understands what to expect throughout the transaction. This engagement sets the foundation for a smooth and efficient conveyancing </p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 ' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <div>
                    <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-8xl font-[900]">2</div>
                    </div>
                    <div>
                        <h2 className='font-outfit text-3xl pt-6  text-[#f0532d] font-bold' id='workHead'>Consultation & Documentation</h2>
                        <div className='w-[8rem] h-[0.3rem] bg-[#f0532d] my-2 mb-5'></div>
                        <p className='font-poppins text-lg' id='workPara'> During this stage, the conveyancer or solicitor will discuss the customer’s needs and collect essential documents like identification and property details. They will meticulously review all contracts and documents to identify any potential issues. This ensures that all necessary information is gathered and analyzed, paving the way for a smooth conveyancing process.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 ' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <div>
                    <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-8xl font-[900]">3</div>
                    </div>
                    <div>
                        <h2 className='font-outfit text-3xl pt-6  text-[#f0532d] font-bold' id='workHead'>Property Checks</h2>
                        <div className='w-[8rem] h-[0.3rem] bg-[#f0532d] my-2 mb-5'></div>
                        <p className='font-poppins text-lg' id='workPara'> This step involves performing comprehensive searches to uncover any issues that could affect the property. We check for legal restrictions, planning permissions, environmental risks, and other factors. The conveyancer also verifies the property's title to ensure there are no hidden encumbrances or disputes. This thorough due diligence ensures the customer can proceed with confidence. </p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 ' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <div>
                    <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-8xl font-[900]">4</div>
                    </div>
                    <div>
                        <h2 className='font-outfit text-3xl pt-6  text-[#f0532d] font-bold' id='workHead'>Financial Arrangements</h2>
                        <div className='w-[8rem] h-[0.3rem] bg-[#f0532d] my-2 mb-5'></div>
                        <p className='font-poppins text-lg' id='workPara'>This stage involves managing all financial details related to the property transaction. The conveyancer will coordinate with lenders, ensure funds are in place, and prepare for the final settlement. They will also calculate adjustments for rates and taxes and ensure all financial obligations are met. This meticulous preparation ensures a smooth and timely settlement process.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 ' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <div>
                    <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-8xl font-[900]">5</div>
                    </div>
                    <div>
                        <h2 className='font-outfit text-3xl pt-6  text-[#f0532d] font-bold' id='workHead'>Settlement</h2>
                        <div className='w-[8rem] h-[0.3rem] bg-[#f0532d] my-2 mb-5'></div>
                        <p className='font-poppins text-lg' id='workPara'>In this final stage, the conveyancer oversees the official transfer of property ownership, ensuring all legal and financial requirements are met. They coordinate the exchange of documents and funds between parties, confirming that the title is correctly registered in the new owner’s name. Post-purchase, they provide support to address any remaining questions or issues, ensuring a seamless transition for the new homeowner.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 ' data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <div>
                    <div className="text-[#f0532d] text-4xl md:text-5xl lg:text-8xl font-[900]">6</div>
                    </div>
                    <div>
                        <h2 className='font-outfit text-3xl pt-6  text-[#f0532d] font-bold' id='workHead'>Post-Purchase Support</h2>
                        <div className='w-[8rem] h-[0.3rem] bg-[#f0532d] my-2 mb-5'></div>
                        <p className='font-poppins text-lg' id='workPara'>After settlement, the conveyancer provides the customer with any necessary post-purchase support, such as assistance with property registrations, advice on ongoing obligations, and guidance on any further legal steps required. They ensure that the customer's interests are protected even after the transaction is completed.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WorkSection