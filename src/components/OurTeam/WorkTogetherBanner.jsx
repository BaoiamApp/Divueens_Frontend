import React from 'react';
import work from '../../assets/OurTeam/work.avif';
import MaintennacePage from '../../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';

const WorkTogetherBanner = () => {
  return (
    <div className="flex flex-col  lg:flex-row justify-center items-center  py-12 px-6 rounded-lg shadow-md mt-12 bg-rose-400 lg:mx-12">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-center mt-4 lg:mt-0 lg:pb-8">
        <img src={work} alt="Work Together" className="w-full h-auto lg:w-full  object-cover rounded-lg shadow-md" />
      </div>
      <div className="lg:w-1/2 text-center mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-white">Let's Work Together</h2>
        <p className="mt-4 text-rose-200">Join our amazing team and be a part of something great.</p>
        <div className="mt-6 flex justify-center">
        <Link to={"/maintennace"} className="py-2 px-4 bg-rose-700 text-white font-semibold rounded-lg shadow-md hover:bg-rose-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-75">
            Join Now
          </Link>
        </div>
      </div>
  </div>
  );
};

export default WorkTogetherBanner;
