import React, { useState } from 'react';

const FormComponent = () => {
  const initialFormData = {
    fullName: '',
    streetAddress: '',
    city: '',
    zipcode: '',
    country: '',
    phoneNumber: '',
    agree: false,
  };

  const countries = [
    'India',
    'UK',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'USA',
  ];

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //input of form
    setFormData(initialFormData);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-rose-200 p-6 sm:p-10 md:p-14 shadow-lg rounded-lg w-full max-w-screen-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block font-semibold">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-11 border-gray-300 rounded-md p-2 outline-none focus:outline-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="streetAddress" className="block font-semibold">
              Street Address:
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full border-gray-300 h-11 rounded-md p-2 outline-none focus:outline-red-500"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-1/2">
              <label htmlFor="city" className="block font-semibold">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-gray-300 h-11 rounded-md p-2 outline-none focus:outline-red-500"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="zipcode" className="block font-semibold">
                Zip Code:
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                className="w-full border-gray-300 h-11 rounded-md p-2 outline-none focus:outline-red-500"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="country" className="block font-semibold">
              Country:
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 h-11 outline-none focus:outline-red-500 bg-neutral-50"
              required
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block font-semibold">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md p-2 outline-none h-11 focus:outline-red-500"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="border-gray-300 rounded focus:outline-none outline-none h-11"
            />
            <label htmlFor="agree" className="font-semibold">
              Delivery address is same as billing address
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-rose-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-rose-600 outline-none w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
