import React from 'react';
import { FaShippingFast, FaTrophy, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const ReachOut = () => {
  return (
    <div className="bg-rose-100 my-14 p-8 flex flex-col md:flex-row justify-between justify-items-center space-y-4 md:space-y-0">
      <div className="font-bold text-gray-900 flex flex-col items-center justify-center">
        <h2 className="item-center font-bold mb-4 text-[1.2rem] xl:text-[1.4rem]">How can we help you ?</h2>
        <div className="flex rounded-md items-center p-2 pl-2 pr-4 bg-white justify-center gap-4 mb-6 shadow-lg">

          <input type="text" className="w-full px-4 text-[0.8rem]" placeholder="Ask Your Question" />
          <button className="bg-rose-700 text-xs text-white px-4 py-2 rounded-lg hover:bg-rose-600">Subscribe</button>

        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 md:w-1/2 xl:flex xl:items-center xl:justify-between xl:flex-row">
        <div className="flex flex-col items-center text-center text-[0.8rem] md:text-base">
          <FaShippingFast size={32} className="mb-2" />
          <span>Free Shipping</span>
          <span className="text-xs md:text-sm text-gray-500
          ">Order over 150 $</span>
        </div>
        <div className="flex flex-col items-center text-center text-[0.8rem] md:text-base ">
          <FaTrophy size={32} className="mb-2" />
          <span>High Quality</span>
          <span className="text-xs md:text-sm text-gray-500">crafted from top materials</span>
        </div>
        <div className="flex flex-col items-center text-center text-[0.8rem] md:text-base">
          <FaHeadset size={32} className="mb-2" />
          <span>24 / 7 Support</span>
          <span className="text-xs md:text-sm text-gray-500">Dedicated support</span>
        </div>
        <div className="flex flex-col items-center text-center text-[0.8rem] md:text-base">
          <FaShieldAlt size={32} className="mb-2" />
          <span>Warranty Protection</span>
          <span className="text-xs md:text-sm text-gray-500">Over 2 years</span>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
