import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) return;

      try {
        const response = await axios.get(
          "https://booksdotcom.onrender.com/api/v1/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

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
            <>
              <span className="font-medium text-customBlue">
                Hello, {user.name}!
              </span>
              <button
                onClick={handleLogout}
                className="font-medium py-2 px-6 border-2 text-customWhite capitalize bg-customBlue rounded-full"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
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

      <div
        id="menu"
        className={`absolute flex-col items-center ${
          isMenuOpen ? "flex" : "hidden"
        } self-end py-8 mt-10 space-y-6 font-bold bg-customWhite sm:self-center left-6 right-6 drop-shadow`}
      >
        <NavLink to="/home" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About Us
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact Us
        </NavLink>

        {user ? (
          <>
            <span className="text-customBlue capitalize">Hello, {user.name}!</span>
            <button
              onClick={handleLogout}
              className="py-2 px-6 bg-customBlue text-white rounded-full"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/signup" onClick={toggleMenu}>
              Sign Up
            </NavLink>
            <NavLink to="/login" onClick={toggleMenu}>
              Log In
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
