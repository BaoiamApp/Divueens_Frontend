// src/DiscountCode.js
import React from 'react';

const DiscountCode = ({ discountCode, setDiscountCode, handleDiscountCode }) => {
  return (
    <div className='mt-4 mb-4 sm:mb-[15px] sm:-mt-[33px]'>
      <h3 className="text-xl font-bold mt-5">Discount/ Promo Code</h3>
      <p className="text-gray-500 mb-2">Lorem Ipsum Dolor Sit Amet? Lorem Ipsum Dolor Sit Amet?</p>
      <div className=" p-4 mt-3 shadow-lg rounded-md">
        <div className="flex flex-col sm:flex-row">
          <input 
            type="text"
            placeholder="Type or Paste here ...."
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="p-2 rounded mb-2 sm:mb-0 sm:mr-2 flex-grow  text-rose-700 placeholder:text-rose-700 font-semibold outline-none"
          />
          <button onClick={handleDiscountCode} className="p-2 lg:text-lg text-sm sm:text-base border-[2px] border-rose-700 font-semibold rounded-lg hover:text-rose-700 hover:bg-white bg-rose-700 text-white transition-all duration-200 ease-in-out  shadow-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCode;
