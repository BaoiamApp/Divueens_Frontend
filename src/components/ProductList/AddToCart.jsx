import { useState , useEffect} from "react";
import { RiDeleteBin6Line, RiDiscountPercentLine} from "react-icons/ri";
import { FaStar , FaChevronRight } from "react-icons/fa6";
// import { product1, product2 } from '../../assets/assets'
import allItemData from './ProductListItemData';
import CartItem from './cardItem2'

function Cart() {
  const [arrayOfCartItemId, setArrayOfCartItemId] = useState(JSON.parse(localStorage.getItem("Item-Id")) || []);
    const [cartItemData , setCartItemData] = useState([]);
  const [itemData , setItemData] = useState(allItemData)
    useEffect(() => {
        
        const modifiedCartData = itemData.filter((val) => arrayOfCartItemId.includes(val.id));
        setCartItemData(modifiedCartData);
        const gv = JSON.parse(localStorage.getItem("Item-Id")) || []
        if(gv !== arrayOfCartItemId) return setArrayOfCartItemId(JSON.parse(localStorage.getItem("Item-Id")) || []);
        // else return setArrayOfCartItemId(gv)

    },[arrayOfCartItemId,itemData]);

    const toRemoveItemFromCart =  (itemId) => {
         setArrayOfCartItemId((prevArray) => {
            const updatedCartArray = prevArray.filter((val) => val !== itemId);
            localStorage.setItem("Item-Id", JSON.stringify(updatedCartArray));
            return updatedCartArray;
        });
    };

  const handleIncrease = (id) => {
    setItemData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItemData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1,0) } : item
      )
    );
  };

  // const handleRemove = (id) => {
  //   setItemData((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  const total = cartItemData.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="flex md:flex-row flex-col justify-between gap-8 md:p-10 p-3 my-10">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <p className="text-2xl font-bold mb-4">Cart details</p>
        <div className="flex flex-col overflow-y-scroll overflow-x-hidden max-h-80 w-full gap-4 p-3">
          {cartItemData && cartItemData.length > 0 ? 
          cartItemData.map((item) => (
            <CartItem
              key={item.id}
              title={item.name}
              image={item.image}
              rating={item.rating}
              price={item.price}
              quantity={item.quantity}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => toRemoveItemFromCart(item.id)}
            />
          )) : 
          <div>No data</div>
          }
        </div>
      </div>
      <div className="flex flex-col gap-8 md:w-96 w-full my-10">
        <div className="border-2 px-4 py-2 rounded-md mb-4 flex items-center gap-3 justify-evenly">
          <RiDiscountPercentLine size={28} color="#fb7185" />
          <div className="flex flex-col items-start">
            <p className="font-medium text-lg">Coupons</p>
            <span className="text-md font-medium text-rose-400">Apply now and save extra</span>
          </div>
          <FaChevronRight size={24}/>
        </div>
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="font-medium mb-4">Price Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Order Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <div className="flex gap-2"> <span className="text-green-400">Free</span><del>₹40</del></div>
          </div>
          <button className="bg-rose-500 text-white font-medium rounded-md px-4 py-2 mt-4 w-full">
            To Pay
            <span className="ml-2">₹{total.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
