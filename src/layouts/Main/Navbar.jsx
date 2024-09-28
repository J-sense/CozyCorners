import { LuShoppingCart } from "react-icons/lu";
import { LuText } from "react-icons/lu";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
  const [isOpen, setIsOpen] = useState(false);
  const handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const linkItems = () => {
    return (
      <ul className="  flex flex-col md:flex-row items-center md:space-x-8 gap-8 text-[14px] uppercase font-navfont">
        {navbarItems.map((item, index) => (
          <li key={index}>
            <NavLink
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
    <div>
      <nav className="flex container mx-auto  justify-between items-center py-6 px-4">
        <Link to="/">Logo</Link>
        <div className="md:hidden text-xl " onClick={handletoggle}>{isOpen ? <>X</> : <LuText />}</div>
        <div className="hidden md:flex">{linkItems()}</div>
        <div className="hidden md:block cursor-pointer relative">
          <LuShoppingCart />
          <sup className="absolute top-0 -right-3 bg-primary text-xs  w-5 h-5 rounded-full  items-center justify-center ">
            {" "}
            0
          </sup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
