import React, { useState } from "react";
import orderData from "./orderData2";
import rightarrow from "../../../assets/myOrders/right-arrow.png"
import Delete from "../../../assets/myOrders/bin.png"
export default function MyOrder2() {
  const [activeButton, setActiveButton] = useState("All");
  const [filteredOrders, setFilteredOrders] = useState(orderData);

  const handleButtonClick = (value) => {
    setActiveButton(value);
    if (value === "All") {
      setFilteredOrders(orderData);
    } else {
      const filteredData = orderData.filter((order) => order.status === value);
      setFilteredOrders(filteredData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="mb-6">
        <ol className="flex flex-wrap space-x-2 text-black font-bold">
          <li>Home</li>
          <li>&gt;</li>
          <li>My Account</li>
          <li>&gt;</li>
          <li>My Orders</li>
        </ol>
      </nav>
      <div className="flex flex-wrap mb-6">
        <div className="flex flex-wrap space-x-4 mb-4 lg:mb-0">
          <button
            onClick={() => handleButtonClick("All")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "All" ? "bg-rose-200" : "hover:bg-rose-300"}`}
          >
            All
          </button>
          <button
            onClick={() => handleButtonClick("In Progress")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "In Progress" ? "bg-rose-200" : "hover:bg-rose-300"}`}
          >
            In Progress
          </button>
          <button
            onClick={() => handleButtonClick("Delivered")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "Delivered" ? "bg-rose-200" : "hover:bg-rose-300"}`}
          >
            Delivered
          </button>
          <button
            onClick={() => handleButtonClick("Cancelled")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "Cancelled" ? "bg-rose-200" : "hover:bg-rose-300"}`}
          >
            Cancelled
          </button>
        </div>
        <div className="ml-auto flex space-x-4 items-center">
          <button className="py-2.5 px-5 text-sm font-medium text-white bg-rose-400 rounded-full border border-black hover:bg-rose-300 flex items-center">
            <span>Track Order</span>
          </button>
        </div>
      </div>
      <div className="space-y-6">
        {filteredOrders.map((order, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-md p-8"
          >
            <img
              className="absolute top-2 right-4 w-[20px] h-[20px] cursor-pointer"
              src={Delete}
              alt="Bin Icon"
            />
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src={order.imageUrl}
                alt="Product Image"
                className="w-28 h-28 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
              />
              <div className="flex-1">
                <div className="text-gray-500 mb-2">
                  Order ID: {order.orderId}
                </div>
                <div className="text-black font-semibold text-xs mb-1">
                  {order.description}
                </div>
                <div
                  className={`text-${
                    order.rating >= 4 ? "yellow" : "gray"
                  }-500 flex items-center`}
                >
                  <div className="text-black text-xs font-semibold mr-1">
                    Rating:
                  </div>
                  {"★".repeat(order.rating)}
                  {"☆".repeat(5 - order.rating)}
                </div>
                <div className="font-semibold">{order.price}</div>
              </div>
              <div className="absolute left-[30%] top-[95%] sm:left-[40%] sm:top-[80%] lg:left-[50%] lg:top-[50%] transform -translate-x-[-50%] -translate-y-1/2">
                <div className="font-medium text-[10px] sm:text-xs lg:text-base text-gray-400">
                  Status
                </div>
                <div className="font-bold text-[10px] sm:text-sm lg:text-lg">
                  {order.status}
                </div>
              </div>
              <div className="absolute left-[25%] top-[86%] sm:left-[60%] sm:top-[80%] lg:left-[70%] lg:top-[50%] transform -translate-x-[-50%] -translate-y-1/2">
                <div className="font-medium text-[8px] sm:text-xs lg:text-sm text-gray-400">
                  {order.datetitle}
                </div>
                <div className="font-bold text-[10px] sm:text-sm lg:text-lg">
                  {order.date}
                </div>
              </div>
            </div>
            <img
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              src={rightarrow}
              alt="Right Arrow Icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
