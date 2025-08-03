import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Furniture", path: "/furniture" },
  { name: "Shop", path: "/shop" },
  { name: "About-Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8 font-poppins text-[18px] text-[#171616]">
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "hover:text-primary duration-300 transition"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
const NavbarSection = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4 ">
        {/* logo */}
        <Link to={"/"} className="font-bold font-poppins text-2xl">
          Logo
        </Link>

        {/*Desktop  menu items */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        {/* cart icon */}
        <div className="hidden md:block cursor-pointer relative">
            <FaShoppingBag className="text-xl"/>
            <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                0
            </sup>
            </div>
      </nav>
    </header>
  );
};

export default NavbarSection;
