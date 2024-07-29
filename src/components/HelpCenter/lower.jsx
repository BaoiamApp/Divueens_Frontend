// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaShippingFast, FaTrophy, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function Lower() {
  // eslint-disable-next-line no-unused-vars
  const [inputField, setInputField] = useState('');
  
    const [email, setEmail] = useState('');

    const handleClick = () => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email.trim() === '') {
        Swal.fire({
          title: 'Error!',
          text: 'Please enter your email address.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'bg-white rounded-3xl p-4',
            title: 'text-rose-500 font-bold text-lg',
            text: 'text-slate-800 text-sm',
            confirmButton: 'bg-rose-500 hover:bg-rose-700 text-white rounded-3xl py-2 px-4',
          },
        });
      } else if (!emailRegex.test(email)) {
        Swal.fire({
          title: 'Error!',
          text: 'Please enter a valid email address.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'bg-white rounded-3xl p-4',
            title: 'text-rose-500 font-bold text-lg',
            text: 'text-slate-800 text-sm',
            confirmButton: 'bg-rose-500 hover:bg-rose-700 text-white rounded-3xl py-2 px-4',
          },
        }); }
        else {
          Swal.fire({
            title: 'Successful!',
            text: 'You have successfully subscribed.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              popup: 'bg-white rounded-3xl p-4',
              title: 'text-rose-500 font-bold text-lg',
              text: 'text-slate-800 text-sm',
              confirmButton: 'bg-rose-500 hover:bg-rose-700 text-white rounded-3xl py-2 px-4',
            },
          });
        }
      };
  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div className="bg-rose-100 my-14 p-8 flex flex-col md:flex-row justify-between justify-items-center space-y-4 md:space-y-0">
      <div className="font-bold text-gray-900 flex flex-col items-center justify-center">
        <h2 className="item-center font-bold mb-4 text-[1.2rem] xl:text-[1.4rem]">Get in touch with us</h2>
        <div className="flex rounded-md items-center p-2 pl-2 pr-4 bg-white justify-center gap-4 mb-6 shadow-lg">
        <input type="text"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-60 sm:w-80 h-[45px] outline-none rounded-3xl text-center"
  placeholder="Enter your email"/>
          <button onClick={handleClick} className="bg-rose-600 text-xs text-white px-4 py-2 rounded hover:bg-rose-700">Summit</button>


          <input 
            type="text" 
            className="w-full px-4 text-[0.8rem]" 
            placeholder="Ask Your Question" 
            value={inputField} 
            onChange={handleInputChange} 
          />
          <button onClick={handleClick} className="bg-rose-700 text-xs text-white px-4 py-2 rounded-lg hover:bg-rose-600">Subscribe</button>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 md:w-1/2 xl:flex xl:items-center xl:justify-between xl:flex-row">
        <div className="flex flex-col items-center text-center text-[0.8rem] md:text-base">
          <FaShippingFast size={32} className="mb-2" />
          <span>Free Shipping</span>
          <span className="text-xs md:text-sm text-gray-500">Order over 150 $</span>
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
}