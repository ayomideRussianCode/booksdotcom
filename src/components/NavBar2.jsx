import Logo from "../components/Logo";

function NavBar2() {
  return (
    <nav className=" relative w-full h-28 bg-customColor1 p-6 shadow-lg rounded-none font-font1">
      <div className="flex items-center justify-between">
        <div>
          <Logo src="/Logo.png" alt="Logo" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Books, Authors etc."
            className="w-96 border rounded-full px-4 py-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-row gap-x-6">
          <div>
            <img src="./cart.png" alt="" />
          </div>
          <div>
            <img src="./notification.png" alt="" />
          </div>
          <div>
            <img src="./usericon.png" alt="" />
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-row gap-3 font-font1 ">
        <p>Games & Activities |</p>
        <p>Classic |</p>
        <p>Action & Adventure Fiction Art |</p>
        <p>Children's |</p>
        <p>Business Career & Growth |</p>
        <p>Comics & Graphic Novels |</p>
        <p>Fantasy</p>
      </div>
      <hr />
    </nav>
  );
}

export default NavBar2;
<button className="w-80 border rounded-full px-4 py-2 focus:outline-none text-customBlack bg-customColor1 mt-6">
  Get this Deal
</button>;
