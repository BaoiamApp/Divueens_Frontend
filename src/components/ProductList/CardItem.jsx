import React, { useContext, useEffect, useState } from 'react'
// import { Lipstick } from '../../../assets/assets'
import productDetails from './ProductListItemData'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// import AddCart from './AddCart';
import {CartContext} from '../../context/CartContext';


const CardItem = ({ item }) => {
    const {addCartItemNumber , subCartItemNumber} = useContext(CartContext)
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil(item.length / 12)
    const [likedCards, setLikedCards] = useState({});
    const [cardItem, setCardItem] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("Item-Id")) || [];
        setCardItem(storedItems);

    }, []);

    const addingItemToCart = (ItemId) => {
        // addCartItemNumber()
        let updatedItems;
        if (cardItem.includes(ItemId)) {
            updatedItems = cardItem.filter(id => id !== ItemId);
        } else {
            updatedItems = [...cardItem, ItemId];
        }
        setCardItem(updatedItems);
        localStorage.setItem("Item-Id", JSON.stringify(updatedItems));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleLike = (id) => {
        
        let updatedWishlist;
        if (likedCards[id]) {
            updatedWishlist = wishlist.filter(item => item !== id);
        } else {
            updatedWishlist = [...wishlist, id];
        }
        setWishlist(updatedWishlist);
        setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const renderImages = () => {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        const currentPageImages = item.slice(startIndex, endIndex);
        return (
            <div className='grid gap-x-4 gap-y-2 grid-cols-[repeat(2,_0.6fr)] lg:gap-y-12 md:gap-x-14 xl:gap-x-8 md:grid-cols-[repeat(3,_0.6fr)] xl:grid-cols-[repeat(4,_0.8fr)]'>
                {currentPageImages.map((p) => {
                    const isInCart = (cardItem).includes(p.id);
                    console.log(isInCart)
                    return <div key={p.id} className=''>
                        <Link to={`/product-description/${p.id}`} className="group relative mb-2 block h-60 md:h-72 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                            <img src={p.image} alt='image' className="h-full w-full object-center object-cover transition duration-200 group-hover:scale-110" />

                            <div className="absolute left-0 top-0 right-0 px-3 py-1.5 flex items-center justify-between text-white">
                                <p className="text-xs text-rose-600 bg-white px-2 py-1 rounded-full" > {p.discount}% OFF </p>
                                <div className='text-xs text-rose-600 bg-white p-2 rounded-full md:text-sm'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLike(p.id);
                                    }}>
                                    {likedCards[p.id] ? <FaHeart /> : <FaRegHeart />}
                                </div>
                            </div>
                        </Link>

                        <div className='relative h-36 lg:px-4 md:h-32'>
                            <Link to="/product-description" className="hover:text-gray-800 tracking-tighter mb-1 transition duration-100 font-medium text-[0.8rem] lg:text-[1rem]">{p.name} - {p.category} - {p.shade} - {p.material} - {p.brands}</Link>
                            <div className='flex items-center justify-start lg:mt-1'>
                                {/* <div className="text-[#ffa200] flex items-center">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className='ml-2 text-[0.8rem] sm:text-xs tracking-tighter'>{p.rating} / <span className='text-[#00000077]'>5</span></p> */}
                                <p className='mr-2 text-sm tracking-wider'>{p.rating}/5</p>
                                <div className="text-[#ffa200] text-sm flex items-center">
                                    <FaStar />
                                </div>
                            </div>
                            <div className="flex items-end justify-between  absolute bottom-6 md:bottom-2 sm:gap-2 lg:-bottom-4 xl:-bottom-0 left-0 right-0 xl:px-4">
                                <span className="font-[530] text-[0.8rem] sm:text-[1rem] md:text-base lg:text-xl"><span>₹</span>{p.price}/-</span>
                                <button className={`${isInCart ? 'bg-black' : 'bg-rose-700'} text-white md:px-4 hover:bg-rose-600 md:w-fit rounded-full text-[0.7rem] sm:text-[0.8rem] px-4 py-1 md:p-2`} onClick={() => {
                                    if (isInCart) {
                                        subCartItemNumber()
                                    addingItemToCart(p.id)}
                                    else{
                                        addCartItemNumber()
                                        addingItemToCart(p.id)
                                    }}}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        );
    };


    return (
        <div className='w-full m-4'>
            {/* <div className='absolute top-0 right-0 z-20'>
                <AddCart cartItems={cardItem} setCartItems={setCardItem} />
            </div> */}
            {renderImages()}
            <div className="flex my-10 items-center justify-between">

                <button className="border p-2 px-12 border-gray-400 rounded-xl flex max-sm:px-4" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Previous
                </button>

                <p className="text-[15px] sm:text-[20px] mt-1">
                    {currentPage} of {lastPage}
                </p>

                <button className="border p-2 px-12 border-gray-400 rounded-xl text-base max-sm:px-4 flex" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === lastPage}>
                    Next
                    <svg className="h-6 w-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default CardItem