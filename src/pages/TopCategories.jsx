import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner from './../assets/TopCategories/banner.png';
import b1 from './../assets/TopCategories/best-seller-1.png';
import b2 from './../assets/TopCategories/best-seller-2.png';
import b3 from './../assets/TopCategories/best-seller-3.png';
import b4 from './../assets/TopCategories/best-seller-4.png';
import s1 from './../assets/TopCategories/skin-care-1.png';
import s2 from './../assets/TopCategories/skin-care-2.png';
import s3 from './../assets/TopCategories/skin-care-3.png';
import s4 from './../assets/TopCategories/skin-care-4.png';
import m1 from './../assets/TopCategories/makeup-1.png';
import m2 from './../assets/TopCategories/makeup-2.png';
import m3 from './../assets/TopCategories/makeup-3.png';
import m4 from './../assets/TopCategories/makeup-4.png';
import t from './../assets/TopCategories/top-brands.png';
import h1 from './../assets/TopCategories/hair-care-1.png';
import h2 from './../assets/TopCategories/hair-care-2.png';
import h3 from './../assets/TopCategories/hair-care-3.png';
import h4 from './../assets/TopCategories/hair-care-4.png';
import ma1 from './../assets/TopCategories/tools-accessories-1.png';
import ma2 from './../assets/TopCategories/tools-accessories-2.png';
import ma3 from './../assets/TopCategories/tools-accessories-3.png';
import ma4 from './../assets/TopCategories/tools-accessories-4.png';

export default function TopCategories() {
  return (
    <>
      <div className='px-4 md:px-16'>
        <main className="container mx-auto mt-8">
          <div className="flex justify-center">
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
              <div>
                <img src={banner} alt="Banner 1" className="w-full md:w-auto rounded-xl" />
              </div>
              <div>
                <img src={banner} alt="Banner 2" className="w-full md:w-auto rounded-xl" />
              </div>
              <div>
                <img src={banner} alt="Banner 3" className="w-full md:w-auto rounded-xl" />
              </div>
              <div>
                <img src={banner} alt="Banner 4" className="w-full md:w-auto rounded-xl" />
              </div>
              <div>
                <img src={banner} alt="Banner 5" className="w-full md:w-auto rounded-xl" />
              </div>
            </Carousel>
          </div>

          <section className="mt-16 text-black text-xl">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 md:mx-16 pb-10">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={b1} alt="Best Seller" className="w-60 h-60 rounded-lg object-cover mb-2"/>
                <p className="text-center font-bold pt-5">Best Seller's</p>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={b2} alt="Trending Products" className="w-60 h-60 rounded-lg object-cover mb-2"/>
                <p className="text-center font-bold pt-5">Trending Products</p>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={b3} alt="Top Products" className="w-60 h-60 rounded-lg object-cover mb-2"/>
                <p className="text-center font-bold pt-5">Top Products</p>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={b4} alt="Top Brands" className="w-60 h-60 rounded-lg object-cover mb-2"/>
                <p className="text-center font-bold pt-5">Top Brands</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Skincare</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-16 pb-10 mt-10">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={s1} alt="Cleansers" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={s2} alt="Moisturizers" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={s3} alt="Serums" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={s4} alt="Sun Care" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Makeup</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-16 mt-10">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={m1} alt="Foundations" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={m2} alt="Lipsticks" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={m3} alt="Eyeshadows" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={m4} alt="Mascaras" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-lg mx-4 pb-8 pt-8">
            <div className="flex justify-between items-center">
              <img src={t} alt="top brands" className="w-full h-auto rounded-lg object-fill mb-2" />
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Haircare</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-16 pb-8 mt-10">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={h1} alt="Shampoos" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={h2} alt="Conditioners" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={h3} alt="Styling Products" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={h4} alt="Hair Tools" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Beauty Tools & Accessories</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-16 pb-8 mt-10">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={ma1} alt="Brushes TopCategorieslicators" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={ma2} alt="Mirrors" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={ma3} alt="Makeup Bags" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <img src={ma4} alt="Tools" className="w-60 h-60 rounded-lg object-cover mb-2"/>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
