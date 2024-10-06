import { LuShoppingCart } from "react-icons/lu";
import { LuText } from "react-icons/lu";
import logo from "/light-logo.svg"
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../components/shared/Context/CartContext";

const navbarItems = [
  {
    path: "/",
    label: "Furniture",
  },
  {
    path: "/shop",
    label: "Shop",
  },
  {
    path: "/about",
    label: "About us",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const {cartCount} = useContext(CartContext)
  console.log(cartCount)
  const [isOpen, setIsOpen] = useState(false);
  const handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const linkItems = (toggleMenu) => {
    return (
      <ul className="  flex flex-col md:flex-row items-center md:space-x-8 gap-8 text-[16px] uppercase font-semibold font-navfont">
        {navbarItems.map((item, index) => (
          <li key={index}>
            <NavLink
              onClick={toggleMenu}
              to={item.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white`}>
      <div>
        <nav className="flex container mx-auto  justify-between items-center py-6 px-4">
          <Link to="/"><img src={logo} alt="" className="text-black z-50"/></Link>
          <div className="md:hidden text-xl " onClick={handletoggle}>
            {isOpen ? null : <LuText />}
          </div>
          <div className="hidden md:flex">{linkItems()}</div>

          <div
            toggleMenu={handletoggle}
            className={`fixed top-0 text-white right-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <div onClick={handletoggle} className="absolute top-8 right-4">
              <p>X</p>
            </div>
            {linkItems()}
          </div>

          <div className="hidden md:block cursor-pointer relative">
            {/* Shopping Cart Icon */}
            <LuShoppingCart />

            {/* Cart Badge to show item count */}
            <sup className="absolute top-0 -right-3 bg-primary text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount} {/* Default item count */}
            </sup>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
