import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom'
import { MdFilterList } from 'react-icons/md';
import Filter from '../components/ProductList/Filter'
import CardItem from '../components/ProductList/CardItem'
import productDetails from '../components/ProductList/ProductListItemData';

const ProductList = () => {

    const [openDropdown, setOpenDropdown] = useState(null);
    const handleDropdownClick = (dropdownId) => {
        if (openDropdown === dropdownId) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdownId);
        }
    };

    const filterItemsCategory = (cat) => {
        const newItems = productDetails.filter((newval) => newval.category === cat)
        setItem(newItems)
    }

    const checkDName = (p, dname) => {
        if (dname === 'Review') {
            const newItems = productDetails.filter((newval) => newval.rating == p)
            setItem(newItems)
        }
        else if (dname === 'Price') {
            const newItems = productDetails.filter((newval) => newval.price == p)
            setItem(newItems)
        }
        else if (dname === 'Color') {
            const newItems = productDetails.filter((newval) => newval.shade == p)
            setItem(newItems)
        }
        else if (dname === 'Material') {
            const newItems = productDetails.filter((newval) => newval.material == p)
            setItem(newItems)
        }
        else {
            const newItems = productDetails.filter((newval) => newval.discount == p)
            setItem(newItems)
        }
    }
    const [item, setItem] = useState(productDetails)
    const [isCategory, setcategory] = useState(false);
    const [isPrice, setPrice] = useState(false);
    const [isReview, setReview] = useState(false);
    const [isColor, setColor] = useState(false);
    const [isMaterial, setMaterial] = useState(false);
    const [isOffer, setOffer] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth > 1024);

    const [isPrices, setPrices] = useState(false);

    const handleCate = () => {
        setcategory(!isCategory)
    }
    const handlePrice = () => {
        setPrice(!isPrice)
    }
    const handleReview = () => {
        setReview(!isReview)
    }
    const handleColor = () => {
        setColor(!isColor)
    }
    const handleMaterial = () => {
        setMaterial(!isMaterial)
    }
    const handleOffer = () => {
        setOffer(!isOffer)
    }

    const handlePrices = () => {
        setPrices(!isPrices)
    }

    const changeData = (val) => {
        setItem(val)
    }


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    const dropdown = [
        {
            id: 1,
            name: 'Category',
            func: handleCate,
            isOpen: isCategory,
            options: ['Lipstick', 'Eyeliner', 'Kajal', 'Mascara', 'Foundation']
        },
        {
            id: 2,
            name: 'Price',
            func: handlePrice,
            isOpen: isPrice,
            options: [`₹${400}`, `₹${500}`, `₹${600}`]
        },
        {
            id: 3,
            name: 'Review',
            func: handleReview,
            isOpen: isReview,
            options: ['5', '4', '3', '2', '1']
        },
        {
            id: 4,
            name: 'Color',
            func: handleColor,
            isOpen: isColor,
            options: ['Pink', 'Rose', 'DarkPink']
        },
        {
            id: 5,
            name: 'Material',
            func: handleMaterial,
            isOpen: isMaterial,
            options: ['Soft', 'Hard']
        },
        {
            id: 6,
            name: 'Offer',
            func: handleOffer,
            isOpen: isOffer,
            options: ['10% OFF', '20% OFF']
        },

    ]

    return (
        <>
            <div className='flex flex-col items-center w-full h-full my-10'>
                {/* Home > Skin */}
                <div className='flex flex-col gap-8 w-full px-5 lg:mb-4'>
                    <div className='flex flex-wrap items-center justify-between'>
                        <ol className="inline-flex items-center gap-3">
                            <li className='inline-flex items-center'>
                                <Link to={'/'} className='inline-flex items-center tracking-tighter text-[0.7rem] md:text-[1rem] font-medium'>
                                    Home
                                </Link>
                            </li>
                            <IoIosArrowForward size={15} />
                            <li className='inline-flex items-center'>
                                <Link to={'/products'} className='inline-flex items-center tracking-tighter text-[0.7rem] md:text-[1rem] font-medium'>
                                    Skin care
                                </Link>
                            </li>
                            <div className='flex items-center gap-2 lg:hidden'>
                                <IoIosArrowForward size={15} />
                                <span className="tracking-tighter text-[0.7rem] md:text-[1rem] font-medium">MakeUp</span>
                                <IoIosArrowForward size={15} />
                                <span className="tracking-tighter text-[0.7rem] md:text-[1rem] font-medium">Lipstick</span>
                            </div>
                        </ol>
                        <button
                            className="text-[0.9rem] flex items-center justify-between gap-2 px-2 text-left rounded-full border md:px-4 md:py-1 lg:hidden"
                            onClick={toggleMenu}
                        >
                            Filters
                            <MdFilterList size={15} />
                        </button>

                        {showMenu && (
                            <div
                                className="fixed bottom-0 left-0 overflow-auto w-full h-[29rem] bg-rose-200 shadow-md z-[1001]"
                            >
                                <div className="flex justify-between h-16 items-center px-4 bg-rose-200 text-rose-700 sticky top-0 left-0 right-0 z-50">
                                    <h5 className="text-lg font-semibold">Filters</h5>
                                    <button type="button" className="text-[3rem] cursor-pointer" onClick={toggleMenu}>&times;</button>
                                </div>

                                <div className="navbar-nav p-4">
                                    <div className='grid grid-cols-2 gap-2'>
                                        {dropdown.map((d) => {
                                            return <div key={d.id} className='flex items-center relative group'>
                                                <button onClick={() => { handleDropdownClick(d.id), d.func }} className='border-rose-600 border text-rose-700 px-4 py-2 w-full rounded-lg flex items-center justify-between font-medium text-[15px]' >
                                                    {d.name}

                                                    <IoIosArrowDown className={`transition-all duration-[0.3s] ease-in-out ${openDropdown === d.id ? 'rotate-180' : 'rotate-0'}`} size={20} />

                                                </button>

                                                {openDropdown === d.id && (
                                                    <div className="absolute top-10 left-0 rounded-md shadow-lg bg-[#fff] w-48 z-50">
                                                        {/* when clicked on any option the menu will be closed */}
                                                        <ul className="py-2 text-sm" onClick={() => setShowMenu(false)}>
                                                            {d.options.map((p, index) => {
                                                                return <li key={index} className="px-4 py-2 hover:bg-gray-100" onClick={() => d.name === 'Category' ? filterItemsCategory(p) : checkDName(p, d.name)}>
                                                                    <Link
                                                                        href={''}
                                                                        className="text-gray-800  hover:text-gray-900"
                                                                    >
                                                                        {p}
                                                                    </Link>
                                                                </li>
                                                            })}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        })}

                                    </div>
                                    <Filter itemData={productDetails} changedFunction={changeData} small={true} />
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Short Filter */}
                    <div className='hidden lg:flex lg:flex-row flex-col items-center justify-between '>
                        <div className='flex items-center gap-2'>
                            {dropdown.map((d) => {
                                return <div key={d.id} className='flex items-center relative'>
                                    <button onClick={() => { handleDropdownClick(d.id), d.func }} className='bg-[#d4d4d4] px-4 py-2 rounded-full text-sm flex items-center gap-2 font-medium' >
                                        {d.name}  <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out ${openDropdown === d.id ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>

                                    {openDropdown === d.id && (
                                        <div className="absolute top-10 left-0 rounded-md shadow-lg bg-[#fff] w-48 z-50">
                                            <ul className="py-2 text-sm">
                                                {d.options.map((p, index) => {
                                                    return <li key={index} className="px-4 py-2 hover:bg-gray-100" onClick={() => d.name === 'Category' ? filterItemsCategory(p) : checkDName(p, d.name)}>

                                                        <Link
                                                            href={''}
                                                            className="text-gray-800  hover:text-gray-900"
                                                        >
                                                            {p}
                                                        </Link>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            })}

                        </div>
                        {/* Price Sorting */}
                        {/* <div className='relative'>
                            <button onClick={handlePrices} className='border border-[#d4d4d4] px-4 py-2 rounded-full flex items-center gap-2'>
                                <span>Prices</span> <IoIosArrowDown size={15} />
                            </button>

                            {isPrices && (
                                <div className="absolute top-10 left-0 rounded-md shadow-lg bg-[#fff] w-48 z-50">
                                    <ul className="py-2 text-sm">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            <Link
                                                href={''}
                                                className="text-gray-800  hover:text-gray-900"
                                            >
                                                p
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>

                {/* Filters and Cards */}
                <div className='flex flex-col w-full lg:flex-row '>
                    {/* Filters */}
                    <div className='hidden lg:inline-flex'>
                        <Filter itemData={productDetails} changedFunction={changeData} />
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col items-center w-full px-10 py-5'>
                        <div className="makeup flex flex-col gap-3 md:flex-row justify-between w-full">
                            <div className='hidden lg:flex items-center gap-2'>
                                <span className="a font-medium text-[1rem] text-gray-600">MakeUp</span>
                                <IoIosArrowForward size={22} />
                                <span className="aa font-semibold text-[1rem] text-black">Lipstick</span>
                            </div>
                            <div className="prodline flex font-normal items-center gap-5">
                                <div className="show text-[0.7rem] md:text-[0.9rem] text-gray-600">Showing 1-10 of 100 Products</div>
                                <div className="sortby text-[0.7rem] md:text-[0.9rem]">
                                    <label for="sort" className='text-gray-600'>Sort by: </label>
                                    <select className="select bg-transparent border-none text-[0.7rem] md:text-[0.9rem]" name="products" id="sort">
                                        <option defaultValue={'a'} selected>Most popular</option>
                                        <option value="b">Ascending A to Z</option>
                                        <option value="c">Descending Z to A</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Cards*/}
                        <CardItem item={item} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList