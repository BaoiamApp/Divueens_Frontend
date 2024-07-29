import React, { useState, useEffect, useRef, useContext } from "react";
import {
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiTrendingUp,
} from "react-icons/fi";
import SearchBox from "./SearchBox";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../Auth/Auth";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
// import { Divueens } from "../../../assets/assets";
import navItemData from "./NavDropDownItems";
import SearchBoxMob from "./SearchBoxMob";
import { CartContext } from "../../../context/CartContext";
import Divueens from "../../../assets/Divueens3.jpg";

const Navbar1 = ({ navItemText }) => {
  const { numCartItem } = useContext(CartContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [displayOnScroll, setDisplayOnScroll] = useState("");
  const mainNavItems = [
    { title: "Categories", url: "/products" },
    { title: "Top Brands", url: "/top-catagories" },
    // "Div Fashion",
    { title: "Beauty Trends", url: "/blogs" },
    { title: "Glow Guide", url: "/virtual-try-on" },
    { title: "Offers", url: "/special-offers" },
  ];
  const subNavItems = [
    "Face care",
    "Skin care",
    "Hair care",
    "MakeUp",
    "Body care",
    "Fragrance",
    "Combos",
    "Natural",
    "Health & Wellness",
  ];

  useEffect(
    () =>
      window.addEventListener("scroll", () =>
        setDisplayOnScroll(
          scrollY >= 50 ? "shadow-md border-b border-rose-200 bg-white" : ""
        )
      ),
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <>
      <Auth show={displayAuth} changeView={setDisplayAuth} />
      <div
        className={`flex text-center md:py-1 lg:py-3 bg-white lg:justify-center justify-between md:gap-x-5 items-center sticky top-0 z-40 w-full ${displayOnScroll}`}
      >
        <div className="w-fit pl-6 md:pl-10 lg:pl-0">
          {/* <Link to="/"> */}
          {/* <img
              className="w-full h-[70px] md:h-[90px] lg:h-[100px] py-1 md:py-2"
              src={Divueens}
              alt="Description"
            /> */}
          <img className="w-[100px] h-[60px] md:w-[120px] md:h-[80px] object-cover" src={Divueens} alt="Description" />

          {/* </Link> */}
        </div>
        <div className="flex flex-col items-center pl-4">
          <div className="flex flex-row-reverse items-center w-full">
            <div className="w-full flex lg:justify-start justify-end items-center">
              <div className="w-[70%] mr-6 lg:hidden">
                <SearchBoxMob />
              </div>
              <div className="hidden lg:w-full lg:block">
                <SearchBox />
              </div>

              <div className="hidden lg:flex space-x-5 ml-4 text-slate-500">
                <NavLink to="/addtocart">
                  <FiShoppingCart
                    size={18}
                    className="relative hover:text-rose-800"
                  />
                  {numCartItem > 0 && (
                    <div className="absolute rounded-full top-0 right-0 w-[20px] h-[20px] bg-rose-600 text-white flex items-center justify-center text-xs">
                      {numCartItem}
                    </div>
                  )}
                </NavLink>
                <NavLink to="/wishlist">
                    <FiHeart size={18} className="md:hover:text-rose-800" />
                </NavLink>
                {/* <NavLink to='/profile'> */}

                <FiUser
                  size={18}
                  className="hover:text-rose-800"
                  onClick={() => setDisplayAuth(true)}
                />

                {/* </NavLink> */}
              </div>

              <div className="pr-6 lg:hidden">
                <button onClick={toggleMenu} className="text-gray-800">
                  <FaBars size={22} />
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-start gap-x-4 mr-[2%] text-sm font-medium text-black tracking-wide">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="text-nowrap hover:underline-offset-4 hover:underline"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            {isOpen && (
              <div className="absolute max-h-screen h-screen top-0 bg-white/95 right-0 w-[70%] md:w-[45%] z-50 shadow-lg shadow-slate-600 py-4 pl-4 transition-[transform] duration-[0.5s] ease-in-out lg:hidden">
                <div>
                  <div className="flex items-center justify-between pr-4">
                    <button
                      type="button"
                      className="btn-close text-rose-400 font-medium text-4xl cursor-pointer"
                      onClick={toggleMenu}
                    >
                      &times;
                    </button>

                    <div className="w-full flex space-x-4 justify-center my-2">
                      <FiShoppingCart className="w-8 h-8 p-2 text-lg border border-rose-400 text-rose-400 rounded-full" />
                      <FiHeart className="w-8 h-8 p-2 text-lg border border-rose-400 text-rose-400 rounded-full" />
                      <FiUser
                        onClick={() => setDisplayAuth(true)}
                        className="w-8 h-8 p-2 text-lg border border-rose-400 text-rose-400 rounded-full"
                      />
                    </div>
                  </div>
                  {/* <div className="relative my-4 pr-4"><SearchBox /></div> */}
                  <div className="flex py-1 text-sm flex-col w-full gap-4 overflow-auto max-h-screen scroll-smooth">
                    <Link
                      to="/"
                      className="px-4 py-2 text-gray-800 shadow-md hover:bg-rose-400 hover:text-white rounded-s-full"
                    >
                      Home
                    </Link>
                    {mainNavItems.map((item, index) => (
                      <NavLink
                        to={item.url}
                        key={index}
                        className="px-4 py-2 text-gray-800 shadow-md hover:bg-rose-400 hover:text-white rounded-s-full"
                      >
                        {item.title}
                      </NavLink>
                    ))}
                    {/* -------------------------- Remove line below after this ------------------------------- */}
                    <Link
                      to="/membership"
                      className="px-4 py-2 text-gray-800 shadow-md hover:bg-rose-400 hover:text-white rounded-s-full"
                    >
                      Membership
                    </Link>
                    <Link
                      to="/virtual-try-on"
                      className="px-4 py-2 text-gray-800 shadow-md hover:bg-rose-400 hover:text-white rounded-s-full"
                    >
                      Virtual Try On
                    </Link>
                    {/* <div className="flex text-sm flex-col w-full gap-4 ">
                    {Object.keys(navItemData).map((category, index) => {
                      const categoryData = navItemData[category];
                      if (!categoryData) return null;

                      return (
                        <div className="flex-shrink-0 " key={index}>
                          <button
                            className="hover:underline text-sm font-medium flex items-center justify-between px-2 text-slate-500 hover:text-rose-800 relative"
                            onClick={() => {
                              setOpenDropdown(!openDropdown)
                              setHoveredCategory(category);
                            }}
                          >
                            {category} <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out ${openDropdown && hoveredCategory === category && 'rotate-180'}`} />
                          </button>
                          {openDropdown && hoveredCategory === category && (
                            <div onMouseEnter={() => {
                              setOpenDropdown(true);
                              setHoveredCategory(category);
                            }} className="w-full h-auto px-8 py-4 rounded-[20px] bg-white/50 shadow-xl l-[30px] z-30 navItemMultipage">
                              {categoryData.map((subcategory) => {
                                const subcategoryLabel = Object.keys(subcategory)[0];
                                const subcategoryItems = subcategory[subcategoryLabel];
                                if (!subcategoryItems) return null;

                                return (
                                  <div className="w-full" key={subcategoryLabel}>
                                    <h3 className="text-black font-semibold text-sm leading-tight py-2 tracking-tight">{subcategoryLabel}</h3>
                                    <ul>
                                      {subcategoryItems.map((item) => (
                                        <li className="text-slate-500 text-[0.8rem] hover:text-rose-800" key={item}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div> */}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full mx-auto hidden lg:flex">
            <div className="w-full pt-3">
              <ul className="w-full flex gap-4 lg:justify-start tracking-wider">
                {Object.keys(navItemData).map((category, index) => {
                  const categoryData = navItemData[category];
                  if (!categoryData) return null;

                  return (
                    <li className="flex-shrink-0 " key={index}>
                      <Link
                        className="text-xs text-slate-800 hover:text-rose-800 relative"
                        onMouseEnter={() => {
                          setIsDrop(true);
                          setHoveredCategory(category);
                        }}
                        onMouseLeave={() => {
                          setIsDrop(false);
                          setHoveredCategory(null);
                        }}
                      >
                        {category}
                        {isDrop && hoveredCategory === category && (
                          <div
                            onMouseEnter={() => {
                              setIsDrop(true);
                              setHoveredCategory(category);
                            }}
                            className={
                              "w-[30rem] h-auto px-8 py-4 -left-8 absolute rounded-b-[20px] top-4 bg-white shadow-xl l-[30px] z-30 navItemMultipage grid grid-cols-3 gap-5"
                            }
                          >
                            {categoryData.map((subcategory) => {
                              const subcategoryLabel =
                                Object.keys(subcategory)[0];
                              const subcategoryItems =
                                subcategory[subcategoryLabel];
                              if (!subcategoryItems) return null;
                              console.log(categoryData);

                              return (
                                <div className="w-full" key={subcategoryLabel}>
                                  <h3 className="text-black font-semibold text-sm leading-tight py-2 tracking-tight">
                                    {subcategoryLabel}
                                  </h3>
                                  <ul>
                                    {subcategoryItems.map((item) => (
                                      // <li className="text-slate-500 text-[0.8rem] hover:text-rose-800" key={item}>{item}</li>
                                      <Link
                                        to={`${category}/${item}`}
                                        className="text-slate-500 block text-[0.8rem] hover:text-rose-800"
                                        key={item}
                                      >
                                        {item}
                                      </Link>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </Link>
                    </li>
                  );
                })}

                {/* --------------------- Remove line below after this --------------------------- */}
                {/* <Link to="/membership"
                className="hover:underline text-sm font-medium flex items-center justify-between px-2 text-slate-500 hover:text-rose-800 relative"
              >Membership</Link>
              <Link to="/virtual-try-on"
                className="hover:underline text-sm font-medium flex items-center justify-between px-2 text-slate-500 hover:text-rose-800 relative"
              >Virtual TryOn</Link> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
