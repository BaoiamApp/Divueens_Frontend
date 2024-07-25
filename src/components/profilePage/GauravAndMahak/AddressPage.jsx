import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddLocationAlt } from "react-icons/md";

function AddressPage() {
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("addresses");
    return savedAddresses ? JSON.parse(savedAddresses) : [];
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (address) => {
    setAddresses([...addresses, address]);
  };

  const deleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const editAddress = (index, updatedAddress) => {
    const updatedAddresses = addresses.map((address, i) =>
      i === index ? updatedAddress : address
    );
    setAddresses(updatedAddresses);
  };

  return (
    <div className="relative ml-4 flex md:flex-row flex-col gap-3">
      <div className="absolute top-2 sm:right-10 md:right-20 z-10">
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center justify-center gap-2 text-[18px] px-4 py-3 w-auto h-12 border-rose-500 border-[2px] text-rose-500 rounded-lg hover:text-white hover:bg-rose-500 transition-all duration-200 ease-in-out"
        >
         {showForm ? "Close" : "Add"}
        </button>
      </div>

      <div className="flex md:flex-row lg:pt-10 xl:pt-0 md:pt-24 pt-20 gap-8 flex-col justify-center">
        {showForm ? (
          <AddressForm
            showForm={showForm}
            setShowForm={setShowForm}
            addAddress={addAddress}
          />
        ) : (
          <div className="flex flex-col overflow-hidden text-[18px] items-center rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg h-[70vh] overflow-y-scroll">
            <div className="flex w-full bg-slate-300 justify-center items-center text-[15px] font-bold gap-2 md:text-[22px] px-3 md:w-[100%] rounded-tr-xl">
              <p className="text-center py-4 ">Choose Your Location</p>{" "}
              <IoLocationOutline />
            </div>
            <div className="flex flex-col overflow-hidden text-[18px] items-center rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg h-[70vh] overflow-y-scroll">
              {addresses.map((address, index) => (
                <AddressCard
                  key={index}
                  address={address}
                  deleteAddress={() => deleteAddress(index)}
                  editAddress={(updatedAddress) =>
                    editAddress(index, updatedAddress)
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressPage;