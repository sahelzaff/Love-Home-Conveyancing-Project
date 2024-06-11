import React, { useState } from 'react'
import { assets } from '../../assets/assets'

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
        <div className='max-w-screen-4xl w-full h-auto pb-10'>
            <div className='px-[5rem] flex flex-col items-center justify-center h-auto'>
                <div className='flex flex-row items-center justify-center h-auto'>
                    <div className='flex flex-col items-start justify-center h-auto w-3/4 '>
                        <h2 className='font-outfit font-semibold text-5xl'>FAQ's</h2>
                        <div className='w-20 h-[0.3rem] bg-[#f0532d] mt-1'></div>
                        <p className='font-poppins font-medium text-[1rem] pr-36 pt-2'>Get the answers you need in our FAQ section. We address the most frequently asked questions to ensure you have all the information required for a smooth conveyancing experience.</p>
                    </div>
                    <div>
                        <img src={assets.faq} className='' alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-14 px-6'>
                    <div id="accordion-flush" data-accordion="collapse">
                        {accordionItemsLeft.map((item, index) => (
                            <div key={index} className='w-full'>
                                <h2 id={`accordion-flush-heading-left-${index}`}>
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full py-5 font-outfit font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                        onClick={() => toggleItemLeft(index)}
                                        aria-expanded={openItemLeft === index}
                                        aria-controls={`accordion-flush-body-left-${index}`}
                                    >
                                        <span>{item.title}</span>
                                        <svg
                                            data-accordion-icon
                                            className={`w-3 h-3 transform transition-transform ${openItemLeft === index ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id={`accordion-flush-body-left-${index}`}
                                    className={`transition-max-height duration-300 overflow-hidden ${openItemLeft === index ? 'max-h-screen' : 'max-h-0'}`}
                                    aria-labelledby={`accordion-flush-heading-left-${index}`}
                                >
                                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 font-poppins text-gray-500 dark:text-gray-400">{item.content1}</p>
                                        {item.content2 && (
                                            <p className="text-gray-500 font-poppins dark:text-gray-400">{item.content2}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="accordion-flush" data-accordion="collapse">
                        {accordionItemsRight.map((item, index) => (
                            <div key={index} className='w-full'>
                                <h2 id={`accordion-flush-heading-right-${index}`}>
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full py-5 font-outfit font-bold text-[#1B1817] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                                        onClick={() => toggleItemRight(index)}
                                        aria-expanded={openItemRight === index}
                                        aria-controls={`accordion-flush-body-right-${index}`}
                                    >
                                        <span>{item.title}</span>
                                        <svg
                                            data-accordion-icon
                                            className={`w-3 h-3 transform transition-transform ${openItemRight === index ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5 5 1 1 5"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id={`accordion-flush-body-right-${index}`}
                                    className={`transition-max-height duration-300 overflow-hidden ${openItemRight === index ? 'max-h-screen' : 'max-h-0'}`}
                                    aria-labelledby={`accordion-flush-heading-right-${index}`}
                                >
                                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 font-poppins text-gray-500 dark:text-gray-400">{item.content1}</p>
                                        {item.content2 && (
                                            <p className="text-gray-500 font-poppins dark:text-gray-400">{item.content2}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const accordionItemsLeft = [
    {
        title: "What is Conveyancing?",
        content1: "Conveyancing is the process of transferring the legal title to property between a buyer and seller. It includes tasks such as contract preparation or review, conducting property searches, facilitating the exchange of contracts, protecting the interests of the client from a legal point of view, and co-ordinating all parties to get to the final point of settlement.",
        content2: "In fact, with many regulations, government requirements and parties involved, there are a myriad of things that can possibly go wrong. So if you are looking to buy or sell a property in Sydney, you need professional Sydney conveyancing services to ensure your transaction runs smoothly."
    },
    {
        title: "What is the process of conveyancing in sydney?",
        content1: "Pre-contract – the sellers’ conveyancer prepares a detailed contract for the property’s sale. It includes all of the required information and disclosures, including the title reference, plan of the land, and other information needed to transfer title to the property.Exchange in a property transaction, two identical copies of the contract are made which the buyer and seller each sign and then exchange (literally 'swap') the contracts. The buyer must also pay a deposit. The contract records the final terms of the agreement, after this no further amendments can be made.",
        content2: "Pre-settlement inspection – The buyer has the right to inspect the property before settlement to ensure the property is exactly the same as when they first inspected it. Meantime, the buyer’s conveyancers prepare the final financial figures and share this to all parties, including the banks.Settlement – The final stage of conveyancing wherein your Sydney conveyancing solicitors ensures the correct amount of money is paid to the seller, and the buyer takes possession of the property."
    },

    {
        title: "Why do i need conveyancing?",
        content1: "Property conveyancing in Sydney is not something you can DIY and undertake in your own hands. It involves legal processes, verification, searches, substantial co-ordination and possible risks that need professional support to complete the sale. Love Homes Conveyancing is a licensed law practice that simplifies buying and selling properties free of hassles and troubles.",
        content2: ""
    },
    {
        title: "How long should a conveyancer in sydney take to complete the entire process?",
        content1: "The contract will ultimately dictate the length of time between signing the contract and contract completion (settlement). Typically, 6 weeks is the standard contractual period to complete the settlement. However, there are many steps involved in conveyancing, and banks can have considerable lead times, so it is important to ensure you choose a solicitor/conveyancer who operates in an efficient manner to ensure the transaction is not put at risk.",
        content2: "From reviewing and signing the contract to carrying out inspections, searches, settlement, and the final payment – Love Homes Conveyancing has implemented a streamlined digital service to ensure clients receive a timely and efficient service."
    }
];

const accordionItemsRight = [
    {
        title: "How much should i expect to pay for conveyancing in sydney?",
        content1: "Have you heard the expression “You get what you pay for!”? If you ask for a ballpark figure, Sydney conveyancing costs can vary between $900 – $6000. The final cost can vary depending on the type of property involved, searches, and other fees charged by different authorities, however by far the biggest variance is in the professional legal fee and disbursement costs charged by the firm.",
        content2: "Here at Love Homes Conveyancing, we offer a standard and transparent cost structure to keep you from paying unnecessary costs and so you also know upfront how much you will be paying."
    },
    {
        title: "What information does a sydney conveyancer need?",
        content1: "*Contract of Sale *If buying a house, a building and pest report can be an essential document and should ideally by purchased before signing a contract *If buying an apartment, a strata report (also known as strata records inspection) is highly valuable document and should also be purchased before signing a contract *Verification of identity – government regulations demand that we verify who we are dealing with by requiring a copy of your passport and driving licence, or similar documents if these aren’t available.",
        content2: "We may require other information based on the parties and the property concerned."
    },
    {
        title: "Who is a good conveyancer in Sydney?",
        content1: "If you are looking for a Sydney conveyancing company that works together with you to find the best solution to your conveyancing needs, we think you have reached the right place. At Love Homes Conveyancing we are legal professional property specialists, who make the process simple and straight-forward for our clients without the legal jargon.",
        content2: "Our conveyancing services in Sydney are cost-effective with an emphasis on high value client service."
    }
];

export default Faq;
