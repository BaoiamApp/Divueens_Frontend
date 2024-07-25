import React from "react";
import {
  background,
  Brush,
  Eyes,
  Lips,
  SkinCare,
  Nails,
  Face,
  Hair,
  Perfume,
} from "../../../assets/assets";
import "./ShopByCategory.css";

const ShopByCategory = () => {
  return (
    <>
      <section className="Shop_By_Category">
        <div className="heading md:pt-16 pt-8 md:pb-8">

          <hr className="bg-gradient-to-l from-rose-700" />
          <h2 className="text-nowrap">Shop By Categories</h2>
          <hr className="bg-gradient-to-r from-rose-700" />
        </div>
        <div
          style={{
            // backgroundImage: `url(${background})`,
          }}
          className="mx-auto my-8 bg-center bg-cover"
        >

          <div className=" w-full h-full">
            <div className="categories-container grid mx-auto justify-center items-center sm:w-[90%] lg:w-[85%] xl:w-[65%] h-full grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 md:h-[80%] box-border place-content-center z-[2]">
              <div
                style={{ backgroundImage: `url(${Eyes})` }}
                className="categories-item mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline eyes"
              >
                <a href="https://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Eyes
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Face})`,
                }}
                className="categories-item  mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline face"
              >
                <a href="http://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Face
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Lips})`,
                }}
                className="categories-item  mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline lips"
              >
                <a href="http://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Lips
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${SkinCare})`,
                }}
                className="categories-item  mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline skincare"
              >
                <a href="http://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Skincare
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Nails})`,
                }}
                className="categories-item  mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline nails"
              >
                <a href="http://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Nails
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Perfume})`,
                }}
                className="categories-item  mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline nails"
              >
                <a href="http://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Fragrance
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Hair})`,
                }}
                className="categories-item  mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline nails"
              >
                <a href="http://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Hair
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Brush})`,
                }}
                className="categories-item  mx-auto h-[110px] w-[150px] md:h-[180px] md:w-[200px] rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline brush"
              >
                <a href="http://">
                  <div className="label bg-rose-700/40 w-full h-full max-h-[20px] md:max-h-[30px] text-center text-rose-50 backdrop-blur-sm text-xs md:text-base font-semibold absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Brush
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
