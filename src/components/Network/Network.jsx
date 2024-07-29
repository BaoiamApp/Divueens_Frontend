import React, { useState } from "react";
import {
  FaArrowTrendUp,
  FaRegComment,
  FaRegHeart,
  FaShare,
} from "react-icons/fa6";
import { TiPin } from "react-icons/ti";
import { GoPerson } from "react-icons/go";
import { BsQuestionSquare } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiNeedle, PiNotePencilBold } from "react-icons/pi";
import AnswerModal from "./AnswerModel";
import ReadMore from "./ReadMore";
import BannerTop from "./../../assets/DivueenNetwork/BannerTop1.png";
import NetworkBanner from "./../../assets/DivueenNetwork/NetworkBanner.png";
import BannerMain from "./../../assets/DivueenNetwork/BannerMain.png"; 
import CuratedImg1 from "./../../assets/DivueenNetwork/CuratedImg1.png"; 
import CuratedImg2 from "./../../assets/DivueenNetwork/CuratedImg2.png"; 
import CuratedImg3 from "./../../assets/DivueenNetwork/CuratedImg3.png";
import Logo from "./../../assets/DivueenNetwork/logo.png";

const Network = () => {
  const [open, setOpen] = useState(false);
  function handleReadNow() {
    setOpen((old) => !old);
  }

  function handleAnswer() {}
  return (
    <div className=" bg-gray-100 gray min-h-screen p-6 mt-12 mb-4 w-full mx-auto text-sm">
      <div style={{background: `url(${BannerTop})`}} className={`flex md:px-12 px-2 py-12 justify-center gap-8 lg:flex-nowrap flex-wrap w-full h-full bg-cover bg-center bg-no-repeat`}>
        <div className="flex items-center flex-wrap md:flex-nowrap mx-auto justify-center sm:gap-4 ">
          <span className="uppercase text-3xl md:text-5xl font-bold border-b-2 border-black">
            trending
          </span>
          <span className="capitalize text-nowrap translate-y-3/4 text-lh text-xl md:text-2xl text-white font-medium">
            topics right now
          </span>
        </div>
        <div className="container flex items-center justify-center my-8 gap-10 mx-auto text-black  lg:mr-12 ">
          {/* <img src={bg} alt="" /> */}
          <div className="bg-white shadow-md md:w-fit rounded-lg py-4 md:px-10 px-4 ">
            {["Makeup", "Body Care", "Lip Care", "Hair Care", "Skin Care"].map(
              (category, index) => (
                <div
                  key={index}
                  className="items-center flex flex-wrap md:flex-nowrap  justify-start  border-b-2 my-10  gap-4 text-sm"
                >
                  <div className="flex flex-nowrap gap-1 items-center">
                    <FaArrowTrendUp />
                    <h2 className="font-bold text-nowrap">{category}</h2>
                  </div>
                  <p className="text-nowrap text-xs">
                    Over 500+ posts uploaded
                  </p>
                  <button className="text-nowrap flex-nowrap text-sm flex items-center py-1 px-2 rounded hover:font-bold">
                    View now
                    <IoIosArrowForward />
                  </button>
                  <hr className="text-black w-100 " />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-11/12  bg-white rounded-lg shadow-md mt-4 py-8 px-12 mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className=" bg-rose-700 hover:bg-rose-900 text-white  rounded-full p-4">
            <GoPerson className="text-5xl " />
          </div>
          <h1 className="text-xl font-bold text-center ">
            Share Your Beauty Secret.......
          </h1>
        </div>

        <div className="flex md:flex-row flex-col mt-4 justify-center gap-4">
          <button className="px-4 py-2 font-semibold bg-rose-700 hover:bg-rose-900 text-nowrap text-white rounded-md focus:outline-none md:w-fit flex items-center gap-2">
            <BsQuestionSquare className="text-lg font-bold" />
            Ask Your Questions
          </button>
          <button className="px-4 py-2 font-semibold bg-rose-700 hover:bg-rose-900 text-white md:w-fit text-nowrap rounded-md  focus:outline-none flex items-center gap-2 ">
            <PiNotePencilBold className="text-lg font-bold" />
            Create Your Posts
          </button>
        </div>
      </div>

      <div className="grid-flow-row auto-rows-max   bg-white mx-auto  w-11/12 rounded-lg shadow-md my-4">
        <div className="overflow-hidden  max-w-full bg-cover bg-no-repeat">
          <img
            className=""
            src={BannerMain}
            alt=""
          />
        </div>
        <div className=" p-8 px-12 text-base row-span-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis est
          minus aut voluptatem necessitatibus magnam tempora voluptatibus, saepe
          neque architecto! Saepe eum eligendi quibusdam quod cupiditate quidem
          maiores! Architecto laboriosam magnam distinctio sint voluptatibus
          inventore corporis natus. Neque reprehenderit sit numquam molestiae,
          repellat officia aperiam voluptatibus, quae eos facilis quasi alias
          eaque at commodi ipsam expedita suscipit, illum possimus cum. Nostrum
          officiis cupiditate qui ad! Necessitatibus facere dicta quas quasi
          quis. Sit dolor, cupiditate corrupti necessitatibus placeat ea harum
          repellat quasi minima laudantium maiores. Minus modi, vel soluta
          repudiandae repellendus consequuntur aut tenetur laborum quod fugit,
          voluptas aliquid facere accusamus.
        </div>
      </div>

      <div className="flex flex-col  w-11/12 mx-auto bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="flex flex-row justify-between items-center">
        <div className="overflow-hidden flex bg-cover bg-center max-w-20 rounded-sm">
            <img className=" "
            src={Logo} alt="divueens logo " />
            
            <div className="font-medium">The Divueens</div>
          </div>
          <div className="text-gray-500 text-sm">Posted 2 months ago</div>
        </div>
        <p className="text-base  p-8 px-12  leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        
        <button className="mt-4 px-4 py-2 bg-rose-700 hover:bg-rose-900 text-white  rounded-md w-fit mx-auto focus:outline-none flex items-center">

          Discover More
        </button>
      </div>

      <div className="mt-12  w-11/12 mx-auto">
        <h2 className="font-bold mb-4 text-2xl uppercase">Topics Right Now</h2>
        <div className="space-y-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className=" px-12 py-8 bg-rose-200 shadow-md rounded-lg p-6">
              <h3 className=" font-semibold w-fit text-lg mx-auto mb-4 ">
                Q & A .Topic Skin
              </h3>
              <p className="mb-4">
                <span className="font-semibold text-md">Q :</span> Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam?
              </p>
              <p className="flex-nowrap md:px-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam?
              </p>
              <div className="mt-4 text-right">
                <p className="flex-nowrap">Bella D.</p>
                <p className="flex-nowrap">Answered 1 month ago</p>
                <p>101 reactions · 64 More Answers</p>
              </div>
              {/* <button className="mt-4 bg-transparent mx-auto shadow-md hover:shadow-inner flex-nowrap py-2 px-4 rounded hover:bg-rose-100">
                Write An Answer
              </button> */}
              <AnswerModal />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 w-11/12 mx-auto">
        <h2 className="font-bold mb-4 text-2xl uppercase">
          Curated Only for You
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              heading: "Lorem ipsum dolor sit ame",
              para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
              img: CuratedImg1,
              more: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laboriosam enim aliquid, minus error ea distinctio repellat. Temporibus, iste vero.",
            },
            {
              heading: "Lorem ipsum dolor sit ame",
              para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
              img: CuratedImg2,
              more: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laboriosam enim aliquid, minus error ea distinctio repellat. Temporibus, iste vero.",
            },
            {
              heading: "Lorem ipsum dolor sit ame",
              para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
              img: CuratedImg3,
              more: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laboriosam enim aliquid, minus error ea distinctio repellat. Temporibus, iste vero.",
            },
          ].map((item, index) => (
              <div
                className={`flex flex-wrap items-center bg-rose-200 overflow-hidden  shadow-md rounded-lg justify-between ${
                  index % 2 !== 0 && "flex-row-reverse"
                }`}
              >
                <div key={index} className="flex-1 px-12 py-8 ">
                  <h3 className="font-medium mb-2 text-xl lg:text-2xl">
                    {item.heading}
                  </h3>
                  <div className="flex items-start justify-between gap-2 flex-wrap text-lg lg:text-base ">
                    <p className="">{item.para}</p>
                    {/* <button className="text-nowrap rounded shadow-md hover:shadow-inner py-1 px-2  font-semibold"
                  onClick={handleReadNow}>
                    Read Now
                  </button> */}
                    <ReadMore text={item.more} />
                  </div>
                  {/* {open&&<h1 className="mt-4 transition-all ease-in-out delay-300">{item.more}</h1>} */}
                </div>
                <div
                  className={`bg-cover md:flex-1 bg-no-repeat bg-center w-full`}
                >
                  <img
                    src={item.img}
                    className=" h-full min-h-200"
                    alt="beauty image"
                  />
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 md:w-8/12 mx-auto ">
        <div className="flex items-center justify-start gap-2 mb-4">
          <TiPin className="text-2xl" />
          <h2 className="font-semibold text-xl">Pinned Post</h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-5xl overflow-hidden">
          <p className="flex-nowrap mb-4 uppercase text-lg font-bold text-gray-700">makeup <span className="capitalize text-gray-400">post</span> in</p>
          <div className="flex items-center gap-2">
            <div className="overflow-hidden bg-cover bg-center max-w-20 rounded-sm">
            <img className=" "
            src={Logo} alt="divueens logo " />
            </div>
            <div className="flex flex-col gap-2 my-2">
            <p className="font-bold">The Divas</p>
            <p className="font-medium">
              Posted 2 months ago · 24 Comments · 64 Likes
            </p>
          </div>
          </div>
          <p className="mb-4 px-8 py-2 text-base max-w-fit text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
          <div className="overflow-hidden  md:px-8 md:py-2 max-w-full bg-cover bg-no-repeat">
            <img
              className=""
              src={NetworkBanner}
              alt=""
            />
            <div className="mt-4 flex items-center space-x-4">
            <button className="bg-rose-700 font-semibold text-white py-2 px-4 rounded hover:bg-rose-900">
              Like <FaRegHeart className="inline mx-2 " />
            </button>
            <button className="bg-rose-700 font-semibold text-white py-2 px-4 rounded hover:bg-rose-900">
              Comment <FaRegComment className="inline mx-2 " />
            </button>
            <button className="bg-rose-700 font-semibold text-white py-2 px-4 rounded hover:bg-rose-900">
              Share Post <FaShare className="inline mx-2 " />
            </button>
          </div>
          </div>
          {/* <div className="mt-4 flex items-center space-x-4">
            <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              Like <FaRegHeart className="inline mx-2 " />
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              Comment <FaRegComment className="inline mx-2 " />
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              Share Post <FaShare className="inline mx-2 " />
            </button>
          </div> */}
        </div>
      </div>

      <div className="mt-12 w-11/12 mx-auto">
        <h2 className="font-bold  mb-4 text-2xl uppercase border-b-2 border-black w-fit pb-1">
          Questions for You
        </h2>
        <div className="space-y-6">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-white px-12 py-8 shadow-md rounded-lg p-6">
              <h3 className=" font-semibold mb-4">
                Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam?
              </h3>
              <button

                className="mt-4bg-rose-700 font-semibold text-white py-2 px-4 rounded hover:bg-rose-900 bg-rose-700 "

                onClick={handleAnswer}
              >
                Write An Answer
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;
