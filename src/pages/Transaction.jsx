import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const UPIComponent = () => {
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm-order');
  };
  
  return (
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

      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:mb-5 lg:mb-6">
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="w-full p-2 md:p-2.5 lg:p-3 border border-gray-300 rounded-md outline-none"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
        </div>

        <p className="text-sm md:text-base text-gray-600 mb-4">
          A payment request will be sent to this UPI ID.
        </p>

        <button type="submit" className="w-full bg-rose-700 text-white py-2 md:py-2.5 lg:py-3 rounded-md hover:bg-rose-600 transition duration-300">
          Verify and Pay
        </button>
      </form>
    </div>
  );
};

const CreditCardComponent = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm-order');
  };
  
  return (
    <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Credit & Debit Card</h2>
      <hr className="mb-4 md:mb-5 lg:mb-6" />

      <div className="flex justify-start gap-3 mb-4 md:mb-5 lg:mb-6">
        <p className='text-gray-600 pr-3'>We accept:</p>
        <RiVisaFill className="text-3xl md:text-4xl lg:text-4xl text-blue-800" />
        <FaCcMastercard className="text-3xl md:text-4xl lg:text-4xl text-blue-800" />
      </div>

      <form onSubmit={handleSubmit}>
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
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
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
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
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
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
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
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center mb-4">
          <FaLock className="text-gray-500 mr-2" />
          <p className="text-sm md:text-base text-gray-600">
            Your transaction is secured with SSL encryption
          </p>
        </div>

        <button
          className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 md:py-2.5 lg:py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

const CashOnDeliveryComponent = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Pay at your Door step </h2>
      <hr className="mb-4 md:mb-5 lg:mb-6" />
      <p className='mb-3 md:mb-4 lg:mb-5'><b>25260 users</b> have made payments through UPI in the last 1hr.<b className='text-rose-700'>Switch to upi</b></p>
      <button
        className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 md:py-2.5 lg:py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
        type="button"
        onClick={() => navigate('/confirm-order')}
      >
        Place order
      </button>
    </div>
  );
};

const NetBankingComponent = () => {
  const navigate = useNavigate();
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
    <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-lg">
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

      <button 
        className="w-full bg-rose-700 text-white py-2 md:py-2.5 lg:py-3 rounded-md hover:bg-rose-500 transition duration-300 font-semibold"
        onClick={() => navigate('/confirm-order')}
      >
        Pay Now
      </button>
    </div>
  );
};

const ShopNowPayLaterComponent = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm-order');
  };
  
  return (
    <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">Pay at your Door step </h2>
      <hr className="mb-4 md:mb-5 lg:mb-6" />
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded w-full py-2 md:py-2.5 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="tel"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button
          className="w-full bg-rose-700 text-white py-2 md:py-2.5 lg:py-3 rounded-md hover:bg-rose-500 transition duration-300 mt-4"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

const GiftCardComponent = () => {
  const [giftCardNumber, setGiftCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pin) {
      setError('PIN is required');
    } else {
      setError('');
      navigate('/confirm-order');
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

const OffersComponent = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white p-4 md:p-5 lg:p-6 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-sky-900 mb-4">offers for you</h2>
      <p className='font-semibold'>get upto 15% Cashback on Divueens Cosmetics</p>
      <p>product on minimum transaction RS1199 <b className='text-rose-600'>T&C</b></p>
      <hr className="my-4 md:my-5 lg:my-6" />
      <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-sky-900 mb-4">Unavailable offers</h2>
      <p className='font-semibold'>save 20% Extra with HDFC first SWYP credit card</p>
      <p>save 20% Extra with HDFC first SWYP credit card<b className='text-rose-600'>T&C</b></p>
      <button
        className="w-full bg-rose-700 text-white py-2 md:py-2.5 lg:py-3 rounded-md hover:bg-rose-500 transition duration-300 mt-4"
        onClick={() => navigate('/confirm-order')}
      >
        Apply Offer and Continue
      </button>
    </div>
  );
};

export default function Transaction() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

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
    <div className="min-h-screen flex flex-col md:flex-row lg:flex-row relative">
      {/* Back button */}
      <button 
        onClick={handleGoBack}
        className="absolute top-4 right-4 text-3xl text-rose-700 hover:text-rose-600 transition-colors duration-300"
        aria-label="Go back to order now"
      >
        <IoArrowBackCircleOutline />
      </button>

      {/* Left Column */}
      <div className="w-full md:w-1/2 lg:w-[35%] p-4 md:p-5 lg:p-6">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2">Choose Payment Method</h1>
          <p className="text-gray-600 mt-2 md:mt-3 lg:mt-4">Choose the payment method you prefer</p>
        </div>
        
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl font-bold mb-4">Payment Options</h2>
        </div>
        
        <div className="bg-white w-full sm:w-[90%] md:w-full lg:w-[80%] mx-auto shadow-md rounded-lg border-2 border-gray-400 p-4 md:p-5 lg:p-6">
          <div className="py-2">
            <h3 className="text-lg font-semibold">Bag</h3>
            <p className="text-gray-600 mt-2 md:mt-3 lg:mt-4">1 items</p>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <div className="py-2">
            <h3 className="text-lg font-semibold">Deliver to</h3>
            <p className="text-gray-600 mt-2 md:mt-3 lg:mt-4">deliver to</p>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <div className="py-2">
            <h3 className="text-lg font-semibold">Price details</h3>
            <p className="text-gray-600 mt-2 md:mt-3 lg:mt-4">$250</p>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <button className="w-full bg-red-700 text-slate-50 h-8 md:h-9 lg:h-10 rounded-lg mt-3 mb-3">you are saving $118</button>
        </div>
      </div>
      
      {/* menu */}
      <div className="w-full md:w-1/2 lg:w-[25%] bg-gray-100 p-4 md:p-5 lg:p-6">
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
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
      <div className="w-full md:w-full lg:w-[40%] p-4 md:p-5 lg:p-6">
        {renderComponent()}
      </div>
    </div>
  );
}