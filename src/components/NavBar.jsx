import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="relative container mx-auto p-6 font-font1">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="BOOKSDOTCOM" />
        </div>
        <div className="hidden space-x-10 md:flex">
          <NavLink
            to="/"
            className="font-medium text-customBlue   hover:underline decoration-customBlue decoration-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="font-medium text-customBlack   hover:underline decoration-customBlue decoration-2"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/"
            className="font-medium text-customBlack   hover:underline decoration-customBlue decoration-2"
          >
            About Us
          </NavLink>
          <aNavLink
            to="/"
            className="font-medium text-customBlack   hover:underline decoration-customBlue decoration-2"
          >
            Contact Us
          </aNavLink>
          <NavLink
            to="/"
            className=" hidden p-2 px-5 pt-2  text-customBlue rounded-full border-customBlue hover: decoration-customBlue border-2 md:block"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/"
            className=" hidden p-2 px-6 pt-2  text-customWhite bg-customBlue rounded-full md:block"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
