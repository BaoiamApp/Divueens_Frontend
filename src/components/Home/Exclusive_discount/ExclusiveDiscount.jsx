import React from "react";
import {
  Banner,
  bestsellers_1,
  example,
  freebies,
  loreal,
  mamaearth,
  output,
  prototype,
  suntan,
} from "../../../assets/assets";

const ExclusiveDiscount = () => {
  return (
    <section className="Exclusive_Discount overflow-hidden font-semibold flex justify-center items-center flex-wrap ">
      <div className="heading pt-8 md:pt-16">
        <hr className="bg-gradient-to-l from-rose-700" />
        <h2 className="text-nowrap">Exclusive Discounts</h2>
        <hr className="bg-gradient-to-r from-rose-700" />
      </div>

      <div className="container  grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 mt-[30px]">
        {/* implemented media queries here for all screen sizes */}
        <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={suntan} alt="" />
            </button>
          </a>
        </div>
        <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={loreal} alt="" />
            </button>
          </a>
        </div>
        <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={mamaearth} alt="" />
            </button>
          </a>
        </div>
        <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]">
          <a href="/">
            <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
              <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={bestsellers_1} alt="" />
            </button>
          </a>
        </div>
      </div>
      <br />
      <div className="heading pt-8 md:pt-16 pb-8">
        <hr className="bg-gradient-to-l from-rose-700" />
        <h2 className="text-nowrap">Freebies of the Month</h2>
        <hr className="bg-gradient-to-r from-rose-700" />
      </div>
      <br />
      <div className="banner-image">
        <img className="w-full h-auto " src={freebies} alt="" />
      </div>
    </section>
  );
};

export default ExclusiveDiscount;
