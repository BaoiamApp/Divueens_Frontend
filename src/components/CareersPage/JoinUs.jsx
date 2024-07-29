import React from "react";
import { MdArrowOutward } from "react-icons/md";
import JoinUsImg from "../../assets/CareersPage/joinus.png";

function JoinUs() {
  return (
    <div className="w-11/12 my-8 mx-auto flex flex-wrap md:flex-nowrap items-center">
      <div className="w-full bg-slate-300 md:h-96 flex items-center rounded-l-lg py-12 ">
        <div className="mx-auto flex flex-col justify-between gap-4 items-start w-8/12">
          <h1 className="capitalize text-2xl mx-auto w-fit font-bold">join our team!</h1>
          <p className="mx-auto w-fit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            quod!
          </p>

          <button className="capitalize text-nowrap py-2 text-center px-4  bg-rose-700 hover:bg-rose-900  text-white font-semibold rounded-3xl text-base cursor-pointer h-fit w-fit flex items-center mt-4 gap-2">

            explore now <MdArrowOutward className="font-bold text-lg" />
          </button>
        </div>
      </div>
      <div>
        <img src={JoinUsImg} className="rounded-b-lg md:rounded-l-lg" alt="" />
      </div>
    </div>
  );
}

export default JoinUs;
