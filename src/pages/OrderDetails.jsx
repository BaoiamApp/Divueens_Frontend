// OrderDetails.js

import React, { useState } from 'react';
import productData from '../components/OrderingGateway/productData'; // Import product data
import DiscountCode from '../components/OrderingGateway/DiscountCode'; // Import DiscountCode component
import FormComponent from '../components/OrderingGateway/FormComponent';
import Slider from '../components/OrderingGateway/Slider'; // Import Slider component
import { useNavigate } from 'react-router-dom';
// import PaymentOptions from '../components/OrderingGateway/PaymentOptions' 
import FormAddress from '../components/profilePage/GauravAndMahak/AddressPage' 

const OrderDetails = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    { id: 1, name: 'Prime Red Luck Lipstick', quantity: 1 },
    { id: 2, name: 'Royal Eyeshadow Palette', quantity: 1 }
  ]);

  const handleCheckout = () => {
    navigate('/transaction');
  };
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleDiscountCode = () => {
    const foundDiscount = discountCodes.find(dc => dc.code === discountCode);
    if (foundDiscount) {
      setDiscount(foundDiscount.value);
    } else {
      setDiscount(0);
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const product = productData.find((p) => p.name === item.name);
      return total + product.price * item.quantity;
    }, 0);
  };

  const deliveryFee = 0;
  const convenienceFee = 5;
  const subtotal = getTotal();
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal + convenienceFee - discountAmount;

  return (
    <div className="relative">
      <Slider />

      <div className="p-4 flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-3/5 p-4">
        <h2 className="text-xl font-bold mb-5 ">General Information</h2>
          {/* <FormComponent/> */}
          <FormAddress />
          
        </div>
        <div className="w-full lg:w-2/5 p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-xl font-bold mb-5">Order Details:</h2>
              <button className="flex items-center mb-5">
                <span>🎁</span>
                +Add a gift card/gift wrap
              </button>
            </div>
            <div className="bg-white shadow-2xl p-4 rounded-lg w-full">
              {cart.map((item) => {
                const product = productData.find((p) => p.name === item.name);
                return (
                  <div key={item.id} className="flex items-center justify-between border-b border-b-slate-800 py-2">
                    <img src={product.photo} alt={product.name} className="w-20 h-20 object-cover" />
                    <div className="flex-1 ml-4">
                      <h3 className="font-bold">{product.name}</h3>
                      <p>Qty: 
                        <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2">-</button>
                        {item.quantity}
                        <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2">+</button>
                      </p>
                      <p>Colour: {product.color}</p>
                      <p>Price: ${product.price}</p>
                      <button className="text-rose-500">Move to Favourites</button>
                    </div>
                    <button onClick={() => setCart(cart.filter((i) => i.id !== item.id))} className="text-black">
                      🗑️
                    </button>
                  </div>
                );
              })}
              <div className="py-2">
                <p>Delivery: Free</p>
                <p>Discount: ${discountAmount.toFixed(2)}</p>
                <p>Convenience fee: ${convenienceFee}</p>
                <p>Total: ${total.toFixed(2)} (Including tax)</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <DiscountCode
              discountCode={discountCode}
              setDiscountCode={setDiscountCode}
              handleDiscountCode={handleDiscountCode}
            />
          </div>
          {/* <div className='mt-2'><PaymentOptions/></div> */}
          <div className="flex justify-end mt-7">
            <button className="bg-rose-300 text-black py-2 px-6 mr-[2rem] xs:mr-12 rounded hover:bg-rose-400 shadow-lg" onClick={handleCheckout}>Checkout</button>
            <button className="bg-rose-200 text-black py-2 px-8 rounded hover:bg-red-300 shadow-lg">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
