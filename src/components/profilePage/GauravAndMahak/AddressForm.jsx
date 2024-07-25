// src/AddressForm.js

import React, { useState } from 'react';

function AddressForm({ addAddress , showForm ,setShowForm }) {
  const [formData, setFormData] = useState({
    Name: '',
    StreetAddress: '',
    ApartmentNumber: '',
    City: '',
    ZipCode: '',
    State: '',
    Country: '',
    PhoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAddress(formData);
    setShowForm(false);
    setFormData({
      Name: '',
      StreetAddress: '',
      ApartmentNumber: '',
      City: '',
      ZipCode: '',
      State: '',
      Country: '',
      PhoneNumber: '',
    });
  };

  return (
    <form className="bg-rose-100 md:w-[600px] h-fit p-4 rounded shadow-md" onSubmit={(e) => handleSubmit(e)}>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={(e) => handleChange(e)}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>
      <button 
      
        type="submit"
        className="mt-4 bg-rose-500 text-white px-4 py-2 rounded">
        Save Address
      </button>
    </form>
  );
}

export default AddressForm;
