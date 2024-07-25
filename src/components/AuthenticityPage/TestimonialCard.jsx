import React, { useState } from 'react';

const TestimonialCard = ({ image, name, text, fullText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-center p-4 sm:w-72 lg:w-96  bg-rose-200 shadow-gray-400 shadow-lg md:h-80 lg:h-96">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h3 className="text-lg md:text-xl font-semibold mt-4">{name}</h3>
      <div className={`text-gray-600 mt-2 ${isExpanded ? 'h-auto' : 'line-clamp-3'}`}>
        {isExpanded ? fullText : text}
      </div>
      <button onClick={toggleExpand} className="text-blue-500 mt-4 inline-block">
        {isExpanded ? 'Less' : 'More'}
      </button>
    </div>
  );
};

export default TestimonialCard;