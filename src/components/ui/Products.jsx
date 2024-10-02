import React, { useState } from "react";
import Headline from "../shared/Headline";
import { products } from "../../utils/products";
import ProductsCart from "./ProductsCart";

const Products = ({ headline }) => {
  const categories = ["Chair", "Sofa", "Lamp", "Beds"];
  const [categoryfilter, setCategoryfilter] = useState("Chair");
  const filltering = products.filter((pr) => pr.category === categoryfilter);
  const [visible, setVisible] = useState(4);
  const handleLoadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div>
      <div className="section-container">
        <h1 className="font-bannerfont text-3xl font-bold text-center my-8">
          {headline}
        </h1>
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between sm:justify-center gap-4 duration-500 transition-all">
            {categories.map((item, idx) => (
              <button
                onClick={() => {
                  setCategoryfilter(item);
                  setVisible(4);
                }}
                key={idx}
                className={`py-1.5 sm:px-5 px-8 hover:bg-primary hover:text-white transition-colors rounded-full ${
                  categoryfilter === item
                    ? "bg-white text-primary"
                    : "text-secondary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filltering.slice(0, visible).map((item, idx) => (
            <ProductsCart products={item} />
          ))}
        </div>
        {visible < filltering.length && (
          <button
            className="relative z-10 flex justify-center items-center gap-2 mx-auto overflow-hidden rounded-full bg-[#DD7210] text-gray-50 shadow-xl px-8 py-2 group transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100"
            type="submit"
            onClick={handleLoadMore}
          >
            Shop Now
            <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-50 rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 19"
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90"
              >
                <path
                  className="fill-gray-800 group-hover:fill-gray-800"
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                ></path>
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
