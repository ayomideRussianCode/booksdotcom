import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="relative container mx-auto p-6 font-font1">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="/Logo.png" alt="BOOKSDOTCOM" />
        </div>
        <div className=" space-x-10 md:flex">
          <NavLink
            to="/home"
            className="font-medium text-customBlue hover:underline decoration-customBlue decoration-2 md:hidden"
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className="font-medium text-customBlack hover:underline decoration-customBlue decoration-2 md:hidden"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className="font-medium text-customBlack hover:underline decoration-customBlue decoration-2 " 
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="font-medium text-customBlack   hover:underline decoration-customBlue decoration-2 md:hidden"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/signup"
            className=" hidden font-medium py-2 px-6 border-2 text-customBlue rounded-full border-customBlue hover: decoration-customBlue  md:block"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className=" hidden font-medium py-2 px-6 border-2  text-customWhite bg-customBlue rounded-full md:block"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
