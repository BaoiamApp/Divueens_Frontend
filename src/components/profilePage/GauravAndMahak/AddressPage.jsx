import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import { IoLocationOutline } from "react-icons/io5";

function AddressPage({ onAddressSelect, selectedAddress }) {
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
      

      <div className="flex md:flex-row lg:pt-0  md:pt-2  gap-8 flex-col justify-center">
        {showForm ? (
          <AddressForm
            showForm={showForm}
            setShowForm={setShowForm}
            addAddress={addAddress}
          />
        ) : (
          <div className="flex flex-col  text-[18px] items-center rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg max-h-[50vh] xl:max-h-[80vh] ">
            <div className="flex  w-full bg-slate-300 justify-between items-center text-[15px] font-bold gap-2 md:text-[22px] px-3 md:w-[100%] rounded-tl-xl rounded-tr-xl">
              <div className="flex items-center gap-3">
                  <p className="text-center py-4 ">Choose Your Location</p>{" "}
                  <IoLocationOutline />
              </div>
              <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center justify-center gap-2 lg-text-[18px] px-4 py-1 w-auto  border-rose-700 border-[2px] text-rose-700 rounded-lg hover:text-white hover:bg-rose-700 transition-all duration-200 ease-in-out"
                    >
                     {showForm ? "Close" : "Add"}
              </button>
            </div>
            <div className="flex flex-col w-[100%]  text-[18px] items-center
             overflow-y-auto overflow-x-hidden ">
              {addresses.map((address, index) => (
                <AddressCard
                  key={index}
                  address={address}
                  deleteAddress={() => deleteAddress(index)}
                  editAddress={(updatedAddress) =>
                    editAddress(index, updatedAddress)
                  }
                  onSelect={onAddressSelect}
                  isSelected={selectedAddress === address}
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
