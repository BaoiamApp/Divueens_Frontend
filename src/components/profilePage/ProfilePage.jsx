// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
// eslint-disable-next-line no-unused-vars
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
// import MyProfileSection from './MyProfileSection';
import MyProfilePage from './GauravAndMahak/MyProfilePage';
// import AddressCard from './GauravAndMahak/AddressPage';
import Wishlist from './Arpana/Wishlist';
import MyOrder from './Jatin/myOrder';
import LogoutPage from './GauravAndMahak/LogOut';

function ProfilePage() {
    const [isTabActive, setIsTabActive] = useState('');

    const handleTabActiveState = (tab) => {
        setIsTabActive(tab);
    }

    const renderContent = (tab) => {
        switch (tab) {
            case 'myprofile':
                return <MyProfilePage />;
            case 'wishlist':
                return <Wishlist />;
            case 'myorders':
                return <MyOrder />;
            case 'logout':
                return <LogoutPage />;
            default:
                return <MyProfilePage />;
        }
    }

    return (
        <div className='bg-rose-100 flex my-10 h-auto'>
            <div className='flex flex-col justify-center items-start bg-rose-100 text-center px-3 gap-6 min-w-10 sm:w-[20%] h-[100%] ml-4'>
  
                {/* sideNavbar */}
                <h2 className='hidden sm:block sm:font-extrabold sm:p-3 md:p-5 md:text-[20px]'>My Account</h2>
                <div
                    onClick={() => handleTabActiveState("myprofile")}
                    className=' flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer'>
                    <div className='text-[20px] sm:text-[30px]  text-rose-900 hover:text-rose-700'><CgProfile /></div>
                    <h3 className='hidden md:block'>My Profile</h3>
                </div>
                {/* <div
                    onClick={() => handleTabActiveState("address")}
                    className='flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer'>
                    <div className='text-[20px] sm:text-[30px] '><IoLocationOutline /></div>
                    <h3 className='hidden md:block'>Address</h3>
                </div> */}
                <div
                    onClick={() => handleTabActiveState("wishlist")}
                    className='flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer'>
                    <div className='text-[20px] sm:text-[30px] text-rose-900 hover:text-rose-700'><FaRegHeart /></div>
                    <h3 className='hidden md:block'>Wishlist</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("myorders")}
                    className='flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer'>
                    <div className='text-[20px] sm:text-[30px] text-rose-900 hover:text-rose-700'><RiShoppingCartLine /></div>
                    <h3 className='hidden md:block'>My Orders</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("logout")}
                    className='flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer'>
                    <div className='text-[20px] sm:text-[30px]  text-rose-900 hover:text-rose-700'><MdLogout /></div>
                    <h3 className='hidden md:block'>Logout</h3>
                </div>
            </div>
            <div className='w-[80%] h-[full] bg-white'>
                {/* Profile Design */}
                {renderContent(isTabActive)}
            </div>
        </div>
    );
}

export default ProfilePage;
