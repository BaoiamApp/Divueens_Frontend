import React, { useEffect, useState } from "react";
import orderData from "./orderData";
import MyOrder2 from "./myOrder2";

export default function MyOrder() {
  const [myOrderData, setMyOrderData] = useState(orderData);
  const [isOrderTab, setIsOrderTab] = useState(true);
  const [ModifiedData, setModifiedData] = useState(orderData);
  const [activeButton, setActiveButton] = useState("All");

  const handleDataFilter = (val) => {
    const tempData = orderData.filter((item) => item.status === val);
    setModifiedData(tempData);
    setActiveButton(val); // Update the active button state
  };

  useEffect(() => {
    setMyOrderData(ModifiedData);
  }, [ModifiedData]);

  return (
    <>
      {isOrderTab ? (
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
                onClick={() => {
                  setMyOrderData(orderData);
                  setActiveButton("All");
                }}
                className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "All" ? "bg-rose-200" : "hover:bg-rose-400"}`}
                value={"All"}
              >
                All
              </button>
              <button
                onClick={(e) => handleDataFilter(e.target.value)}
                className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "In Progress" ? "bg-rose-200" : "hover:bg-rose-400"}`}
                value={"In Progress"}
              >
                In Progress
              </button>
              <button
                onClick={(e) => handleDataFilter(e.target.value)}
                className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "Delivered" ? "bg-rose-200" : "hover:bg-rose-400"}`}
                value={"Delivered"}
              >
                Delivered
              </button>
              <button
                onClick={(e) => handleDataFilter(e.target.value)}
                className={`py-2.5 px-5 text-sm font-medium text-black  rounded-full border border-black ${activeButton === "Cancelled" ? "bg-rose-200" : "hover:bg-rose-400"}`}
                value={"Cancelled"}
              >
                Cancelled
              </button>
            </div>
            <div className="ml-[40px] sm:ml-auto flex space-x-4 items-center">
              <button className="py-2.5 px-5 text-sm font-medium text-white bg-rose-400 rounded-full border border-black hover:bg-rose-300 flex items-center">
                <span>Track Order</span>
              </button>
            </div>
          </div>
          <div className="space-y-6">
            {myOrderData.map((order, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-md p-4"
              >
                <div className="flex items-center mb-4">
                  <div className="text-black font-medium text-xs bg-rose-200 rounded-full py-1.5 px-5">
                    {order.status}
                  </div>
                  {order.date && (
                    <div className="text-sm font-semibold text-black ml-4">
                      {order.date}
                    </div>
                  )}
                </div>
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
                </div>
                <img
                  onClick={() => setIsOrderTab(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                  src="/src/assets/myOrders/right-arrow.png"
                  alt="Right Arrow Icon"
                />
                <div className="flex justify-end mt-4 space-x-2">
                  {order.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className={`py-1.5 px-4 text-sm font-medium ${button.class}`}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <MyOrder2 />
      )}
    </>
  );
}
