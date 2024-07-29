import React, { useEffect, useRef, useState } from "react";
import { BsSendCheckFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const AnswerModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto">
        <button

          className="text-nowrap bg-rose-700 hover:bg-rose-900 text-white text-lg mx-auto shadow-md hover:shadow-inner px-4 rounded font-medium  py-2 mt-8"

          ref={trigger}
          onClick={() => setModalOpen(true)}
        >
          Write An Answer
        </button>
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full relative max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] shadow-md md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl text-rose-700 font-semibold sm:text-2xl">
              Write an Answer
            </h3>
            <textarea placeholder="Write an Answer..." className="w-full text-black py-6 px-4 bg-slate-100 h-40 mb-8 rounded-md text-xl"/>
            <div className="mx-3 flex justify-center flex-wrap">
            <div className="rounded-full">
                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-full absolute top-4 right-4 hover:border-red-600 hover:bg-red-600 hover:text-white
                  text-red-500"
                >
                  <RxCrossCircled />
                </button>
              </div>
              <div className="w-3/4 px-3">
                <button className=" flex flex-nowrap justify-center items-center gap-2 w-full rounded-md border border-rose-500 bg-primary p-3 text-center text-nowrap font-medium text-rose-700 transition 
            hover:bg-rose-600 hover:text-white
                ">
                  <a href={`/#`} className="text-nowrap text-lg"> Send For Review  </a>
                  <BsSendCheckFill className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerModal;
