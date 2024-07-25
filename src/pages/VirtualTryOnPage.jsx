import React, { useState } from 'react'
import { FaRegCircleQuestion } from 'react-icons/fa6';
import {Faqs} from './FAQ';
const Data = [
  {
    title: 'Step 1',
    heading: 'Upload or Live Camera: ',
    description: ' Choose to upload a photo or use our live camera feature to try on makeup in real time.',
    title2: 'Q1',
    question: 'Is the virtual trial free to use?',
    answer: 'Yes, our virtual trial is completely free for all users.',
  },
  {
    title: 'Step 2',
    heading: 'Select Your Products: ',
    description: ' Browse our extensive collection of beauty products, including lipsticks, eyeshadows, foundations, and more.',
    title2: 'Q2',
    question: 'Can I use the virtual trial on my mobile device? ',
    answer: 'Absolutely! Our virtual trial is mobile friendly and works seamlessly on all devices.',
  },
  {
    title: 'Step 3',
    heading: 'Try and Compare: ',
    description: '  Instantly see how different shades and styles look on you. Compare multiple products side-by-side to find your perfect match.',
    title2: 'Q3',
    question: 'How accurate is the virtual trial?',
    answer: 'Our advanced technology ensures high accuracy, providing a realistic representation of how the products will look on you.',
  },
]

const VirtualTryOnPage = () => {
  const [active, setActive] = useState(false);
  const handleActive = (question) =>{
    setActive((pre)=> (pre === question ? null : question ));
  }
  return (
    <div className="flex flex-col w-full min-h-[90vh] xl:m-6 my-7 overflow-hidden">
      {/* VirtualTryOn */}
      <div className="flex lg:flex-row lg:justify-between flex-col-reverse w-full min-h-60 mx-auto lg:py-10 lg:pl-10 gap-x-10 ">
        {/* Content */}
        <div className="flex flex-col lg:w-[50%] w-full justify-center lg:items-start items-center gap-y-9 p-7 ">
          {/* Heading */}
          <p className="lg:text-[60px] text-[30px] font-bold md:text-[40px]">Virtual Try-On</p>
          {/* Subheading */}
          <p className="text-[19px] font-medium text-wrap lg:text-left text-center">Welcome to Divueens' Virtual Trial experience! Our state of
            the art technology allows you to try on a wide range of
            beauty products from the comfort of your home.</p>
          {/* TryOn Button */}
          <button className="bg-rose-400 px-6 py-3 font-semibold text-center rounded-sm">TRY NOW</button>
        </div>
        {/* Image Compare */}
        <div className="w-full lg:w-auto">
          {/* Image */}
          <img src='../src/assets/VirtualTryOn.png' className='width-[200px] lg:full mx-auto lg:m-0' />
        </div>
      </div>
      {/* How it works */}
      <div className="flex flex-col items-start justify-start w-full min-h-60 p-10 gap-y-7">
        {/* Heading */}
        <p className='text-[30px] md:text-[40px] font-bold text-center lg:text-left mx-auto lg:mx-0'>How It Works</p>
        {/* Steps */}
        <div className='flex flex-col gap-y-7'>
          {Data.map((step) => (
            <div className="lg:inline-flex justify-start font-medium text-[15px] md:text-[18px] flex flex-col  gap-y-5  items-basline gap-3"> <p className='text-[18px] md:text-[20px] font-bold text-nowrap last:items-start'>{step.heading}</p> <p>{step.description}</p> </div>
          ))}
        </div>
      </div>
      {/* FAQs */}
      <div className="w-full">
      <div className="flex items-stretch flex-col justify-stretch w-full ">
      {/* <h1 className="text-4xl m-4 text-white">Divueens</h1> */}
        
        <div className="bg-white mb-12 px-12 py-8 max-sm:px-5 rounded-xl  h-fit">
          <div className="flex flex-row items-stretch text-2xl pb-10 gap-3">
            <FaRegCircleQuestion/>
            <h1 className="text-4xl font-bold ]">FAQs</h1>
          </div>
          <ul className="flex flex-col">
            {Data.map((item, index)=>(
              <Faqs key={index} question={item.question} answer={item.answer} active={active === item.question}  onClick={handleActive} />
            ))}
          </ul>
        </div>
       
      </div>

    </div>

    </div>
  )
}

export default VirtualTryOnPage