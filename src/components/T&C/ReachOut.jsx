import React from 'react';
import { FaShippingFast, FaTrophy, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const ReachOut = () => {
  return (
    <div className="bg-rose-100 p-8 flex flex-col md:flex-row justify-between justify-items-center space-y-4 md:space-y-0">
      <div className="sm:flex sm:items-center ">
                        <div className="text-2xl   font-bold pl-20 text-gray-900">
                        <h2 class="md:text-2xl text-xl item-center  font-bold  mb-4">How can we help you ?</h2>
        <div className="flex flex-col sm:flex-row items-center p-2 pl-2 pr-4 bg-white justify-center gap-4 mb-6 shadow-lg">
          
                <input type="text" className="w-full sm:w-auto p-2    text-start text-xs" placeholder="Ask Your Question"/>
                <button class="bg-orange-500 text-xs text-white px-4 py-2 rounded hover:bg-orange-600">Subscribe</button>
          
            </div>
   
                  
      </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-8 w-full md:w-1/2 justify-around">
        <div className="flex flex-col items-center text-center">
          <FaShippingFast size={32} className="mb-2" />
          <span>Free Shipping</span>
          <span className="text-sm text-gray-500
          ">Order over 150 $</span>
        </div>
        <div className="flex flex-col items-center text-center ">
          <FaTrophy size={32} className="mb-2" />
          <span>High Quality</span>
          <span className="text-sm text-gray-500">crafted from top materials</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaHeadset size={32} className="mb-2" />
          <span>24 / 7 Support</span>
          <span className="text-sm text-gray-500">Dedicated support</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaShieldAlt size={32} className="mb-2" />
          <span>Warranty Protection</span>
          <span className="text-sm text-gray-500">Over 2 years</span>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
