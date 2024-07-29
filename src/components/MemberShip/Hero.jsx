



















import React, { useState } from 'react';
import MaintennacePage from '../../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';

const Hero = () => {
    

    const plans = [
        {
            id: 1,
            name: "Basic",
            price: "₹100",
            features: [
                "Exclusive discounts",
                "Early access to products",
                "Loyalty points/rewards",
                "Free samples/gifts",
                "Special events",
                "Personalized recommendations",
            ]
        },
        {
            id: 2,
            name: "Premium",
            price: "₹200",
            features: [
                "Exclusive discounts",
                "Early access to products",
                "Loyalty points/rewards",
                "Free samples/gifts",
                "Special events",
                "Personalized recommendations",
            ]
        },
    ];

    

    return (
        <div>
            <div className="flex items-center justify-center bg-white">
                <div className="relative max-w-6xl xl:h-80 md:mx-20">
                    <img src="https://ideogram.ai/assets/progressive-image/balanced/response/KHAy-nYvTimiAa32Po365A" alt="Sample" className="object-cover w-full h-full absolute inset-0" />
                    <div className="relative z-10 p-8 md:w-3/5 xl:h-80 bg-white opacity-80 ">
                        <h1 className="md:text-4xl text-xl font-bold text-black mb-6 mr-6">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor</h1>
                        <p className="mt-4 text-black mr-6 mb-6">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor</p>
                        <Link to={"/maintennace"} className="bg-rose-700 text-white font-bold py-2 px-10 rounded-lg shadow-lg hover:bg-rose-600 focus:outline-none mt-6 opacity-100">
                            Explore products
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white">
                <h1 className="md:text-4xl text-xl font-bold mb-10 mt-10">Membership plans</h1>
                <div className="flex flex-col md:flex-row gap-8 md:max-w-full">
                    {plans.map((p) => (
                        <div key={p.id} className="bg-gradient-to-b from-rose-100 to-rose-300 rounded-lg shadow-lg text-center overflow-hidden transform transition-transform duration-500 hover:scale-105 border outline-gray-900 mb-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 py-2 bg-rose-300">{p.name}</h2>
                            <div className="px-6">
                                <p className="text-4xl font-bold mb-4">{p.price}<span className="text-lg font-normal mb-4">/month</span></p>
                                <Link to={'/maintennace'} className="w-full md:text-xl text-base md:py-3 px-4 py-2 mb-6 mt-4 text-white bg-rose-700 rounded-lg hover:bg-rose-600 shadow-xl">
                                    Get now
                                </Link>
                            </div>
                            <ul className="space-y-4 px-6 pb-6 mt-6">
                                {p.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="flex-shrink-0 w-4 h-4 mr-3 flex items-center justify-center border-2 border-black rounded-full">
                                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;









