import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <nav className="relative container mx-auto p-6 font-font1">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="BOOKSDOTCOM" />
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="h" className="font-medium text-customBlue   hover: underline decoration-customBlue decoration-2">Home</a>
          <a href="h" className="font-medium text-customBlack   hover: underline decoration-customBlue decoration-2" >Blogs</a>
          <a href="h" className="font-medium text-customBlack   hover: underline decoration-customBlue decoration-2">About Us</a>
          <a href="h" className="font-medium text-customBlack   hover: underline decoration-customBlue decoration-2">Contact Us</a>
          <a className="p-2 px-6 pt-2 text-customBlue rounded-full border-2 border-customBlue" href="a">Sign Up</a>
        <a className="p-2 px-6 pt-2 text-customWhite bg-customBlue rounded-full baseline" href="a">Log In</a>
        </div>
        
      </div>
    </nav>
  );
}
export default NavBar;
