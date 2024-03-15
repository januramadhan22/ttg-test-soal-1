import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="relative max-w-[200px]">
      <div className="relative overflow-clip group transition-all ease-in">
        <img
          src={image}
          alt="Product"
          className="w-[200px] h-[200px] object-cover"
        />
        <div className="absolute z-10 -top-4 -right-12 pt-10 pb-1 px-10 rotate-45 bg-primary-green text-sm font-medium text-white">
          15% Off
        </div>
        <div className="absolute bottom-0 translate-y-full w-full py-1 flex justify-center items-center gap-1 font-semibold text-white bg-primary-green group-hover:translate-y-0 transition-all ease-in">
          <MdOutlineVisibility className="text-xl" /> Quick-View
        </div>
      </div>
      <div className="p-4 flex flex-col items-center gap-2">
        <h3 className="text-lg font-medium uppercase">{title}</h3>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <FaRegStar key={index} className="text-primary-green" />
          ))}
        </div>
        <p className="text-lg font-medium">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
