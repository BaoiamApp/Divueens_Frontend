import React from 'react';
import { useState } from 'react';
import data from './ProductListItemData'
import { BiReset } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdFilterList } from 'react-icons/md';


const Filter = ({ itemData, changedFunction, small }) => {

    const [item, setItem] = useState(itemData)
    const menuItem = [... new Set(itemData.map(val => val.category))]
    const menuColor = [... new Set(itemData.map(val => val.color))]
    const menuDressStyle = [... new Set(itemData.map(val => val.dresStyle))]
    const [selectedColor, setSelectedColor] = useState(null);

    const [selectedItem, setSelectedItem] = useState([])
    let arrValue = []
    let newItems = itemData

    const AllItemsCategory = () => {
        changedFunction(newItems);
        setSelectedColor(null);
        setSelectedItem([]);
    }

    const filterItems = (userChoiceOption) => {
        arrValue = selectedItem.push(userChoiceOption)
    }

    const filterSubmitbtn = () => {
        setSelectedItem(arrValue)
        let newItems = itemData.filter((newval) => {
            return selectedItem.includes(newval.category) && selectedItem.includes(newval.dresStyle) && selectedItem.includes(newval.color)
        })
        setItem(newItems)
        changedFunction(newItems)
    }
    const menuBrands = [... new Set(data.map(val => val.brands))]

    const [showPrice, setShowPrice] = useState(false);
    const priceButtonClick = () => {
        setShowPrice(!showPrice);
    };

    const [priceRange, setPriceRange] = useState([200, 0, 1000]);
    const handlePriceChange = (e) => {
        const minValue = e.target.min;
        const maxValue = e.target.max;
        const currentValue = e.target.value;
        setPriceRange([minValue, currentValue, maxValue]);
    };

    const [showShades, setShowShades] = useState(false);
    const shadesButtonClick = () => {
        setShowShades(!showShades);
    };

    const [showDressStyle, setShowDressStyle] = useState(false);
    const dressStyleButtonClick = () => {
        setShowDressStyle(!showDressStyle);
    };
    const [showBrands, setShowBrands] = useState(false);
    const brandsButtonClick = () => {
        setShowBrands(!showBrands);
    };


    return (
        <>
            {small ? (
                <>
                    {/* Filters Category Small device */}
                    <div className="w-full mt-5 flex flex-col gap-2">
                        <ul className="text-[15px] leading-[30px] text-rose-700 font-medium">
                            <label htmlFor='all'><li onClick={() => AllItemsCategory()} className="flex justify-between items-center cursor-pointer text-[0.9rem]">All <BiReset size={18} /> </li></label>
                            {
                                menuItem.map((val, index) =>
                                    <label htmlFor={`categ-${index}`}><li onClick={() => filterItems(val)} className="flex justify-between items-center my-2 text-[0.9rem]"><p>{val}</p> <input className='w-4 h-4' type="checkbox" id={`categ-${index}`} name={`categ-${index}`} /></li></label>
                                )
                            }
                        </ul>

                        <div className="w-full flex flex-col">
                            {/* Price Heading */}
                            <div className="flex justify-between items-center" onClick={priceButtonClick}>
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Price</p>
                                <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showPrice ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {/* Price Range Slider */}
                            {showPrice && (
                                <div className="relative w-full mt-3">
                                    <input
                                        type="range"
                                        className='w-full'
                                        min={priceRange[0]}
                                        max={priceRange[2]}
                                        value={priceRange[1]}
                                        onChange={handlePriceChange} />
                                    <div className='flex items-center justify-between'>
                                        <p className="text-sm text-gray-600">₹{priceRange[0]}</p> -
                                        <p className='text-sm text-gray-600'>₹{priceRange[1]}</p> -
                                        <p className='text-sm text-gray-600'>₹{priceRange[2]}</p>
                                    </div>

                                </div>)}
                        </div>

                        {/* Shades */}
                        <div className='w-full flex flex-col'>
                            <div className="flex justify-between items-center" onClick={shadesButtonClick}>
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Shades</p> <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showShades ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {/* Shades Category */}
                            {showShades && (
                                <div className='w-full flex flex-wrap gap-6 border-2 px-4 py-2 rounded-lg'>
                                    {
                                        menuColor.map(val =>
                                            <div onClick={() => {
                                                setSelectedColor(val);
                                                filterItems(val);
                                            }} className={` h-[30px] w-[30px] ${val} rounded-full cursor-pointer border-2 border-transparent ${selectedColor === val ? 'border-x-black scale-[1.2] transition-all' : ''}`}></div>
                                        )}
                                </div>
                            )}
                        </div>

                        {/* Dress Styles */}
                        <div className='w-full flex flex-col'>
                            {/* Dress Styles Heading */}
                            <div className="flex justify-between items-center" onClick={dressStyleButtonClick}>
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Dress Styles</p>
                                <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showDressStyle ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {/* Dress Styles Category */}
                            {showDressStyle && (
                                <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                    {
                                        menuDressStyle.map((val, index) =>
                                            <li className="flex justify-between items-center text-[0.9rem] my-1">
                                                <label htmlFor={`categd-${index}`}>
                                                    {val}
                                                </label>
                                                <input onClick={() => filterItems(val)} type="checkbox" className='w-4 h-4' id={`categd-${index}`} name={`categd-${index}`} />
                                            </li>
                                        )}

                                </div>)}
                        </div>

                        {/* Brands */}
                        <div className="w-full flex flex-col">
                            <div className="">
                                {/* Brands Heading */}
                                <div className="flex justify-between items-center" onClick={brandsButtonClick} >
                                    <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Brands</p>
                                    <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showBrands ? 'rotate-180' : 'rotate-0'}`} />
                                </div>
                                {/* Brands Category */}
                                {showBrands && (
                                    <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                        {
                                            menuBrands.map((val, index) =>
                                                <li className="flex justify-between items-center text-[0.9rem] my-1">
                                                    <label htmlFor={`categb-${index}`}>
                                                        {val}
                                                    </label>
                                                    <input onClick={() => filterItems(val)} type="checkbox" className='w-4 h-4' id={`categb-${index}`} name={`categb-${index}`} />
                                                </li>
                                            )}

                                    </div>)}
                            </div>
                        </div>

                        <button onClick={() => filterSubmitbtn()} className='applyFilter mx-auto text-center hover:bg-rose-700 hover:text-white py-2 px-5 rounded-full bg-transparent border-[2px] border-rose-700 text-rose-700 font-semibold trasnsition-all duration-200'>Apply Filter</button>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center m-6 h-fit w-[25%] rounded-xl border-[2px] border-gray-200 px-6 py-9 lg:min-w-56 ">
                    {/* Filters */}
                    <div className="w-full flex flex-col">
                        {/* Filters Heading */}
                        <div className="flex justify-between items-center w-full">
                            <p className="text-[1rem] font-semibold text-black">Filters</p>
                            <MdFilterList size={20} />
                        </div>
                        <hr className="my-4 w-full" />
                        {/* Filters Category */}
                        <div className="w-full">
                            <ul className="text-[15px] leading-[30px] 
                    text-gray-600">
                                <label htmlFor='all'><li onClick={() => AllItemsCategory()} className="flex justify-between items-center text-[0.9rem] cursor-pointer">All <BiReset size={20} /> </li></label>
                                {
                                    menuItem.map((val, index) =>
                                        <li className="flex justify-between items-center text-[0.9rem] my-1">
                                            <label htmlFor={`categ-${index}`}>
                                                {val}
                                            </label>
                                            <input onClick={() => filterItems(val)} type="checkbox" className='w-4 h-4' id={`categ-${index}`} name={`categ-${index}`} />
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <hr className="my-4 w-full" />
                    </div>
                    {/* Price */}
                    <div className="w-full flex flex-col">
                        {/* Price Heading */}
                        <div className="flex justify-between items-center" onClick={priceButtonClick}>
                            <p className="font-semibold text-[0.9rem]">Price</p>
                            <IoIosArrowDown size={18} className={`transition-all duration-[0.3s] ease-in-out ${showPrice ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        {/* Price Range Slider */}
                        {showPrice && (
                            <div className="relative w-full mt-3">
                                <input
                                    type="range"
                                    className='w-full'
                                    min={priceRange[0]}
                                    max={priceRange[2]}
                                    value={priceRange[1]}
                                    onChange={handlePriceChange} />
                                <div className='flex items-center justify-between'>
                                    <p className="text-xs text-gray-600">₹{priceRange[0]}</p> -
                                    <p className='text-xs text-gray-600'>₹{priceRange[1]}</p> -
                                    <p className='text-xs text-gray-600'>₹{priceRange[2]}</p>
                                </div>

                            </div>)}
                        <hr className='my-4 w-full' />
                    </div>
                    {/* Shades */}
                    <div className='w-full flex flex-col'>
                        <div className="flex justify-between items-center" onClick={shadesButtonClick}>
                            <p className="font-semibold text-[0.9rem]">Shades</p>
                            <IoIosArrowDown size={18} className={`transition-all duration-[0.3s] ease-in-out ${showShades ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        {/* Shades Category */}
                        {showShades && (
                            <div className='min-h-[100px] w-full grid grid-cols-4 gap-6 mt-4'>
                                {
                                    menuColor.map(val =>
                                        <div onClick={() => {
                                            setSelectedColor(val);
                                            filterItems(val);
                                        }} className={` h-[1.8rem] w-[1.8rem] ${val} rounded-full cursor-pointer border-2 border-transparent ${selectedColor === val ? 'border-x-black scale-[1.2] transition-all' : ''}`}></div>
                                    )}
                            </div>)}
                        <hr className='my-4 w-full' />
                    </div>
                    {/* Dress Styles */}
                    <div className='w-full flex flex-col'>
                        {/* Dress Styles Heading */}
                        <div className="flex justify-between items-center" onClick={dressStyleButtonClick}>
                            <p className="font-semibold text-[0.9rem]">Dress Styles</p>
                            <IoIosArrowDown size={18} className={`transition-all duration-[0.3s] ease-in-out ${showDressStyle ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        {/* Dress Styles Category */}
                        {showDressStyle && (
                            <div className='my-4 flex flex-col'>
                                {
                                    menuDressStyle.map((val, index) =>
                                        <li className="flex justify-between items-center text-[0.8rem] my-1">
                                            <label htmlFor={`categd-${index}`}>
                                                {val}
                                            </label>
                                            <input onClick={() => filterItems(val)} type="checkbox" className='w-4 h-4' id={`categd-${index}`} name={`categd-${index}`} />
                                        </li>
                                    )}

                            </div>)}
                        <hr className="my-4 w-full" />
                    </div>
                    {/* Brands */}
                    <div className="w-full flex flex-col">
                        <div className="">
                            {/* Brands Heading */}
                            <div className="flex justify-between items-center" onClick={brandsButtonClick} >
                                <p className="font-semibold text-[0.9rem]">Brands</p>
                                <IoIosArrowDown size={18} className={`transition-all duration-[0.3s] ease-in-out ${showBrands ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {/* Brands Category */}
                            {showBrands && (
                                <div className='my-4 flex flex-col'>
                                    {
                                        menuBrands.map((val, index) =>
                                            <li className="flex justify-between items-center text-[0.8rem] my-1">
                                                <label htmlFor={`categb-${index}`}>
                                                    {val}
                                                </label>
                                                <input onClick={() => filterItems(val)} type="checkbox" className='w-4 h-4' id={`categb-${index}`} name={`categb-${index}`} />
                                            </li>
                                        )}

                                </div>)}
                        </div>
                    </div>
                    <button onClick={() => filterSubmitbtn()} className='applyFilter my-8  hover:bg-rose-700 hover:text-white py-2 px-4 rounded-[50px] bg-white border-[2px] border-rose-700 text-rose-700 trasnsition-all duration-200 text-[0.9rem]'>Apply Filter</button>
                </div>
            )}
        </>
    );
};

export default Filter
