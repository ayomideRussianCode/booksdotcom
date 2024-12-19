import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative container mx-auto p-6 font-font1">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="/Logo.png" alt="BOOKSDOTCOM" />
        </div>

        <div className="hidden space-x-10 md:flex">
          <NavLink
            to="/home"
            className="font-medium text-customBlue hover:underline decoration-customBlue decoration-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className="font-medium text-customBlack hover:underline decoration-customBlue decoration-2"
          >
            Blogs
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

        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`absolute flex-col items-center ${
          isMenuOpen ? "flex" : "hidden"
        } self-end py-8 mt-10 space-y-6 font-bold bg-customWhite sm:self-center left-6 right-6 drop-shadow`}
      >
        <NavLink to="/home" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/blogs" onClick={toggleMenu}>
          Blogs
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About Us
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact Us
        </NavLink>
        <NavLink to="/signup" onClick={toggleMenu}>
          Sign Up
        </NavLink>
        <NavLink to="/login" onClick={toggleMenu}>
          Log In
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
