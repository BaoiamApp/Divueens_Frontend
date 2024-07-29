// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { FaAngleDown } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { FaAngleUp } from "react-icons/fa";
import P1 from './../assets/SellOnDivueens/p1.png';
import V1 from './../assets/SellOnDivueens/v1.png';
import V2 from './../assets/SellOnDivueens/v2.png';
import V3 from './../assets/SellOnDivueens/v3.png';
import V4 from './../assets/SellOnDivueens/v4.png';
import {Faqs} from './FAQ';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import Swal from 'sweetalert2';

// eslint-disable-next-line no-unused-vars
import MaintennacePage from '../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';


const Sell = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [Data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const [active, setActive] = useState(false);
  const handleActive = (question) =>{
    setActive((pre)=> (pre === question ? null : question ));
  }

  // eslint-disable-next-line no-unused-vars
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I become a seller on Divueens?',
      answer: 'To become a seller, simply sign up for a seller account on our website, complete your profile with the necessary business information, and start listing your products.'
    },
    {
      question: 'What kind of products can I sell on Divueens?',
      answer: 'You can sell a wide range of beauty products including skincare, haircare, cosmetics, and more.'
    },
    {
      question: 'Are there any fees to sell on Divueens?',
      answer: 'There are no listing fees, but we do charge a small commission on each sale.'
    },
    {
      question: 'How do I list my products?',
      answer: 'You can list your products through your seller dashboard by providing product details and images.'
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed through our secure payment gateway and transferred to your bank account.'
    },
    {
      question: 'Can I track my sales performance?',
      answer: 'Yes, you can track your sales performance through the analytics section in your seller dashboard.'
    },
  ];

  const InputChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...Data,
      [id]: value
    });
  };

  const Phone = (e) => {
    const value = e.target.value;
    const onlyNumbersAndSpaces = /^[\d\s+]*$/;
    if (onlyNumbersAndSpaces.test(value)) {
      setData({
        ...Data,
        phone: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, company } = Data;
    if (name && email && phone && company) {
      Swal.fire("Thank You For Subscribing");
      setData({
        name: '',
        email: '',
        phone: '',
        company: ''
      });
    }
  };

  return (
    <div>
      <div className='flex flex-col-reverse sm:flex-row justify-center items-center m-10 max-lg:mx-5 max-md:mx-2'>
        <div className='bg-rose-100 rounded-xl p-8 max-md:p-4 mx-[5%]'>
          <p className='text-[35px] max-lg:text-2xl font-bold'>Become a</p>
          <p className='text-[35px] max-lg:text-2xl font-bold'>Divueens Seller</p>
          <p className='text-[20px] max-lg:text-base lg:mr-10 my-10 max-sm:my-5'>
            Expand your reach and grow your beauty business with our innovative
            ecommerce platform.
          </p>
           <Link to={"/maintennace"}><button className='text-[14px] max-lg:text-lg font-semibold bg-rose-700 text-white py-2 px-4 md:px-6 md:py-3 rounded-lg'>Register Now</button></Link>
        </div>

        <div className='mb-4 lg:mb-0 max-w-[90%]'>
          <img src={P1} className='w-[90%] rounded-xl max-lg:w-full max-sm:w-[500px] max-sm:max-h-[230px]'/>
        </div>
      </div>
      <div className='mx-auto'>
        <p className='text-[35px] text-center max-lg:text-2xl font-bold'>Steps to Get Started</p>
        <div className='grid mx-auto grid-cols-4 items-center mt-10  max-sm:block '>
          <div className='mx-auto w-fit'>
            <img src={V1} className='w-[86px] h-[86px] mx-6 max-sm:mt-4'/>
            <p className='font-semibold mt-2'>Create an account</p>
          </div>
          <div className='mx-auto w-fit'>
            <img src={V2} className='mx-4 max-sm:mt-4'/>
            <p className='font-semibold mt-2'>List Your Product</p>
          </div>
          <div className='mx-auto w-fit'>
            <img src={V3} className='mx-4 max-sm:mt-4'/>
            <p className='font-semibold mt-2'>Set Up Your Store</p>
          </div>
          <div className='mx-auto w-fit'>
            <img src={V4} className='mx-4 max-sm:mt-4'/>
            <p className='font-semibold mt-2 mx-4'>Start Selling</p>
          </div>
        </div>
      </div>
      <div style={{backgroundImage: `url(${P1})`}} className='bg-no-repeat bg-cover w-[80%] m-auto py-8 px-12 max-sm:px-4 mt-20'>
        <p className='text-2xl font-semibold text-white'>
          As a seller on Divueens, you will gain access to a vibrant community of beauty
          enthusiasts and benefit from our robust marketing and sales infrastructure.
        </p>
      </div>
      <div>
        <p className='text-[35px] text-center max-lg:text-2xl font-bold mt-10 mb-20'>Join Us Today</p>
        <div className="flex flex-col items-center bg-white px-4">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div className="flex flex-col justify-center">
              <p className="text-lg max-md:mb-10">
                Ready to elevate your beauty brand and reach more customers? Join Divueens today and start selling on the leading beauty ecommerce platform.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <form className="bg-rose-200 p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={Data.name}
                    onChange={InputChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="email">Business Email</label>
                  <input
                    type="email"
                    id="email"
                    value={Data.email}
                    onChange={InputChange}
                    required
                    placeholder="Your Email"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="phone">Phone</label>
                  <div className='flex'>
                    <input
                      type="text"
                      id="phone"
                      value={Data.phone}
                      onChange={Phone}
                      required
                      placeholder="Your Number"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      onKeyDown={(e) => {
                        if (!/[0-9\s+]/.test(e.key) && e.key !== 'Backspace') {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={Data.company}
                    onChange={InputChange}
                    required
                    placeholder="Company Name"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-rose-700 text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      {/* <div>
        <p className='text-[35px] text-center max-lg:text-2xl font-bold my-20'>Frequently Asked Questions</p>
        <div className="w-[65%] max-sm:w-[80%] mx-auto my-10 px-4 sm:px-6 lg:px-8">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-4 bg-red-100 text-black focus:outline-none flex justify-between items-center"
              >
                <span className="text-sm sm:text-base md:text-lg  font-semibold pr-2">{item.question}</span>
                <span>{openIndex === index ? (<FaAngleUp className="h-8"/>) : (<FaAngleDown className='h-8'/>)}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-red-100 text-sm sm:text-base md:text-lg">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}
      <div className="w-[90%] md:w-[60%] m-auto mt-4">
      <div className="flex items-stretch flex-col justify-stretch w-full ">
      {/* <h1 className="text-4xl m-4 text-white">Divueens</h1> */}
        
        <div className="bg-white mb-12 px-12 py-8 max-sm:px-5 rounded-xl  h-fit">
          <div className="flex flex-row items-stretch text-2xl pb-10 gap-3">
            <FaRegCircleQuestion className="text-rose-700"/>
            <h1 className="text-4xl font-bold ]">FAQs</h1>
          </div>
          <ul className="flex flex-col">
            {faqData.map((item, index)=>(
              <Faqs key={index} question={item.question} answer={item.answer} 
              active={active === item.question}  
              onClick={handleActive} />
            ))}
          </ul>
        </div>
       
      </div>

    </div>
    </div>
  );
};

export default Sell;

