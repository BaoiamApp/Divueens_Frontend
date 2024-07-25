import React from 'react'
import { Pic57 } from '../../../assets/assets'
import "swiper/css";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Scrollbar } from "swiper/modules";

const NewArrivals = () => {
    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" />
                <h2 className="text-nowrap">New Arrivals</h2>
                <hr className="bg-gradient-to-r from-rose-700" />
            </div>
            <div className="flex flex-col lg:flex-row w-full h-full relative px-8 md:px-2">
                <div className="w-full h-52 select-none backdrop-blur-3xl bg-gradient-to-r from-white to-white/75 lg:w-[40%] lg:h-96 ">
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-[1.5rem] md:text-[2rem] xl:text-[4.5rem] dancing-script lg:-rotate-[25deg] font-bold">New Arrivals</h1>
                        <p className="text-[1rem] md:text-[1.5rem] xl:text-[2.5rem] dancing-script lg:-rotate-[25deg] font-semibold">Shop Now</p>

                    </div>
                </div>

                <div className="ml-auto  w-full h-72 lg:w-[60%] lg:h-96">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        mousewheel={true}
                        scrollbar={{
                            hide: true,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1440: { slidesPerView: 4, spaceBetween: 20 },
                        }}
                        modules={[Mousewheel, Pagination, Scrollbar]}
                        className="mySwiper w-full h-full py-4 lg:px-4">
                        <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                            <img src={Pic57} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                            <div className="absolute bg-black/20 flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                <div>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                </div>

                                <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                            <img src={Pic57} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                            <div className="absolute bg-black/20 flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                <div>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                </div>

                                <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                            <img src={Pic57} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                            <div className="absolute bg-black/20 flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                <div>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                </div>

                                <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                            <img src={Pic57} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                            <div className="absolute bg-black/20 flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                <div>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                </div>

                                <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                            <img src={Pic57} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                            <div className="absolute bg-black/20 flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                <div>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                </div>

                                <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                            <img src={Pic57} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                            <div className="absolute bg-black/20 flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                <div>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                    <p className="text-xs md:text-sm lg:text-base pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                </div>

                                <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>


            </div>
        </>
    )
}

export default NewArrivals