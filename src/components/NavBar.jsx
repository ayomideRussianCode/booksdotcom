import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    // window.location.href = "/login"
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
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-customBlack">Welcome, {user.name}!</span>
              <NavLink
                onClick={handleLogout}
                className="font-medium py-2 px-6 border-2 rounded-full text-customWhite bg-customBlue"
                to="/login"
              >
                Log out
              </NavLink>
            </div>
          ) : (
            <>
              <NavLink
                to="/signup"
                className="font-medium py-2 px-6 border-2 text-customBlue hover:text-white"
              >
                Sign up
              </NavLink>
              <NavLink
                to="/login"
                className="font-medium py-2 px-6 border-2 text-customWhite bg-customBlue rounded-full"
              >
                Log in
              </NavLink>
            </>
          )}
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

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-customWhite shadow-lg p-6 flex flex-col space-y-4">
          <NavLink to="/home" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact Us
          </NavLink>
          {!user ? (
            <>
              <NavLink to="/signup" onClick={toggleMenu}>
                Sign up
              </NavLink>
              <NavLink to="/login" onClick={toggleMenu}>
                Log In
              </NavLink>
            </>
          ) : (
            <NavLink onClick={handleLogout} className="text-red-500">
              Log out
            </NavLink>
          )}
      </div>
    )}
    </nav>
  );
}

export default NavBar;
