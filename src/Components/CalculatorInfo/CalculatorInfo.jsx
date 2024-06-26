import React from 'react'
import { assets } from '../../assets/assets'


const CalculatorInfo = () => {
  return (
    <div>
    <section className="relative h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.calculatorhead})` }}>
        <div className="absolute inset-0 bg-[#bebebe] bg-opacity-0 flex flex-col items-start justify-center px-8 mt-36">
            <h1 className="text-black font-inter text-5xl font-[800]" >Conveyancing Calculator</h1>
            <div className='w-32 h-[0.3rem] bg-[#f0532d] mt-1 ml-2'></div>
            <p className='font-inter font-medium text-[1.5rem] font-sm pt-4 w-[40%]' id='ContactPara'>Our Conveyancing Calculator page provides essential information for property transactions, offering seamless access to estimates and costs. Navigate confidently with our user-friendly tool, supported by our experienced team for any assistance you need.
            </p>
        </div>
    </section>
</div>
  )
}

export default CalculatorInfo