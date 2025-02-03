import React from "react";
import Logo from "../components/Logo";

function NavBar2() {
  return (
    <nav className="relative w-full bg-customColor1 px-4 py-3 sm:py-4 sm:px-6 shadow-lg rounded-none font-font1">
      <div className="flex items-center justify-between">
        <div>
          <img src="/Logo.png" alt="Logo" className="h-8 sm:h-10" />
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search Books, Authors etc."
              className="w-96 border rounded-full px-4 py-2 focus:outline-none"
            />
          </div>
          <div>
            <img src="./cart.png" alt="Cart" className="h-6 w-6" />
          </div>
          <div>
            <img
              src="./notification.png"
              alt="Notification"
              className="h-6 w-6"
            />
          </div>
          <div>
            <img src="./usericon.png" alt="User" className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-3 font-font1 mt-4 overflow-x-auto whitespace-nowrap">
        <p>Games & Activities |</p>
        <p>Classic |</p>
        <p>Action & Adventure Fiction Art |</p>
        <p>Children's |</p>
        <p>Business Career & Growth |</p>
        <p>Comics & Graphic Novels |</p>
        <p>Fantasy</p>
      </div>
    </nav>
  );
}

export default NavBar2;
