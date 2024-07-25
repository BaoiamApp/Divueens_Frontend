import React from 'react'
import "swiper/css";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Scrollbar } from "swiper/modules";
import { Pic58, brand_2, brand_3, product_1, product_2, product_3, product_4, product_5, product_6 } from '../../../assets/assets';


const BrandProducts = () => {
    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" />
                <h2 className="text-nowrap">Top Brands Products</h2>
                <hr className="bg-gradient-to-r from-rose-700" />
            </div>

            <div className="flex flex-col w-full h-full">
                <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-8 py-4">
                    <div className="w-full h-52 md:w-1/2 lg:w-[70%] md:h-72 border rounded-xl">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            mousewheel={true}
                            scrollbar={{
                                hide: true,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 20 },
                                425: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 1, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 20 }
                            }}
                            modules={[Mousewheel, Pagination, Scrollbar]}
                            className="mySwiper w-full h-full">
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_4} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_5} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_6} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="w-full h-52 lg:w-[30%] md:h-56 rounded-xl flex flex-col items-center justify-center text-center">
                        <img src={brand_3} className="w-full h-40" alt="" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 px-8 py-4">
                    <div className="w-full h-52 lg:w-[30%] md:h-56 rounded-xl flex flex-col items-center justify-center text-center">
                        <img src={brand_2} className="w-full h-40" alt="" />
                    </div>
                    <div className="w-full h-52 md:w-1/2 lg:w-[70%] md:h-72 border rounded-xl">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            mousewheel={true}
                            scrollbar={{
                                hide: true,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 20 },
                                425: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 1, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 20 }

                            }}
                            modules={[Mousewheel, Pagination, Scrollbar]}
                            className="mySwiper w-full h-full">
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_1} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_2} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_3} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandProducts