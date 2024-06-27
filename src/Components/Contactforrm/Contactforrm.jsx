import React, { useRef, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import ReCAPTCHA from 'react-google-recaptcha';
import Modal from 'react-modal';

const Contactform = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState('');

  const onRecaptchaChange = (value) => {
    if (value) {
      setIsVerified(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      setError('Please verify that you are a human.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/form/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        });
        setIsVerified(false);
      } else {
        setError('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setError('There was an error submitting the form. Please try again.');
    }
  };

  const rightDivRef = useRef(null);
  const leftDivRef = useRef(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      const rightDiv = rightDivRef.current;
      const leftDiv = leftDivRef.current;

      if (!rightDiv || !leftDiv) return;

      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const leftDivScrollHeight = leftDiv.scrollHeight - leftDiv.clientHeight;
      leftDiv.scrollTop = scrollPercentage * leftDivScrollHeight;
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <div className="h-auto w-full max-w-screen-4xl bg-[#f4f4f4] flex flex-col justify-center items-center py-20 px-2">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="font-poppins font-medium text-xl">Let's Discuss</h1>
        <h2 className="font-inter font-bold text-5xl">Whatever Question You Have,</h2>
        <h3 className="font-inter font-bold text-5xl text-[#f0532d]">Please Feel Free To Ask.</h3>
      </div>

      <div className="flex-grow container mx-auto p-4 flex h-auto">
        <div className="w-3/4 overflow-y-auto h-auto bg-[#f4f4f4] p-4 no-scrollbar" ref={leftDivRef}>
          <form className="w-full mx-auto pr-32  no-scrollbar h-auto bg-[#f4f4f4]" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-10 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block py-2.5 w-full text-sm text-gray-900 bg-white border-1 rounded-lg border-[#f0532d]  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f0542dec] peer"
                  placeholder=" "
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 px-1">First name</label>
              </div>
              <div className="relative z-0 w-full mb-10 group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-1 rounded-lg border-[#f0532d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f0542dec] peer"
                  placeholder=" "
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 px-1">Last name</label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-10 group">
              <input
                type="tel"
                pattern="[0-9]{10}"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-1 rounded-lg border-[#f0532d] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f0542dec] peer"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 px-1">Phone number (123-456-7890)</label>
            </div>

            <div className="relative z-0 w-full mb-10 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-1 rounded-lg border-[#f0532d]  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#f0542dec] peer"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#000] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 px-1">Email address</label>
            </div>

            <div className="relative z-0 w-full mb-10 group">
              <label htmlFor="message" className="block mb-2 text-sm font-normal text-gray-500 dark:text-white">How can we help?</label>
              <input
                type="text"
                id="message"
                name="message"
                className="block w-full p-4 border- border-[#f0532d]  text-gray-900 rounded-lg bg-gray-50 text-base focus:ring-[#f0542dec] focus:border-[#f0542dec] pb-32 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <ReCAPTCHA
              sitekey='6LfmmvQpAAAAAPe_6emsWyHkSZ_AYCIv4-HgfSJQ'
              onChange={onRecaptchaChange}
              className='mb-5 cursor-pointer'
            />

            <button
              type="submit"
              disabled={!isVerified}
              className="text-white font-poppins bg-[#f0532dec] hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-7 py-2.5 text-center dark:bg-[#f0532d] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Thank You Modal"
          >
            <h2>Thank you.. we'll get in touch soon</h2>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </Modal>
        </div>
        <div className="w-2/6 h-auto bg-[#f4f4f4] p-4 sticky top-0 overflow-x-hidden border-l-2" ref={rightDivRef}>
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-start justify-start gap-5 w-96 mb-10">
              <div>
                <img src={assets.clock_contact} className="w-12" alt="Clock" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-inter font-bold text-2xl">Working Hours</h2>
                <div className="w-80 font-poppins font-medium">
                  <div className="flex flex-row items-start justify-between">
                    <p>Mon-Fri</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <p>Sat - Sun</p>
                    <p>Only by Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-5 w-96 mb-10">
              <div>
                <img src={assets.location} className="w-12" alt="Location" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-inter font-bold text-2xl">Address</h2>
                <div className="w-80 font-poppins font-medium">
                  <div className="flex flex-row items-start justify-between">
                    <p>Suite 17, Minton House,</p>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <p>2-14 Bayswater Road, Potts Point 2011</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-5 w-96 mb-10">
              <div>
                <img src={assets.telephone} className="w-12" alt="Telephone" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-inter font-bold text-2xl">Phone</h2>
                <div className="w-80 font-poppins font-medium">
                  <div className="flex flex-row items-start justify-between">
                    <p>+02 9381 9118</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-5 w-96">
              <div>
                <img src={assets.mail} className="w-12" alt="Mail" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-inter font-bold text-2xl">Email</h2>
                <div className="w-80 font-poppins font-medium">
                  <div className="flex flex-row items-start justify-between">
                    <p>hello@love-homes.com.au</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
