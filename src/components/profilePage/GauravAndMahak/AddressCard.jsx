// src/AddressCard.js
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import locationAddressImg from "../../../assets/addressLocation.svg";

function AddressCard({ address, deleteAddress, editAddress, onSelect, isSelected }) {
  const [isDeletePopUp, setIsDeletePopUp ]  = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(address);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    editAddress(formData);
    setIsEditing(false);
  };

  return (
    <div
      className={`relative rounded shadow-md w-full md:w-[700px] ${isSelected ? 'bg-rose-100 text-black' : 'bg-white text-black'}`}
      onClick={() => onSelect(address)}
    >
      {isEditing ? (
        <div className="bg-rose-200 p-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.keys(formData).map((key) => (
              <div key={key} className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleSave}
            className="mt-4 bg-rose-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-evenly items-center w-full py-2">
            <div className="sm:w-[30%] sm:h-[80%] hidden sm:block">
              <img
                src={locationAddressImg}
                className="w-full h-[70%] object-center object-fill"
                alt="Location"
              />
            </div>
            <div className="sm:w-[60%]  w-auto h-full sm:bg-white px-2 rounded-xl my-2  text-wrap ">
              <div className=" text-[15px] md:text-[17px] pb-5">
                {Object.entries(address).map(([key, value], index) => (
                  <span key={key} className={`mb-1`}>
                    {key === "Name" ? <strong className="text-[18px] md:text-[21px]">{value } </strong> : value}
                    {index < Object.entries(address).length - 1 && ', '}
                    {index == 0 && <br />}
                  </span>
                ))}
              </div>
              <div className="absolute right-1 bottom-0 flex space-x-2  text-[15px] mb-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="border-rose-700 border-[2px] rounded-2xl hover:bg-rose-700 hover:text-white text-rose-700 px-4 py-1 sm:text-[20px]"
                >
                  <FaRegEdit />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDeletePopUp(true);
                  }}
                  className="border-rose-700 border-[2px] rounded-2xl hover:bg-rose-700 hover:text-white text-rose-700 px-4 py-1 sm:text-[20px]"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>

          {isDeletePopUp && (
            <div className="z-[3] absolute top-0 right-2 md:right-[30%] md:p-10 bg-white flex flex-col gap-7 items-center  my-10 border-2px border-rose-700 shadow">
              <h3>Want to delete this address?</h3>
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDeletePopUp(false);
                  }}
                  className="py-2 px-4 bg-green-500 rounded-lg text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteAddress(address.id);
                    setIsDeletePopUp(false);
                  }}
                  className="py-2 px-4 bg-red-500 rounded-lg text-white"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AddressCard;
