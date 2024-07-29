import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaMapLocationDot } from "react-icons/fa6";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MdArrowOutward, MdOutlineWatchLater } from "react-icons/md";
import { PiMoneyBold } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import ReactCardSlider from "react-card-slider-component";
import bro1 from '../../assets/CareersPage/bro1.png';
import bro2 from '../../assets/CareersPage/bro2.png';
import bro3 from '../../assets/CareersPage/bro3.png';

const slides = [
  {
    image: bro1,
    title: "Developer",
  },
  {
    image:bro2,
    title: "Graphic Designer",
  },
  {
    image:bro3,
    title: "product Manager",
  },
  {
    image: bro1,
    title: "Developer",
  },
  {
    image:bro2,
    title: "Graphic Designer",
  },
  {
    image:bro3,
    title: "product Manager",
  },
 
];

function WeAreHiring() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="header flex flex-col gap-4 items-center justify-center my-12">
        <div className="text-sm border-slate-900 border  font-semibold rounded-2xl py-1 px-4">
          We're hiring!
        </div>
        <h1 className="text-2xl text-center text-red-700 font-semibold ">We Have 12 Job Openings</h1>
        <p className="font-semibold text-center w-3/4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum libero
          earum autem aliquid reprehenderit aperiam iste aspernatur cumquemap
          assumenda repellendus!
        </p>
      </div>
      <div className="flex my-12 items-center justify-center">
        <ReactCardSlider className="" slides={slides}/>
      </div>
      <div className="perks">
        <nav className="p-4 border-b-2 border-black ">
          <div className="container mx-auto flex flex-row justify-between items-center">
            <div className="hidden lg:flex ">
              {[
                "view all",
                "design",
                "development",
                "content writing",
                "finance",
                "marketing",
                "legal",
              ].map((catagory, index) => {
                return (
                  <button
                    key={index}

                    className="capitalize text-nowrap py-1 px-4 hover:bg-rose-700  hover:text-white focus:bg-rose-700 focus:text-white font-semibold rounded-3xl text-black text-lg cursor-pointer "

                  >
                    {catagory}
                  </button>
                );
              })}
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-black">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <div className="text-black text-lg font-bold flex cursor-pointer items-center mx-4 gap-2">
              Filter
              <VscSettings />
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden mt-4">
              {[
                "view all",
                "design",
                "development",
                "content writing",
                "finance",
                "marketing",
                "legal",
              ].map((catagory, indx) => {
                return (
                  <h2
                    key={indx}
                    className="capitalize text-nowrap py-1 px-3  hover:bg-rose-900  hover:text-white focus:bg-rose-900 focus:text-white font-semibold rounded-3xl cursor-pointer "
                  >
                    {catagory}
                  </h2>
                );
              })}
            </div>
          )}
        </nav>
        <div className="perk">
          {[
            {
              heading: "product design",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, reprehenderit!",
            },
            {
              heading: "product design",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, reprehenderit!",
            },
            {
              heading: "product design",
              description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, reprehenderit!",
            },
          ].map((item, i) => {
            return (
              <div key={i} className="container my-8 mx-4 text-black shadow-md">
                <div className="head mx-4 px-4 w-11/12 flex flex-wrap md:flex-nowrap  justify-between items-center">
                  <div className="">
                    <h1 className="font-bold text-lg capitalize">
                      {item.heading}
                    </h1>
                    <p className="text-base mt-2">{item.description}</p>
                  </div>

                  <button className="capitalize text-nowrap py-2 text-center px-4 bg-rose-700 hover:bg-rose-900 text-white font-semibold rounded-3xl text-sm cursor-pointer h-fit flex items-center mt-4 gap-2">

                    Apply Now <MdArrowOutward className="font-bold text-lg" />
                  </button>
                </div>
                <div className="flex items-center flex-wrap md:flex-nowrap gap-2 my-2 mt-10 justify-between w-11/12">
                  <div className="flex gap-4 items-center flex-wrap">
                    {[
                      {
                        text: "worldwide",
                        icon: <FaMapLocationDot />,
                      },
                      {
                        text: "full time",
                        icon: <MdOutlineWatchLater />,
                      },
                      {
                        text: "25-30/hr",
                        icon: <PiMoneyBold />,
                      },
                    ].map((item, ind) => {
                      return (
                        <div
                          key={ind}
                          className="text-rose-900 flex items-center gap-2 text-sm md:text-base font-semibold py-1 px-2 capitalize cursor-pointer shadow-md rounded-2xl my-4 hover:shadow-inner" 
                        >
                          <div className="text-lg">{item.icon}</div>
                          <div className="text-nowrap">{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex text-sm items-center  font-semibold gap-2  px-4 cursor-pointer justify-end">
                    View full details
                    <LiaLongArrowAltRightSolid className="font-bold text-lg" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WeAreHiring;
