import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import '../../Responsive.css';

const Faq = () => {
    const [openItemLeft, setOpenItemLeft] = useState(null);
    const [openItemRight, setOpenItemRight] = useState(null);

    const toggleItemLeft = (item) => {
        setOpenItemLeft(openItemLeft === item ? null : item);
    };

    const toggleItemRight = (item) => {
        setOpenItemRight(openItemRight === item ? null : item);
    };

    return (
        <div className='max-w-screen-4xl w-full h-auto pb-10' id='faq_main'>
            <div className='flex flex-col items-center justify-center h-auto'>
                <div className='flex flex-row items-center justify-center h-auto mx-28' id='faq_div'>
                    <div className='flex flex-col items-start justify-center h-auto w-3/4'>
                        <h2 className='font-inter font-[800] text-6xl' id='faqHead'>FAQ<span className='text-[#f0532d]'>'s</span></h2>
                        <div className='w-20 h-[0.3rem] bg-[#f0532d] mt-1'></div>
                        <p className='font-poppins font-medium text-[1.5rem] pt-2' id='faqPara'>Get the answers you need in our FAQ section. We address the most frequently asked questions to ensure you have all the information required for a smooth conveyancing experience.</p>
                    </div>
                    <div>
                        <img src={assets.faq} className='' alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-14' id='faq'>
                    {/* Left Column */}
                    <div id="accordion-flush" data-accordion="collapse">
                        {/* Accordion Item 1 */}
                        <div className='w-full'    data-aos-once="true">
                            <h2 id="accordion-flush-heading-left-1">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-inter font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                    onClick={() => toggleItemLeft(1)}
                                    aria-expanded={openItemLeft === 1}
                                    aria-controls="accordion-flush-body-left-1"
                                >
                                    <span>What is Conveyancing?</span>
                                    <div className="flex-shrink-0 w-3 h-3">
                                    
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 transform transition-transform ${openItemLeft === 1 ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="#f0532d"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="accordion-flush-body-left-1"
                                className={`transition-max-height duration-300 overflow-hidden ${openItemLeft === 1 ? 'max-h-screen' : 'max-h-0'}`}
                                aria-labelledby="accordion-flush-heading-left-1"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Conveyancing is the process of transferring the legal title to property between a buyer and seller. It includes tasks such as contract preparation or review, conducting property searches, facilitating the exchange of contracts, protecting the interests of the client from a legal point of view, and co-ordinating all parties to get to the final point of settlement.</p>

                                    <p className="font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >In fact, with many regulations, government requirements and parties involved, there are a myriad of things that can possibly go wrong. So if you are looking to buy or sell a property in Sydney, you need professional Sydney conveyancing services to ensure your transaction runs smoothly.</p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item 2 */}
                        <div className='w-full'    data-aos-once="true">
                            <h2 id="accordion-flush-heading-left-2">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-inter font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                    onClick={() => toggleItemLeft(2)}
                                    aria-expanded={openItemLeft === 2}
                                    aria-controls="accordion-flush-body-left-2"
                                >
                                    <span>What is the process of conveyancing in Sydney?</span>
                                    <div className="flex-shrink-0 w-3 h-3">
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 transform transition-transform ${openItemLeft === 2 ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="#f0532d"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="accordion-flush-body-left-2"
                                className={`transition-max-height duration-300 overflow-hidden ${openItemLeft === 2 ? 'max-h-screen' : 'max-h-0'}`}
                                aria-labelledby="accordion-flush-heading-left-2"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                
                                        <p className=" mb-2 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px] pl-2"    >Pre-contract – the sellers’ conveyancer prepares a detailed contract for the property’s sale. It includes all of the required information and disclosures, including the title reference, plan of the land, and other information needed to transfer title to the property. Exchange in a property transaction, two identical copies of the contract are made which the buyer and seller each sign and then exchange (literally 'swap') the contracts. The buyer must also pay a deposit. The contract records the final terms of the agreement, after this no further amendments can be made.</p>
                                
                                
                                        <p className="text-[13px] mb-2 font-poppins text-gray-500 dark:text-gray-400 font-bold pl-2"    >Exchange – in a property transaction, two identical copies of the contract are made which the buyer and seller each sign and then exchange (literally ‘swap’) the contracts. The buyer must also pay a deposit. The contract records the final terms of the agreement, after this no further amendments can be made.</p>
                                
                                    
                                        <p className="text-[13px] mb-2 font-poppins text-gray-500 dark:text-gray-400 font-bold pl-2"    >Pre-settlement inspection – The buyer has the right to inspect the property before settlement to ensure the property is exactly the same as when they first inspected it. Meantime, the buyer’s conveyancers prepare the final financial figures and share this to all parties, including the banks.</p>
                                
                                        <p className="text-[13px] mb-2 font-poppins text-gray-500 dark:text-gray-400 font-bold pl-2"    >Settlement – The final stage of conveyancing wherein your Sydney conveyancing solicitors ensures the correct amount of money is paid to the seller, and the buyer takes possession of the property.</p>
                                
                                </div>

                            </div>
                        </div>

                        {/* Accordion Item 3 */}
                        <div className='w-full'    data-aos-once="true">
                            <h2 id="accordion-flush-heading-left-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-inter font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                    onClick={() => toggleItemLeft(3)}
                                    aria-expanded={openItemLeft === 3}
                                    aria-controls="accordion-flush-body-left-3"
                                >
                                    <span>Why do I need conveyancing?</span>
                                    <div className="flex-shrink-0 w-3 h-3">
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 transform transition-transform ${openItemLeft === 3 ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="#f0532d"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="accordion-flush-body-left-3"
                                className={`transition-max-height duration-300 overflow-hidden ${openItemLeft === 3 ? 'max-h-screen' : 'max-h-0'}`}
                                aria-labelledby="accordion-flush-heading-left-3"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Property conveyancing in Sydney is not something you can DIY and undertake in your own hands. It involves legal processes, verification, searches, substantial co-ordination and possible risks that need professional support to complete the sale. Love Homes Conveyancing is a licensed law practice that simplifies buying and selling properties free of hassles and troubles.</p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item 4 */}
                        <div className='w-full'    data-aos-once="true">
                            <h2 id="accordion-flush-heading-left-4">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-inter font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                    onClick={() => toggleItemLeft(4)}
                                    aria-expanded={openItemLeft === 4}
                                    aria-controls="accordion-flush-body-left-4"
                                >
                                    <span>How long should a conveyancer in sydney take to complete the entire process?</span>
                                    <div className="flex-shrink-0 w-3 h-3">
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 transform transition-transform ${openItemLeft === 4 ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="#f0532d"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="accordion-flush-body-left-4"
                                className={`transition-max-height duration-300 overflow-hidden ${openItemLeft === 4 ? 'max-h-screen' : 'max-h-0'}`}
                                aria-labelledby="accordion-flush-heading-left-4"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className=" mb-2 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >The contract will ultimately dictate the length of time between signing the contract and contract completion (settlement). Typically, 6 weeks is the standard contractual period to complete the settlement. However, there are many steps involved in conveyancing, and banks can have considerable lead times, so it is important to ensure you choose a solicitor/conveyancer who operates in an efficient manner to ensure the transaction is not put at risk.</p>

                                    <p className="font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >From reviewing and signing the contract to carrying out inspections, searches, settlement, and the final payment – Love Homes Conveyancing has implemented a streamlined digital service to ensure clients receive a timely and efficient service.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div id="accordion-flush" data-accordion="collapse">
                        {/* Accordion Item 1 */}
                        <div className='w-full'    data-aos-once="true">
                            <h2 id="accordion-flush-heading-right-1">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-inter font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                    onClick={() => toggleItemRight(1)}
                                    aria-expanded={openItemRight === 1}
                                    aria-controls="accordion-flush-body-right-1"
                                >
                                    <span>How much should I expect to pay for conveyancing services in Sydney?</span>
                                    <div className="flex-shrink-0 w-3 h-3">
                                        <svg
                                            data-accordion-icon
                                            className={`transform transition-transform ${openItemRight === 1 ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="#f0532d"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="accordion-flush-body-right-1"
                                className={`transition-max-height duration-300 overflow-hidden ${openItemRight === 1 ? 'max-h-screen' : 'max-h-0'}`}
                                aria-labelledby="accordion-flush-heading-right-1"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                    <p className="mb-4 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Have you heard the expression “You get what you pay for!”?</p>
                                    <p className="mb-4 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >If you ask for a ballpark figure, Sydney conveyancing costs can vary between $900 – $6000. The final cost can vary depending on the type of property involved, searches, and other fees charged by different authorities, however by far the biggest variance is in the professional legal fee and disbursement costs charged by the firm.</p>
                                    <p className="mb-4 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Here at Love Homes Conveyancing, we offer a standard and transparent cost structure to keep you from paying unnecessary costs and so you also know upfront how much you will be paying.</p>
                                </div>
                            </div>
                        </div>


                        {/* Accordion Item 2 */}
                        <div className='w-full'    data-aos-once="true">
                            <h2 id="accordion-flush-heading-right-2">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-inter font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                    onClick={() => toggleItemRight(2)}
                                    aria-expanded={openItemRight === 2}
                                    aria-controls="accordion-flush-body-right-2"
                                >
                                    <span>What information does a Sydney conveyancer need?</span>
                                    <div className="flex-shrink-0 w-3 h-3">

                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 transform transition-transform ${openItemRight === 2 ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="#f0532d"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="accordion-flush-body-right-2"
                                className={`transition-max-height duration-300 overflow-hidden ${openItemRight === 2 ? 'max-h-screen' : 'max-h-0'}`}
                                aria-labelledby="accordion-flush-heading-right-2"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className=" mb-5 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Some of the most important documents required for property conveyancing in Sydney include:</p>
                                <p className=" mb-3 ml-6 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Contract of Sale</p>
                                <p className=" mb-3 ml-6 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >If buying a house, a building and pest report can be an essential document and should ideally by purchased before signing a contract</p>
                                <p className=" mb-3 ml-6 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >If buying an apartment, a strata report (also known as strata records inspection) is highly valuable document and should also be purchased before signing a contract</p>
                                <p className=" mb-3 ml-6 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Verification of identity – government regulations demand that we verify who we are dealing with by requiring a copy of your passport and driving licence, or similar documents if these aren’t available.</p>
                                <p className=" mb-5 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >We may require other information based on the parties and the property concerned.</p>
                                
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item 3 */}
                        <div className='w-full'    data-aos-once="true">
                            <h2 id="accordion-flush-heading-right-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full py-5 font-inter font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                    onClick={() => toggleItemRight(3)}
                                    aria-expanded={openItemRight === 3}
                                    aria-controls="accordion-flush-body-right-3"
                                >
                                    <span>Who is a good conveyancer in Sydney?</span>
                                    <div className="flex-shrink-0 w-3 h-3">

                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 transform transition-transform ${openItemRight === 3 ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="#f0532d"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="accordion-flush-body-right-3"
                                className={`transition-max-height duration-300 overflow-hidden ${openItemRight === 3 ? 'max-h-screen' : 'max-h-0'}`}
                                aria-labelledby="accordion-flush-heading-right-3"
                            >
                                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p className=" mb-5 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >If you are looking for a Sydney conveyancing company that works together with you to find the best solution to your conveyancing needs, we think you have reached the right place. At Love Homes Conveyancing we are legal professional property specialists, who make the process simple and straight-forward for our clients without the legal jargon.</p>
                                <p className=" mb-5 font-poppins text-gray-500 dark:text-gray-400 font-bold text-[13px]"    >Our conveyancing services in Sydney are cost-effective with an emphasis on high value client service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add this new button section after the accordion grid */}
                <div className="flex justify-center w-full mt-10">
                    <a href="mailto:hello@love-homes.com.au">
                        <button className="bg-[#f0532d] hover:bg-orange-600 cursor-pointer font-inter font-bold text-[1rem] text-white py-3 px-6 rounded-lg text-lg md:text-xl lg:text-2xl">
                            Write Your Question
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Faq;
