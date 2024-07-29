// src/components/StoreLocator.jsx
import React, { useState } from 'react';

function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState('');
  const storeData = [
    { city: 'Bharatpur', name: 'Elegant Essentials', address: '177 Toorak Road  bharatpur 4334343' },
    { city: 'Bangalore', name: 'Urban Chic Boutique', address: '123, Main Street, Bangalore Karnataka 560001' },
    { city: 'Mumbai', name: 'Classic Comfort Apparel', address: '456, MG Road, Mumbai Maharashtra 400001' },
    { city: 'Delhi', name: 'Dapper Denim Store', address: '123, lead Street, Delhi 110001' },
    { city: 'Chennai', name: 'Fashionista Finds', address: '123, golf Street, Chennai Tamil Nadu 600001' },
    { city: 'Kolkata', name: 'Trendy Threads Outlet', address: '123, rain Street, Kolkata West Bengal 700001' },
    { city: 'Hyderabad', name: 'Elegant Essentials', address: '123, pain Street, Hyderabad Telangana 500033' },
    // hello divueens team .if you want to add more data so you can just add in this array here the card was automatically created 
    // thank you.
  ];

  const filteredStores = storeData.filter(store => store.city.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="font-montserrat bg-white text-gray-800">
      <div className="bg-gradient-to-r from-custom-blue to-custom-green text-white text-center py-4 shadow-md w-full">
        <h1 className="text-2xl m-0 font-bold">Divueens Store Locator</h1>
      </div>
      <div className=" h-[3.5rem] float-end flex items-center px-4 z-50 rounded-lg rounded-tl-none rounded-tr-none shadow-md w-full md:w-[27rem] group">
        <i className="fas fa-search text-slate-600 group-hover:text-pink-600 mr-2"></i>
        <input
          type="text"
          id="searchBar"
          className="bg-white bg-opacity-90 text-black border-b-2 border-gray-500 outline-none placeholder-black w-full md:w-[15rem] mr-4 mt-0"
          placeholder="Type City name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          id="searchButton"
          className="bg-white text-rose-700 border border-rose-700 py-2 px-4 rounded-[20px] hover:bg-rose-600 hover:text-white transition duration-300"
        >
          Search
        </button>
      </div>
      <main className="w-full flex flex-col md:flex-row pt-6 pl-0 pr-0">
        <div className="flex-1 md:mr-4 h-[50vh] md:h-screen sticky top-32">
          <div className="w-full h-full rounded-lg shadow-md overflow-hidden">
            <iframe
              className="w-full h-full"
              id="mapFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.209984210999!2d78.96288021487888!3d20.59368498616875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf0bf801b0abf%3A0xf458f4c90af54e1!2sIndia!5e0!3m2!1sen!2sus!4v1625394648724!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex-1 max-w-md overflow-y-clip px-4 mt-4 md:mt-0">
          {filteredStores.map((store, index) => (
            <div
              key={index}
              className="card bg-white p-4 border border-white rounded-2xl shadow-md mb-4 flex flex-col justify-between hover:transform hover:-translate-y-1 transition duration-200"
              data-city={store.city}
            >
              <div className="text-2xl font-bold mb-1">{store.name}</div>
              <div className="border-b-4 border-[#FF5BB1] w-1/2 mb-2"></div>
              <div className="text-lg text-gray-800 mb-2">{store.address}</div>
              <div className="text-lg text-gray-800">📞+123 456 77 88</div>
              <div className="text-lg text-green-600 text-right mt-2">🟢 Opened</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default StoreLocator;
