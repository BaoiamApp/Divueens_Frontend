import React from "react";
import styles from "./TopBrands.module.css";
import { Banner, brands } from "../../../assets/assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const TopBrands = () => {
  return (
    <>
      <div className={`${styles["brand-section"]} mt-8`}>
        <div className="heading pt-16 pb-8">
          <hr className="bg-gradient-to-l from-rose-700" />
          <h2 className="text-nowrap">Top Brands</h2>
          <hr className="bg-gradient-to-r from-rose-700" />
        </div>

        <div
          className={`${styles["brand-background"]} flex mt-[4px] py-[20px] px-0`}
        >
          {/* -------------- */}
          <Swiper
            slidesPerView={brands.length - 3}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={`${styles["bar"]} mySwiper mx-auto relative overflow-hidden scroll-smooth snap-start`}
          >
            {brands.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`${styles["card"]} h-[40px] md:h-[100px] flex items-center justify-center text-center snap-start`}
              >
                <img
                  className="w-full h-full object-contain snap-start"
                  src={item}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* -------------- */}
        </div>

        <Link to="/coins">
          <div
            className={`${styles["heading-2"]} mt-8 font-['Montserrat'] relative p-5 text-center`}
          >
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[35px] bg-white rounded-[50%] blur-[15px] ${styles["spot1"]}`}
            ></div>
            
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[45px] bg-white rounded-[50%] blur-[15px] ${styles["spot2"]}`}
            ></div>
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[25px] bg-white rounded-[50%] blur-[15px] ${styles["spot3"]}`}
            ></div>
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[65px] bg-white rounded-[50%] blur-[15px] ${styles["spot4"]}`}
            ></div>
            <h2 className={`${styles["coinLink"]} text-white font-bold`}>
            Get Diva coins on every order
            </h2>
          </div>
        </Link>
        <br />

        <img src={Banner} className="w-full" alt="banner" />
      </div>
    </>
  );
};

export default TopBrands;
