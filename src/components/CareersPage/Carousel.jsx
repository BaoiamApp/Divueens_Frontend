import React, { useState } from 'react';
import img1 from '../../assets/CareersPage/1.png'
import img2 from '../../assets/CareersPage/2.png'
import img3 from '../../assets/CareersPage/3.png'
import img4 from '../../assets/CareersPage/4.png'
import img5 from '../../assets/CareersPage/5.png'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: img1,label:'Health & Wellness' },
    { src:img2 , label: 'Work Life Balance' },
    { src:img3 , label: 'Financial Benefits' },
    { src:img4, label: 'Office Environment' },
    { src:img5 , label: 'Remote Opportunities' },
    { src: img1, label: 'Health & Wellness' },
    { src:img2, label: 'Work Life Balance' },
    { src:img3, label: 'Financial Benefits' },
    { src:img4 , label: 'Office Environment' },
    { src:img5, label: 'Remote Opportunities' },
  ];

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(old=>{
        return old === 0 ? images.length - 1 : old - 1;
    });

  };

  const nextSlide = () => {
    // const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(old=>{
        return old === images.length - 1 ? 0 : old + 1;
    });
  };

  return (
    <div className="flex flex-col gap-2 w-10/12 my-4 mx-auto">
      <div className="flex gap-8 overflow-hidden relative">
        {
            images.slice(currentIndex,currentIndex + 3).map((image, index) => (
                <div className="flex-none md:w-1/3 p-4 bg-white transition-all rounded-lg shadow-md border" key={index}>
                  <img className="w-full h-32 object-cover mb-4 rounded-lg" src={image.src} alt="image" />
                  <h3 className="text-lg w-full text-center font-bold">{image.label}</h3>
                </div>
              ))
        }
      </div>
     <div className="flex place-self-end mt-8">
     {[{
        onClick:prevSlide,
        text:'Prev',
        icon:<FaArrowCircleLeft />
      },
      {
        onClick:nextSlide,
        text:'Next',
        icon:<FaArrowCircleRight />
      }].map(btn=>{
        return (
<button
        onClick={btn.onClick}
        className="top-1/2 text-rose-700 hover:text-rose-900 shadow-xl rounded-full p-2" 
      >
        {btn.icon}
      </button>
        )
      })}
     </div>
    </div>
  );
};

export default Carousel;
