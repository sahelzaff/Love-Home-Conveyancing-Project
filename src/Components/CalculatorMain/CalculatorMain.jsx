import React, { useState, useContext, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import { QuoteContext } from '../../QuoteContext';
import { assets } from '../../assets/assets';
import './CalculatorMain.css';
import '../../Responsive.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import InputMask from 'react-input-mask';


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
    const location = useLocation();

    useEffect(() => {
        const state = location.state;
        if (state) {
            const { transactionType, propertyType, area } = state;
            setFormData({
                ...formData,
                transactionType,
                propertyType,
                area
            });
            setStep(4);
        }
    }, [location.state]);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [countryCode, setCountryCode] = useState('+61');

    const handleChange = input => e => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const handlePhoneChange = (value) => {
        const formattedNumber = formatPhoneNumber(value, countryCode);
        setFormData({ ...formData, phone: formattedNumber });
    };

    const handleCountrySelect = (code) => {
        setCountryCode(code);
        setDropdownOpen(false);
    };

    const formatPhoneNumber = (number, code) => {
        const cleanedNumber = number.replace(/\D/g, '');

        switch (code) {
            case '+61': // Australia
                return cleanedNumber.length > 8
                    ? `+61 ${cleanedNumber.slice(0, 3)} ${cleanedNumber.slice(3, 6)} ${cleanedNumber.slice(6,9)}`
                    : cleanedNumber;
            case '+91': // India
                return cleanedNumber.length > 9
                    ? `+91 ${cleanedNumber.slice(0, 5)} ${cleanedNumber.slice(5,10)}`
                    : cleanedNumber;
            case '+1': // US
                return cleanedNumber.length > 9
                    ? `+1 ${cleanedNumber.slice(0, 3)} ${cleanedNumber.slice(3, 6)} ${cleanedNumber.slice(6,10)}`
                    : cleanedNumber;
            default:
                return cleanedNumber;
        }
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

        const transactionTypeMap = {
            'buy': 'Buying',
            'sell': 'Selling',
            'transfer': 'Transferring',
            'contract': 'Contract Advice'
        };

        const propertyTypeMap = {
            'house': 'House',
            'apartment': 'Apartment',
            'land': 'Land',
            'otp': 'Otp'
        };

        const stateMap = {
            'nsw': 'New South Wales',
            'qld': 'QueensLand',
            'sa': 'South Australia',
            'vic': 'Victoria',
            'act': 'Australian Capital Territory',
            'wa': 'Western Australia'
        };

        const mappedTransactionType = transactionTypeMap[transactionType];
        const mappedPropertyType = propertyTypeMap[propertyType];
        const mappedState = stateMap[area];

        if (mappedTransactionType && mappedPropertyType && mappedState) {
            if (
                (mappedTransactionType === 'Buying' ||
                    mappedTransactionType === 'Selling' ||
                    mappedTransactionType === 'Transferring' ||
                    mappedTransactionType === 'Contract Advice') &&
                ((mappedPropertyType === 'House' ||
                    mappedPropertyType === 'Apartment' ||
                    mappedPropertyType === 'Otp') &&
                    (mappedState === 'New South Wales' ||
                        mappedState === 'Victoria' ||
                        mappedState === 'South Australia' ||
                        mappedState === 'Western Australia' ||
                        mappedState === 'Australian Capital Territory' ||
                        mappedState === 'QueensLand'))
            ) {
                quoteData.exchangeToSettlement = 1350.0;
                quoteData.gst = 182.0;
                quoteData.total = 1702.0;
            } else if (
                mappedPropertyType === 'Land' &&
                (mappedState === 'New South Wales' ||
                    mappedState === 'South Australia' ||
                    mappedState === 'Western Australia' ||
                    mappedState === 'Australian Capital Territory' ||
                    mappedState === 'QueensLand')
            ) {
                quoteData.exchangeToSettlement = 1250.0;
                quoteData.gst = 142.0;
                quoteData.total = 1594.0;
            }
        }

        try {
            const response = await fetch('https://lovehomeconvyancingbackend-production.up.railway.app/api/lead-cal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setQuote(quoteData);
                setShowQuote(true);

                // Sending data to Privyr webhook
                try {
                    const privyrResponse = await fetch('https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/IUfFmRTn', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });

                    if (!privyrResponse.ok) {
                        console.error('Failed to send data to Privyr webhook');
                    }
                } catch (privyrError) {
                    console.error('Error sending data to Privyr webhook', privyrError);
                }
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
                    <h1 className="text-black font-inter text-5xl font-[800]" id='calculatormainhead'>Conveyancing <span className='text-[#f0532d]'>Calculator</span></h1>
                    <div className='w-3/4 rounded-lg h-[0.3rem] bg-[#f0532d] mt-2'></div>
                    <p className='font-poppins font-medium text-3xl pt-10' id='calculator_main_sublinepara1'>Ready to take the next step in your property journey?</p>
                    <p className='font-poppins font-medium text-3xl pt-3' id='calculator_main_sublinepara2'>Fill in your details below to get an instant online quote</p>
                </div>
            </div>
            {step === 1 && (
                <div className='pt-14' id='calculator_grid_main'>
                    <h2 className="text-2xl mb-4 font-poppins font-medium text-center">Buying or Selling?</h2>
                    <div className="grid grid-cols-2 gap-4" id='gridcalculatormobile'>
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
                    <div className="grid grid-cols-2 gap-4" id='gridcalculatormobile'>
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
                    <div className="grid grid-cols-2 gap-4" id='gridcalculatormobile'>
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
                    <div className="flex flex-col w-[400px] mx-auto gap-10" id='formcalculatormain'>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={handleChange('name')}
                            className=" font-inter p-2 border-2 border-[#f0532d] rounded-lg mb-2 bg-white focus:outline-none focus:border-[#f0532d]"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleChange('email')}
                            className="p-2  font-inter border-2 border-[#f0532d] rounded-lg mb-2 bg-white focus:outline-none focus:border-[#f0532d]"
                            required
                        />

                        <div className="relative flex items-center">
                            <button
                                id="dropdown-phone-button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 cursor-pointer"
                                type="button"
                            >
                                <img
                                    src={countryCode === '+61' ? assets.australia : countryCode === '+91' ? assets.india : assets.america}
                                    alt="Country Flag"
                                    className="w-6 h-6"
                                />
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                            </button>
                            {dropdownOpen && (
                                <div id="dropdown-phone" className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
                                    <ul className="py-2 text-sm rounded-lg text-gray-700 dark:text-gray-200 absolute bg-white top-[1.5rem] left-[-12rem]" aria-labelledby="dropdown-phone-button">
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                                role="menuitem"
                                                onClick={() => handleCountrySelect('+1')}
                                            >
                                                <img src={assets.america} alt="US Flag" className="w-6 h-6 mr-2" />
                                                United States
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                                role="menuitem"
                                                onClick={() => handleCountrySelect('+61')}
                                            >
                                                <img src={assets.australia} alt="Australia Flag" className="w-6 h-6 mr-2" />
                                                Australia
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                                role="menuitem"
                                                onClick={() => handleCountrySelect('+91')}
                                            >
                                                <img src={assets.india} alt="India Flag" className="w-6 h-6 mr-2" />
                                                India
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <input
                                type="text"
                                value={formData.phone}
                                onChange={e => handlePhoneChange(e.target.value)}
                                placeholder="Enter your phone number"
                                className="ml-2 flex-1 py-2.5 px-4 border-2 border-[#f0532d] rounded-lg font-inter "
                            />
                        </div>





                        <button
                            onClick={handleSubmit}
                            className="w-[250px] bg-white h-[50px] my-3 flex items-center justify-center  rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105  hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f0532d] before:to-[#f0532d] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000] font-poppins font-bold text-lg hover:text-white mx-auto" id='bodergetquote' >Get a Free Quote</button>


                    </div>
                </div>
            )}
        </div>
    );
};

export default CalculatorMain;
