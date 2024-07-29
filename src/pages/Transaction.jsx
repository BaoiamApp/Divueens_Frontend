import React, { useState } from 'react';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import { FaGooglePay, FaCreditCard, FaLock, FaAmazonPay, FaApplePay, FaCcMastercard, FaGift } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { RiVisaFill } from "react-icons/ri";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const menuItems = [
  { name: 'UPI', subheading: 'Google pay,Paytm,PhonePe & more' },
  { name: 'Credit Card', subheading: 'Visa, Mastercard, Rupay & more' },
  { name: 'Cash on Delivery', subheading: 'Pay on your door step' },
  { name: 'Net Banking', subheading: 'Pay through your fav bank' },
  { name: 'Shop now and pay later', subheading: 'Zest money, Simple & more' },
  { name: 'Gift Card', subheading: 'One card for all Divueens' },
  { name: 'Offers', subheading: 'offers available for you'},
];


const UPIComponent = () => (
  <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-lg">
    <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Pay by any UPI App</h2>
    <hr className="mb-4 md:mb-5 lg:mb-6" />

    <div className="flex justify-start gap-3 mb-4 md:mb-5 lg:mb-6">
      <FaGooglePay className="text-3xl md:text-4xl lg:text-4xl text-blue-500" />
      <FaAmazonPay className="text-3xl md:text-4xl lg:text-4xl text-orange-500" />
      <SiPaytm className="text-3xl md:text-4xl lg:text-4xl text-blue-600" />
      <FaApplePay className="text-3xl md:text-4xl lg:text-4xl text-indigo-600" />
    </div>

    <button className="w-auto bg-black text-white py-2 md:py-2.5 lg:py-3 px-3 rounded-lg mb-4 md:mb-5 lg:mb-6 hover:bg-grey-600 transition duration-300">
      Generate QR Code
    </button>

    <div className="flex items-center mb-6 md:mb-8 lg:mb-10">
      <hr className="flex-grow border-gray-300" />
      <span className="px-4 text-gray-500">OR</span>
      <hr className="flex-grow border-gray-300" />
    </div>

    <div className="mb-4 md:mb-5 lg:mb-6">
      <input
        type="text"
        placeholder="Enter UPI ID"
        className="w-full p-2 md:p-2.5 lg:p-3 border border-gray-300 rounded-md outline-none"
      />
    </div>

    <p className="text-sm md:text-base text-gray-600 mb-4">
      A payment request will be sent to this upi id.
    </p>

    <button className="w-full bg-rose-700 text-white py-2 md:py-2.5 lg:py-3 rounded-md hover:bg-rose-600 transition duration-300">
      Verify and Pay
    </button>
  </div>
);

const CreditCardComponent = () => (
  <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
    <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Credit & Debit Card</h2>
    <hr className="mb-4 md:mb-5 lg:mb-6" />

    <div className="flex justify-start gap-3 mb-4 md:mb-5 lg:mb-6">
      <p className='text-gray-600 pr-3'>we accept:</p>
      <RiVisaFill className="text-3xl md:text-4xl lg:text-4xl text-blue-800" />
      <FaCcMastercard className="text-3xl md:text-4xl lg:text-4xl text-blue-800" />
    </div>

    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
          Card Number
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
          />
          <FaCreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expiryDate"
            type="text"
            placeholder="MM/YY"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cvv"
            type="text"
            placeholder="123"
          />
        </div>
      </div>

      <div className="mb-4 md:mb-5 lg:mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolder">
          Card Holder Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cardHolder"
          type="text"
          placeholder="Diva"
        />
      </div>

      <div className="flex items-center mb-4">
        <FaLock className="text-gray-500 mr-2" />
        <p className="text-sm md:text-base text-gray-600">
          Your transaction is secured with SSL encryption
        </p>
      </div>

      <Link to={'/MaintennacePage'}
        className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 md:py-2.5 lg:py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
        type="button" 
      >
        Pay Now
      </Link>
    </form>
  </div>
);

const CashOnDeliveryComponent = () => (
  <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
    <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Pay at your Door step </h2>
    <hr className="mb-4 md:mb-5 lg:mb-6" />
    <p className='mb-3 md:mb-4 lg:mb-5'><b>25260 users</b> have made payments through UPI in the last 1hr.<b className='text-rose-700'>Switch to upi</b></p>
    <button
        className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 md:py-2.5 lg:py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
        type="button"
      >
        Place order
    </button>
  </div>
);

const NetBankingComponent = () => {
  const banks = [
    { name: 'Axis Bank', icon: '🏦' },
    { name: 'HDFC Bank', icon: '🏦' },
    { name: 'ICICI Bank', icon: '🏦' },
    { name: 'Kotak Bank', icon: '🏦' },
    { name: 'State Bank of India', icon: '🏦' },
    { name: 'Yes Bank', icon: '🏦' },
    { name: 'Other Banks', icon: '🏦' },
  ];

  return (
    <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4 md:mb-5 lg:mb-6">Pay with Net Banking</h2>

      <div className="space-y-3 md:space-y-3 lg:space-y-4 mb-4 md:mb-5 lg:mb-6">
        {banks.map((bank, index) => (
          <button 
            key={index}
            className="w-full flex items-center justify-between p-2 md:p-2.5 lg:p-3 outline-none rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <div className="flex items-center">
              <span className="mr-3 text-xl md:text-2xl lg:text-2xl">{bank.icon}</span>
              <span className="font-medium">{bank.name}</span>
            </div>
          </button>
        ))}
      </div>

      <button className="w-full bg-rose-700 text-white py-2 md:py-2.5 lg:py-3 rounded-md hover:bg-rose-500 transition duration-300 font-semibold">
        Pay Now
      </button>
    </div>
  );
};

const ShopNowPayLaterComponent = () => (
  <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
    <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Pay at your Door step </h2>
    <hr className="mb-4 md:mb-5 lg:mb-6" />
    <input
      className="shadow appearance-none border rounded w-full py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="cardNumber"
      type="number"
      placeholder="Phone number"
    />
  </div>
);

const GiftCardComponent = () => {
  const [giftCardNumber, setGiftCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pin) {
      setError('PIN is required');
    } else {
      setError('');
      console.log('Processing payment with gift card:', giftCardNumber, 'and PIN:', pin);
    }
  };

  return(
    <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Pay with Gift Card</h2>
      <hr className="mb-4 md:mb-5 lg:mb-6" />

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="giftCardNumber">
            Gift Card Number
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border outline-none h-10 md:h-11 lg:h-12 rounded w-full py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="giftCardNumber"
              type="text"
              placeholder="Enter gift card number"
              value={giftCardNumber}
              onChange={(e) => setGiftCardNumber(e.target.value)}
              required
            />
            <FaGift className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mb-4 md:mb-5 lg:mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
            PIN
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none outline-none border rounded w-auto py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pin"
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
        </div>

        <button
          className="w-full bg-rose-700 hover:bg-rose-600 text-white font-bold py-2 md:py-2.5 lg:py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
          type="submit"
        >
          Pay Now
        </button>
      </form>
    </div>
  )
};

const OffersComponent = () => (
  <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-sky-900 mb-4">offers for you</h2>
      <p className='font-semibold'>get upto 15% Cashback on Divueens Cosmetics</p>
      <p>product on minimum transaction RS1199 <b className='text-rose-600'>T&C</b></p>
      <hr className="my-4 md:my-5 lg:my-6" />
      <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-sky-900 mb-4">Unavailable offers</h2>
      <p className='font-semibold'>save 20% Extra with HDFC first SWYP credit card</p>
      <p>save 20% Extra with HDFC first SWYP credit card<b className='text-rose-600'>T&C</b></p>
  </div>
);

export default function Transaction() {
  const location = useLocation();
  // const { totalItems } = location.state || { totalItems: 0 };
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const { selectedAddress, totalItems, total, convenienceFee,discountAmount , subtotal,totaldiscountAmount} = location.state;
  // const selectedAddress = location.state?.selectedAddress;
   // Retrieve the address from location state

  const handleMenuClick = (item) => {
    setSelectedOption(item);
  };

  const handleGoBack = () => {
    navigate('/order-now');
  };


  const renderComponent = () => {
    switch(selectedOption) {
      case 'UPI':
        return <UPIComponent />;
      case 'Credit Card':
        return <CreditCardComponent />;
      case 'Cash on Delivery':
        return <CashOnDeliveryComponent />;
      case 'Net Banking':
        return <NetBankingComponent />;
      case 'Shop now and pay later':
        return <ShopNowPayLaterComponent />;
      case 'Gift Card':
        return <GiftCardComponent />;
      case 'Offers':
        return <OffersComponent />;
      default:
        return <div className="p-4 text-center">Please select a payment option</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-5  lg:flex-row relative mt-8 ">
      {/* Back button */}
      <button 
        onClick={handleGoBack}
        className="absolute top-4 right-4 text-3xl text-rose-700 hover:text-rose-600 transition-colors duration-300 "
        aria-label="Go back to order now"
      >
        <IoArrowBackCircleOutline />
      </button>

      {/* Left Column */}
      <div className="md:w-3/4 lg:w-[35%] p-2 md:p-5 lg:p-6">
        
        
        <div className="mb-6 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold ">Summary</h2>
        </div>
        
        <div className="bg-white w-full  shadow-md rounded-lg border-2 border-gray-400 p-4">
          <div className="flex flex-row items-center">
            <h3 className="text-lg font-semibold w-[50%]">Bag:</h3>
            <p className="text-gray-600 ">{totalItems} items</p>
          </div>
          <div className="flex flex-row items-center">
            <h3 className="text-lg font-semibold w-[50%]">Name</h3>
            <p className="text-gray-600 "> {selectedAddress ? (
                  <>
                    <span>{selectedAddress.Name}</span>
                  </>
            ) : (
              'No name selected'
            )}</p>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="py-2">
            <h3 className="text-lg font-semibold">Deliver to</h3>
          
            <p className='text-gray-600'>
                  {selectedAddress ? (
                        <>
                         <span className='flex'> <p className='w-[50%]'>Street:</p><p>{selectedAddress.StreetAddress}</p></span>
                          <span className='flex'><p className='w-[50%]'>Apartment:</p><p> {selectedAddress.ApartmentNumber}</p></span>
                          <span className='flex'><p className='w-[50%]'>City:</p><p> {selectedAddress.City}</p></span>
                          <span className='flex'><p className='w-[50%]'>State:</p><p> {selectedAddress.State}</p></span>
                          <span className='flex'><p className='w-[50%]'>Country:</p><p> {selectedAddress.Country}</p></span>
                          <span className='flex'><p className='w-[50%]'>Pincode:</p><p>{selectedAddress.ZipCode}</p></span>
                        </>
                  ) : (
                    'No address selected'
                  )}
            </p>
           
            
      
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <div className="">
            <h3 className="text-lg font-semibold ">Price details</h3>
            <p className="text-gray-600  flex flex-row "><span className='w-[50%]'>Sub Total: </span><span>Rs {subtotal}/-</span></p> 
            <p className="text-gray-600  flex flex-row "><span className='w-[50%]'>Discount: </span><span>Rs {totaldiscountAmount}/-</span></p> 
            <p className="text-gray-600  flex flex-row"><span className='w-[50%]'>Convenience Fee:</span><span>Rs {convenienceFee}/-</span> </p>
            <p className="text-gray-600  flex flex-row"><span className='w-[50%]'>Total:</span><span>Rs {total}/-</span> </p>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <button className="w-full h-8 md:h-9 lg:h-10 rounded-lg mt-3 mb-3 lg:text-lg text-sm sm:text-base  border-[2px] border-rose-700 font-semibold hover:text-rose-700 hover:bg-white bg-rose-700 text-white transition-all duration-200 ease-in-out  shadow-lg">you are saving Rs {totaldiscountAmount} /-</button>
        </div>
      </div>
      
      {/* menu */}
      
      <div className='flex flex-col  lg:w-[80%] p-4 md:p-5 lg:p-6'> 
      <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold ">Choose Payment Method</h1>
          <p className="text-gray-600 mt-2 md:mt-1 ">Choose the payment method you prefer</p>
        </div>
        <div className='flex '>
      <div className="w-[40%]  lg:w-[35%] bg-gray-100 ">
      
        <div className="flex flex-col gap-3 md:gap-1 lg:gap-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`text-left outline-none py-2 md:py-2.5 lg:py-3 px-3 md:px-4 hover:bg-rose-200 focus:bg-rose-200 ${selectedOption === item.name ? 'bg-rose-100' : ''}`}
              onClick={() => handleMenuClick(item.name)}
            >
              <div className="flex items-center">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs md:text-sm text-gray-600">{item.subheading}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* form */}
      <div className="w-full md:w-full lg:w-[60%] px-4 md:px-5 lg:px-6">
        {renderComponent()}
      </div>
    </div>
    </div>
    </div>
  );
}