import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaTrash, FaShare, FaShareSquare} from 'react-icons/fa';
import Trash from '../../../assets/trash.png';
import Share from '../../../assets/share.png';
import productData from '../../ProductList/ProductListItemData';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [wishListItem , setWishListItem] = useState(productData)

  useEffect(() => {
    const storedWishlist = [...new Set(JSON.parse(localStorage.getItem('wishlist')))] || [];
    setWishlist(storedWishlist);
    const tempData = wishListItem.filter(product => storedWishlist.includes(product.id));
    setWishListItem(tempData)
  }, [wishListItem]);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">Wishlist<FaHeart className='text-pink-400'/></h1>
      <div className="">
        {wishListItem.map((item) => (
          <div key={item.id} className="border-2 border-pink-300 mb-4 flex">
            <div className=" p-3 border-r-2 border-pink-300 w-64 ">
              <img
                src={item.image}
                alt="image"
                className="h-40 m-auto object-center object-cover transition duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex justify-between sm:items-start  w-full p-4 ">
              <div className=''>
                <Link to="/product-description" className="hover:text-gray-800 tracking-tighter  transition duration-100 font-semibold  md:text-lg lg:text-xl">
                  {item.name} - {item.category} - {item.shade} - {item.material} - {item.brands}
                </Link>
                
              
              <div className="flex items-center gap-4">
                      <p className="text-[0.8rem]  sm:text-base lg:text-lg">
                        {item.rating} / <span className="text-[#00000077]">5</span>
                      </p>
                      <div className="text-[#ffa200] flex items-center gap-1.5">
                        <FaHeart />
                        <FaHeart />
                        <FaHeart />
                        <FaHeart />
                      </div>
              </div>
              <div className="font-semibold text-[0.8rem] sm:text-sm md:text-base lg:text-lg my-3 ">MRP: ₹ {item.price}</div>
              <div className="flex  sm:gap-4 gap-2 lg:-bottom-4 xl:-bottom-2 left-0 right-0">
                <button className="bg-pink-400 font-bold  text-white  rounded-2xl text-[0.7rem]  px-6 py-1  lg:text-base">Add To Cart</button>
                <button><img src={Share}  className='md:h-6 h-5' /> </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-white px-3">
                  <div  className="text-[0.9rem] cursor-pointer w-[20px]"  onClick={() => handleRemoveFromWishlist(item.id)}>
                  <img src={Trash}  className='md:h-8 h-6' />  
                    {/* <FaTrash className='h-' /> */}
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
