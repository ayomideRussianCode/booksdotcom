import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative container mx-auto p-6 font-font1 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src="/Logo.png" alt="BOOKSDOTCOM" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-8 md:flex">
          <NavLink
            to="/home"
            className="font-medium text-customBlue hover:underline decoration-customBlue decoration-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="font-medium text-customBlack hover:underline decoration-customBlue decoration-2"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="font-medium text-customBlack hover:underline decoration-customBlue decoration-2"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/signup"
            className="hidden font-medium py-2 px-6 border-2 text-customBlue rounded-full border-customBlue hover:decoration-customBlue md:block"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className="hidden font-medium py-2 px-6 border-2 text-customWhite bg-customBlue rounded-full md:block"
          >
            Log In
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open Main Menu</span>
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-customBlue transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-customBlue transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-customBlue transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg py-4 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform scale-y-100" : "transform scale-y-0"
        } origin-top`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <NavLink
              to="/home"
              onClick={closeMenu}
              className="font-medium text-customBlue hover:underline"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className="font-medium text-customBlack hover:underline"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="font-medium text-customBlack hover:underline"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              onClick={closeMenu}
              className="font-medium py-2 px-6 border-2 text-customBlue rounded-full border-customBlue"
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="font-medium py-2 px-6 border-2 text-customWhite bg-customBlue rounded-full"
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
