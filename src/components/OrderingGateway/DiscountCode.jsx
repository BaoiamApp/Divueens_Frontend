// src/DiscountCode.js
import React from 'react';

const DiscountCode = ({ discountCode, setDiscountCode, handleDiscountCode }) => {
  return (
    <div className='mt-4 mb-4 sm:mb-[15px] sm:-mt-[33px]'>
      <h3 className="text-xl font-bold mt-5">Discount/ Promo Code</h3>
      <p className="text-gray-500 mb-2">Lorem Ipsum Dolor Sit Amet? Lorem Ipsum Dolor Sit Amet?</p>
      <div className="bg-rose-200 p-4 mt-3 shadow-lg rounded-md">
        <div className="flex flex-col sm:flex-row">
          <input 
            type="text"
            placeholder="type or paste here"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="p-2 rounded mb-2 sm:mb-0 sm:mr-2 flex-grow bg-rose-200 text-white placeholder:text-white outline-none"
          />
          <button onClick={handleDiscountCode} className="bg-rose-500 h-auto w-full sm:w-20 hover:bg-rose-600 text-white rounded-sm">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCode;
