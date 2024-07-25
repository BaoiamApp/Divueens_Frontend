import React from "react";
import { RiDeleteBin6Line} from "react-icons/ri";
import { FaStar } from "react-icons/fa6";

const CartItem = ({ title, image, rating, price, quantity, onIncrease, onDecrease, onRemove }) => {
    return (
      <div className="flex gap-5 rounded-md border-[3px] border-rose-200 w-full p-1 md:p-4">
        <img src={image} alt={title} className="md:w-1/4 w-1/3" />
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-medium text-sm md:text-lg">{title}</h3>
          <div className="flex items-center gap-2 text-sm md:text-lg">
            <span >{rating}/5</span>
            <span className="text-yellow-400 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm md:text-lg flex-col md:flex-row">
            <span className="font-medium">MRP: ₹{price}</span>
            <div className="flex items-center gap-2 text-sm">
              <button onClick={onDecrease} className="border rounded px-2 py-1">-</button>
              <span>{quantity}</span>
              <button onClick={onIncrease} className="border rounded px-2 py-1">+</button>
            </div>
          </div>
        </div>
        <button onClick={onRemove} className="md:ml-auto mb-auto">
          <RiDeleteBin6Line size={24} />
        </button>
      </div>
    );
  }

export default CartItem;