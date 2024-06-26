import React, { useState, useContext } from 'react';
import { QuoteContext } from '../../QuoteContext';
import { assets } from '../../assets/assets';
import './CalculatorMain.css';
import { useNavigate } from 'react-router-dom';

const CalculatorMain = ({ setShowQuote }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        transactionType: '',
        propertyType: '',
        area: '',
        name: '',
        email: '',
        phone: ''
    });
    const { setQuote } = useContext(QuoteContext);
    const navigate = useNavigate();

    const handleChange = input => e => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleCheckboxChange = input => e => {
        setFormData({ ...formData, [input]: e.target.value });
        nextStep();
    };

    const handleSubmit = async () => {
        let quoteData = {
            exchangeToSettlement: 0,
            verificationOfIdentity: 20.00,
            searchesEstimatedPrice: 150.00,
            gst: 0,
            total: 0,
            name: formData.name,
            email: formData.email
        };

        const { transactionType, propertyType, area } = formData;

        if (transactionType === 'buy' || transactionType === 'sell' || transactionType === 'transfer' || transactionType === 'contract') {
            if ((propertyType === 'house' || propertyType === 'apartment' || propertyType === 'otp') &&
                (area === 'nsw' || area === 'vic' || area === 'sa' || area === 'wa' || area === 'act' || area === 'qld')) {
                quoteData.exchangeToSettlement = 1350.00;
                quoteData.gst = 182.00;
                quoteData.total = 1672.00;
            } else if (propertyType === 'land' &&
                (area === 'nsw' || area === 'sa' || area === 'wa' || area === 'act' || area === 'qld')) {
                quoteData.exchangeToSettlement = 1250.00;
                quoteData.gst = 142.00;
                quoteData.total = 1562.00;
            }
        }

        try {
            const response = await fetch('http://localhost:4000/api/lead-cal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setQuote(quoteData);
                setShowQuote(true)
                


                // Call backend to generate PDF and send email
               
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('Error submitting form data', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 h-auto flex flex-col justify-center items-center">
            <div className='pt-36'>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <h1 className="text-black font-inter text-5xl font-[800]">Conveyancing <span className='text-[#f0532d]'>Calculator</span></h1>
                    <div className='w-3/4 rounded-lg h-[0.3rem] bg-[#f0532d] mt-2'></div>
                    <p className='font-poppins font-medium text-3xl pt-10'>Ready to take the next step in your property journey?</p>
                    <p className='font-poppins font-medium text-3xl pt-3'>Fill in your details below to get an instant online quote</p>
                </div>
            </div>
            {step === 1 && (
                <div className='pt-14'>
                    <h2 className="text-2xl mb-4 font-poppins font-medium text-center">Buying or Selling?</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <label
                            className="flex flex-col items-center p-4 w-[250px] max-w-[250px] border rounded-lg cursor-pointer hover:bg-[#f0532d] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.buycalWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.buycal}
                        >
                            <input type="checkbox" value="buy" onChange={handleCheckboxChange('transactionType')} className="hidden" />
                            <img src={assets.buycal} alt="Buy" className="w-36 h-36 mb-2" />
                            <span className='font-inter font-semibold text-lg group-hover:text-white'>Buy</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-4 border w-[250px] max-w-[250px] rounded-lg cursor-pointer hover:bg-[#f0532d] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.sellcalWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.sellcal}
                        >
                            <input type="checkbox" value="sell" onChange={handleCheckboxChange('transactionType')} className="hidden" />
                            <img src={assets.sellcal} alt="Sell" className="w-36 h-36 mb-2" />
                            <span className='font-inter font-semibold text-lg group-hover:text-white'>Sell</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-4 border w-[250px] max-w-[250px] rounded-lg cursor-pointer hover:bg-[#f0532d] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.transfercalWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.transfercal}
                        >
                            <input type="checkbox" value="transfer" onChange={handleCheckboxChange('transactionType')} className="hidden" />
                            <img src={assets.transfercal} alt="Sell" className="w-36 h-36 mb-2" />
                            <span className='font-inter font-semibold text-lg group-hover:text-white'>Transferring</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-4 border w-[250px] max-w-[250px] rounded-lg cursor-pointer hover:bg-[#f0532d] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.contractcalWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.contractcal}
                        >
                            <input type="checkbox" value="contract" onChange={handleCheckboxChange('transactionType')} className="hidden" />
                            <img src={assets.contractcal} alt="Sell" className="w-36 h-36 mb-2" />
                            <span className='font-inter font-semibold text-lg group-hover:text-white'>Contract Advice</span>
                        </label>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button onClick={prevStep} className="px-6 py-2 bg-orange-400 text-white rounded-lg" disabled={step === 1}>Previous</button>
                        <button onClick={nextStep} className="py-2 px-10 bg-[#f0532d] text-white rounded-lg">Next</button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h2 className="text-2xl mb-4 font-poppins font-medium text-center">Select Property Type</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg cursor-pointer hover:bg-[#f0532d] group w-[250px] max-w-[250px]"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.houseWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.house}
                        >
                            <input type="checkbox" value="house" onChange={handleCheckboxChange('propertyType')} className="hidden" />
                            <img src={assets.house} alt="House" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">House</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg cursor-pointer hover:bg-[#f0532d] group w-[250px] max-w-[250px]"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.apartmentWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.apartment}
                        >
                            <input type="checkbox" value="apartment" onChange={handleCheckboxChange('propertyType')} className="hidden" />
                            <img src={assets.apartment} alt="Apartment" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">Apartment</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg cursor-pointer hover:bg-[#f0532d] group w-[250px] max-w-[250px]"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.landWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.land}
                        >
                            <input type="checkbox" value="land" onChange={handleCheckboxChange('propertyType')} className="hidden" />
                            <img src={assets.land} alt="Land" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">Land</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg cursor-pointer hover:bg-[#f0532d] group w-[250px] max-w-[250px]"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.otpWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.otp}
                        >
                            <input type="checkbox" value="otp" onChange={handleCheckboxChange('propertyType')} className="hidden" />
                            <img src={assets.otp} alt="OTP" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">OTP</span>
                        </label>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button onClick={prevStep} className="px-6 py-2 bg-orange-400 text-white rounded-lg" disabled={step === 1}>Previous</button>
                        <button onClick={nextStep} className="py-2 px-10 bg-[#f0532d] text-white rounded-lg">Next</button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div>
                    <h2 className="text-2xl mb-4 font-poppins font-medium text-center">Select Area</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg mb-2 cursor-pointer hover:bg-[#f0532d] w-[250px] max-w-[250px] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.nswWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.nsw}
                        >
                            <input type="checkbox" value="nsw" onChange={handleCheckboxChange('area')} className="hidden" />
                            <img src={assets.nsw} alt="NSW" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">New South Wales</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg mb-2 cursor-pointer hover:bg-[#f0532d] w-[250px] max-w-[250px] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.qldWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.qld}
                        >
                            <input type="checkbox" value="qld" onChange={handleCheckboxChange('area')} className="hidden" />
                            <img src={assets.qld} alt="QLD" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">Queensland</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg mb-2 cursor-pointer hover:bg-[#f0532d] w-[250px] max-w-[250px] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.vicWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.vic}
                        >
                            <input type="checkbox" value="vic" onChange={handleCheckboxChange('area')} className="hidden" />
                            <img src={assets.vic} alt="VIC" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">Victoria</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg mb-2 cursor-pointer hover:bg-[#f0532d] w-[250px] max-w-[250px] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.actWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.act}
                        >
                            <input type="checkbox" value="act" onChange={handleCheckboxChange('area')} className="hidden" />
                            <img src={assets.act} alt="ACT" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white text-center">Australian Capital Territory</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg mb-2 cursor-pointer hover:bg-[#f0532d] w-[250px] max-w-[250px] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.waWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.wa}
                        >
                            <input type="checkbox" value="wa" onChange={handleCheckboxChange('area')} className="hidden" />
                            <img src={assets.wa} alt="WA" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">Western Australia</span>
                        </label>
                        <label
                            className="flex flex-col items-center p-2 border rounded-lg mb-2 cursor-pointer hover:bg-[#f0532d] w-[250px] max-w-[250px] group"
                            onMouseEnter={e => e.currentTarget.querySelector('img').src = assets.saWhite}
                            onMouseLeave={e => e.currentTarget.querySelector('img').src = assets.sa}
                        >
                            <input type="checkbox" value="sa" onChange={handleCheckboxChange('area')} className="hidden" />
                            <img src={assets.sa} alt="SA" className="w-36 h-36 mr-2" />
                            <span className="font-inter font-semibold text-lg group-hover:text-white">South Australia</span>
                        </label>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button onClick={prevStep} className="px-6 py-2 bg-orange-400 text-white rounded-lg" disabled={step === 1}>Previous</button>
                        <button onClick={nextStep} className="py-2 px-10 bg-[#f0532d] text-white rounded-lg">Next</button>
                    </div>
                </div>
            )}
            {step === 4 && (
                <div>
                    <h2 className="text-2xl mb-4 font-poppins font-medium text-center">Enter Your Details</h2>
                    <div className="flex flex-col w-[400px] mx-auto gap-10">
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={handleChange('name')}
                            className="text-xl font-inter p-2 border1 mb-2 bg-transparent focus-outline-none focus:border-[#f0532d]"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleChange('email')}
                            className="p-2 text-xl font-inter border1 mb-2 bg-transparent focus-outline-none focus:border-[#f0532d]"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            onChange={handleChange('phone')}
                            className="p-2 text-xl font-inter border1 mb-2 bg-transparent focus-outline-none focus:border-[#f0532d]"
                            required
                        />
                        <button
                            onClick={handleSubmit}
                            className="mx-auto w-[200px] py-3 text-center bg-[#f0532d] text-black font-inter font-bold text-xl rounded-sm hover:bg-[#f3704f] hover:text-white"
                        >
                            Get a Free Quote
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default CalculatorMain;
