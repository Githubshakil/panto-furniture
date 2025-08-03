import React, { useEffect, useState } from "react";
import { FaBars, FaShoppingBag } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Furniture", path: "/furniture" },
  { name: "Shop", path: "/shop" },
  { name: "About-Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8 font-poppins text-[18px]">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !isMenuOpen);
  };

  // when scrooled apply bg- color

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out  ${
        isScroll ? "bg-white shadow-md " : "bg-transparent text-white"
      }`}
    >
      <nav className=" section-container flex justify-between items-center  ">
        {/* logo */}
        <Link to={"/"} className="font-bold font-poppins text-2xl">
          Panto
        </Link>

        {/* hamburger menu for mobile */}
        <div
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-xl hover:text-primary transition duration-300 "
        >
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* mobile menu items */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/80 text-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-4 right-5 text-xl"
            onClick={toggleMenu}
          >
            <IoClose />
          </div>
          <NavItems toggleMenu={toggleMenu} />
        </div>

        {/*Desktop  menu items */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        {/* cart icon */}
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingBag className="text-xl" />
          <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSection;
