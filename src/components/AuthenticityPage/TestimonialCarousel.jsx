import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../input.css';
import { FreeMode, Navigation } from 'swiper/modules';
import influencer from '../../assets/AuthenticityPage/influencer.png'

const testimonials = [
  { image: influencer, name: 'Alexa', text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...', fullText: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.' },
  { image: influencer, name: 'Diana', text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...', fullText: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.' },
  { image: influencer, name: 'Hera', text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...', fullText: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.' },
  { image: influencer, name: 'John', text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...', fullText: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.' },
  { image: influencer, name: 'Jane', text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...', fullText: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.' },
  { image: influencer, name: 'Mike', text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit...', fullText: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.' },
];

const TestimonialCarousel = () => {

  return (
    <div className="w-full relative flex flex-row items-center">
      <button className="text-gray-600 absolute prevBtn border-[3px] border-black rounded-[50%] w-[30px] h-[30px] md:left-0 left-[-10px] z-10">
        <FaArrowLeft size={20} className='mx-auto' />
      </button>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          376: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation]}
        navigation={
          {
            prevEl: '.prevBtn',
            nextEl: '.nextBtn',
          }
        }
        freeMode={true}
        className='p-4'
      >
        {testimonials.map((data, index) => (
          <SwiperSlide className='flex justify-center items-center ' key={index}>
            <TestimonialCard image={data.image} text={data.text} fullText={data.fullText} name={data.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="text-gray-600 absolute nextBtn border-[3px] border-black rounded-[50%] w-[30px] h-[30px] md:right-0 right-[-10px] z-10">
        <FaArrowRight size={20} className='mx-auto'/>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
