// OrderDetails.js

import React, { useEffect, useState } from 'react';
// import productData from '../components/OrderingGateway/productData'; // Import product data
import DiscountCode from '../components/OrderingGateway/DiscountCode'; // Import DiscountCode component
import FormComponent from '../components/OrderingGateway/FormComponent';
import Slider from '../components/OrderingGateway/Slider'; // Import Slider component
import { useNavigate, useParams } from 'react-router-dom';
// import PaymentOptions from '../components/OrderingGateway/PaymentOptions' 
import FormAddress from '../components/profilePage/GauravAndMahak/AddressPage'
import productDetails from '../components/ProductList/ProductListItemData';
import discountCodes from '../components/OrderingGateway/discountData';

const OrderDetails = () => {
  const { id } = useParams();
  const products = productDetails
  const [productDetail, setProductDetail] = useState({})
  useEffect(() => {
    const filterData = products.filter(p => p.id === parseInt(id, 10))
    setProductDetail(filterData[0])
  }, [id])

  console.log(productDetail);

 const [selectedAddress, setSelectedAddress] = useState(null);
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };
  const getTotalDiscount = () => {
    return cart.reduce((total, item) => {
      const product = productDetails.find((p) => p.id === item.id);
      if (product && product.price && product.discount) {
        return total + product.price * item.quantity * (product.discount / 100);
      }
      return total;
    }, 0);
  };
  // Added products info 
  
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    { id: 1, name: 'Prime Red Luck Lipstick', quantity: 1 },
    // { id: 2, name: 'Royal Eyeshadow Palette', quantity: 1 }
  ]);
  
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
    const foundDiscount = discountCodes.find((dc) => dc.code.toLowerCase() === discountCode.toLowerCase());
    if (foundDiscount) {
      setDiscount(foundDiscount.value);
    } else {
      setDiscount(0);
    }
  };
  const handleCheckout = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    navigate('/transaction', { state: { selectedAddress, totalItems,total, convenienceFee,discountAmount, subtotal , totaldiscountAmount} });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const product = productDetails.find((p) => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  const deliveryFee = 0;
  const convenienceFee = 5;
  const subtotal = getTotal();
  const totalDiscount=getTotalDiscount();
  const discountAmount = ((subtotal-totalDiscount ) * discount) / 100;
  const totaldiscountAmount = totalDiscount+discountAmount;
  const total = subtotal + convenienceFee - discountAmount-totalDiscount;
  console.log(discount);

  return (
    <div className="relative  ">
      <Slider />

      <div className="px-4 py-4 flex flex-col xl:flex-row min-h-screen">
        <div className="p-4 xl:p-8 mx-auto ">
          {/* <h2 className="text-xl font-bold mb-5 ">General Information</h2> */}
          {/* <FormComponent/> */}
          <FormAddress onAddressSelect={handleAddressSelect} selectedAddress={selectedAddress}/>

        </div>
        <div className="w-full xl:w-3/5 p-6 flex flex-col gap-3 justify-between ">
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
                // const product = productData.find((p) => p.name === item.name);
                const product = productDetail;
                return (
                  <div key={item.id} className="flex items-center justify-between border-b border-b-slate-800 py-2">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
                    <div className="flex-1 ml-4">
                      <h3 className="font-bold">{product.name}</h3>
                      <p>Qty:
                        <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2">-</button>
                        {item.quantity}
                        <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2">+</button>
                      </p>
                      <p>Colour: {product.color}</p>
                      <p>Price: ${product.price}</p>
                      <button className="text-rose-700">Move to Favourites</button>
                    </div>
                    <button onClick={() => setCart(cart.filter((i) => i.id !== item.id))} className="text-black">
                      🗑
                    </button>
                  </div>
                );
              })}
              <div className="py-2">
              <p className='gap-2 flex'><span className='font-bold md:text-[15px]'>SubTotal:</span> ${subtotal.toFixed(2)}</p>
                <p className='gap-2 flex'><span className='font-bold md:text-[15px]'>Delivery:</span> Free</p>
                <p className='gap-2 flex'><span className='font-bold md:text-[15px]'>Discount:</span> ${totaldiscountAmount.toFixed(2)}</p>
                <p className='gap-2 flex'><span className='font-bold md:text-[15px] '>Convenience fee:</span> ${convenienceFee}</p>
                <p className='flex items-center gap-2'><span className='font-bold md:text-[15px]'>Total:</span> ${total.toFixed(2)} <span className='text-[12px]'>(Including tax)</span></p>
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
          <div className="flex justify-end mt-7 gap-8">
            <button className="p-2 lg:text-lg text-sm sm:text-base border-[2px] border-rose-700 font-semibold rounded-lg hover:text-rose-700 hover:bg-white bg-rose-700 text-white transition-all duration-200 ease-in-out  shadow-lg" onClick={handleCheckout}>Checkout</button>
            <button className="p-2 lg:text-lg text-sm sm:text-base  border-[2px] border-rose-700 font-semibold rounded-lg hover:text-rose-700 hover:bg-white bg-rose-700 text-white transition-all duration-200 ease-in-out  shadow-lg">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;