import React, { useEffect, useState } from 'react'
// import { Lipstick } from '../../../assets/assets'
import productDetails from './ProductListItemData'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';


const CardItem = ({ item }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil(item.length / 12)
    const [likedCards, setLikedCards] = useState({});
    const [cardItem, setCardItem] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("Item-Id")) || [];
        setCardItem(storedItems);

        // return () => {
        //   setCardItem(storedItems)
        // }
    }, []);

    const addingItemToCart = (ItemId) => {
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
        setLikedCards((prevLikedCards) => ({ ...prevLikedCards, [id]: !prevLikedCards[id] }));
    };

    const renderImages = () => {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        const currentPageImages = item.slice(startIndex, endIndex);
        return (
            <div className='grid gap-x-4 gap-y-2 grid-cols-[repeat(2,_0.6fr)] lg:gap-y-8 md:gap-x-6 md:grid-cols-[repeat(3,_0.6fr)] xl:grid-cols-[repeat(4,_0.8fr)]'>
                {currentPageImages.map((p) => {
                    const isInCart = (cardItem).includes(p.id);
                    console.log(isInCart)
                    return <div key={p.id} className=''>
                        <Link className="group relative mb-2 block h-60 md:h-64 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                            <img src={p.image} alt='image' className="h-full w-full object-center object-cover transition duration-200 group-hover:scale-110" />

                            <div className="absolute left-0 top-0 right-0 px-3 py-1.5 flex items-center justify-between text-white">
                                <p className="text-[0.7rem] sm:text-[0.8rem] text-rose-500 bg-white px-2 rounded-full lg:text-[1rem]" > {p.discount} </p>
                                <div className='text-[0.9rem] text-rose-600 bg-white p-2 rounded-full md:text-[1.3rem]' onClick={() => handleLike(p.id)}>
                                    {likedCards[p.id] ? <FaHeart /> : <FaRegHeart />}
                                </div>
                            </div>
                        </Link>

                        <div className='relative h-36 md:h-32'>
                            <Link to="/product-description" className="hover:text-gray-800 tracking-tighter mb-1 transition duration-100 font-semibold text-[0.8rem] lg:text-[1rem]">{p.name} - {p.category} - {p.shade} - {p.material} - {p.brands}</Link>
                            <div className='flex items-center lg:mt-1'>
                                <div className="text-[#ffa200] flex items-center">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className='ml-5 text-[0.8rem] sm:text-base'>{p.rating} / <span className='text-[#00000077]'>5</span></p>
                            </div>
                            <div className="flex items-end justify-between absolute bottom-6 sm:gap-2 lg:-bottom-4 xl:-bottom-2 left-0 right-0">
                                <span className="font-semibold text-[0.8rem] sm:text-[1rem] md:text-base lg:text-lg">₹ {p.price}</span>
                                <button className='bg-rose-600 text-white md:w-[120px] rounded-full text-[0.7rem] sm:text-[0.8rem] px-2 py-1 md:p-3 lg:text-base' onClick={() => addingItemToCart(p.id)}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
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