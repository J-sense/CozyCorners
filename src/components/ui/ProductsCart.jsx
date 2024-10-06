import React, { useContext } from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import Rating from "./Rating";
import { FaPlus } from "react-icons/fa";
import { ThemeContext } from "../shared/Context/Themecontextprovider";
import { CartContext } from "../shared/Context/CartContext";

const ProductsCart = ({ products }) => {
  const {addToCart} = useContext(CartContext)
  console.log(addToCart)
  const {isDarkMode} = useContext(ThemeContext)
  return (
    <div className={`${isDarkMode ? ' rounded-md shadow-md shadow-slate-200' : ''}`}>
      <div  className={`bg-[#fafafa]  rounded-md ${isDarkMode ? 'bg-slate-200 border rounded-lg' : ''}`}>
        <img src={getImgUrl(`${products.imageUrl}`)} alt="" />
      </div>
      <div className={`py-6 bg-white dark:bg-black shadow-sm p-3 font-bannerfont ${isDarkMode ? 'bg-gray-900  rounded-lg' : ''}`}>
        <h4>{products.category}</h4>
        <h3 className="font-semibold text-xl mb-2">
            {products.name}
        </h3>
        <Rating rating={products.rating}/>
        <div className="mt-5 flex justify-between items-center">
            <p className="text-secondary dark:text-white font-bold text-lg">${products.price}</p>
            <button className="bg-secondary hover:bg-black/65 text-white p-2 rounded-full">
            <FaPlus onClick={()=>addToCart(products)}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
