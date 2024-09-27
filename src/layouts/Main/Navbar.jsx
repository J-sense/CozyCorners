import React from "react";
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
  const linkItems = () => {
    return (
      <ul className="  flex flex-col md:flex-row items-center md:space-x-8 gap-8 ">
        {navbarItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-primary font-bold" : "hover:text-primary"
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
        <div>{linkItems()}</div>
        <div>Cart</div>
      </nav>
    </div>
  );
};

export default Navbar;
