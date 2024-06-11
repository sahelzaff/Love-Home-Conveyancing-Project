import React from 'react'
import { assets } from '../../assets/assets'

const WorkSection = () => {
    return (
        <div className='h-auto flex flex-col '>
            <div className=' flex flex-row justify-between items-center px-4'>
                <div>
                    <p className='font-outfit text-2xl text-[#1B1817] mb-1'>How does it work?</p>
                    <p className='font-outfit text-2xl italic font-medium tracking-wider'>At LoveHome Conveyancing,</p>
                    <p className='font-outfit text-3xl italic font-medium tracking-wider'>We do exactly what we promise.</p>
                    <p className='font-outfit text-3xl italic font-medium tracking-wider'>We handle every detail with care.</p>
                </div>
                <div>
                    <img src={assets.house_Work1} alt="" srcset="" />
                </div>
            </div>
            <div className='grid grid-cols-2 grid-rows-3 gap-10 px-20'>
                <div className='flex flex-row gap-2 '>
                    <div>
                        <img src={assets.Engagement} className='w-[54rem]' alt="" srcset="" />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h2 className='font-outfit text-2xl pt-6 pb-2 '>Engagement</h2>
                        <p className='font-poppins text-sm'> This initial step involves selecting and appointing a professional who is proficient in handling property transactions through digital platforms. The conveyancer or solicitor will explain the process, answer any initial questions, and begin gathering essential information. They will also provide a clear outline of the services they will offer, ensuring that the customer understands what to expect throughout the transaction. This engagement sets the foundation for a smooth and efficient conveyancing </p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 '>
                    <div>
                        <img src={assets.Documentation} className='w-[44rem]' alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='font-outfit text-2xl pt-6 pb-2'>Consultation & Documentation</h2>
                        <p className='font-poppins text-sm'> During this stage, the conveyancer or solicitor will discuss the customer’s needs and collect essential documents like identification and property details. They will meticulously review all contracts and documents to identify any potential issues. This ensures that all necessary information is gathered and analyzed, paving the way for a smooth conveyancing process.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 '>
                    <div>
                        <img src={assets.PropertyCheck} className='w-[44rem]' alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='font-outfit text-2xl pt-6 pb-2'>Property Checks</h2>
                        <p className='font-poppins text-sm'> This step involves performing comprehensive searches to uncover any issues that could affect the property. We check for legal restrictions, planning permissions, environmental risks, and other factors. The conveyancer also verifies the property's title to ensure there are no hidden encumbrances or disputes. This thorough due diligence ensures the customer can proceed with confidence. </p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 '>
                    <div>
                        <img src={assets.Financial} className='w-[44rem]' alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='font-outfit text-2xl pt-6 pb-2'>Financial Arrangements</h2>
                        <p className='font-poppins text-sm'>This stage involves managing all financial details related to the property transaction. The conveyancer will coordinate with lenders, ensure funds are in place, and prepare for the final settlement. They will also calculate adjustments for rates and taxes and ensure all financial obligations are met. This meticulous preparation ensures a smooth and timely settlement process.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 '>
                    <div>
                        <img src={assets.Settlement} className='w-[44rem]' alt="" srcset="" />
                    </div>
                    <div>
                        <h2 className='font-outfit text-2xl pt-6 pb-2'>Settlement</h2>
                        <p className='font-poppins text-sm'>In this final stage, the conveyancer oversees the official transfer of property ownership, ensuring all legal and financial requirements are met. They coordinate the exchange of documents and funds between parties, confirming that the title is correctly registered in the new owner’s name. Post-purchase, they provide support to address any remaining questions or issues, ensuring a seamless transition for the new homeowner.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WorkSection