import React, { useState } from "react";
import NavBar2 from "../components/NavBar2";
import Popular from "../components/home/Popular";
import RecentlySold from "../components/home/RecentlySold";

function PaymentDashboard() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <NavBar2 cartItems={cartItems} addToCart={addToCart} />
      <div className="w-full flex flex-row gap-3 font-font1 mt-4 overflow-x-auto whitespace-nowrap">
        <p>Games & Activities |</p>
        <p>Classic |</p>
        <p>Action & Adventure Fiction Art |</p>
        <p>Children's |</p>
        <p>Business Career & Growth |</p>
        <p>Comics & Graphic Novels |</p>
        <p>Fantasy</p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 pt-12">
        <p>Books {">"} </p>
        <p>Literature & Fiction {">"} </p>
        <p>Genre Fiction </p>
      </div>
      <div className="flex flex-col md:flex-row pt-6 gap-6">
        <div className="w-full md:w-1/2 lg:w-auto">
          <img src="/Bestselling1.png" alt="A Novel" className="max-w-sm" />
        </div>
        <div className="w-full md:w-1/2 lg:w-96">
          <h3 className="text-2xl font-bold">The Secrets: A Novel</h3>
          <p className="text-gray-500">Softcopy</p>
          <small>
            <a href="/featuredauthors" className="text-blue-500">
              Jonas Nill Barton
            </a>{" "}
            (Author, Narrator)
          </small>
          <h4 className="text-lg font-semibold mt-4">Summary</h4>
          <small className="text-gray-600 text-sm">
            The Secret by Jonas Nilsson (often credited as Jonas Nill) is a
            suspenseful psychological thriller centered on themes of hidden
            truths and moral ambiguity. The story follows a protagonist
            grappling with a buried secret that threatens to upend their life.
            As the narrative unfolds, it explores the lengths people go to
            protect their past and the consequences of deception. The novel
            delves into the complexities of trust, relationships, and the impact
            of secrets on human connections, culminating in a gripping and
            unexpected resolution{" "}
            <a href="a" className="text-blue-500">
              Read more
            </a>
          </small>
        </div>
        <div className="w-full md:w-1/2 lg:w-96 border-4 border-customColor1 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row gap-2">
            <button className="w-full md:w-1/2 py-4 px-2 border border-customAsh rounded-lg">
              <p>Softcopy</p>
              <p className="text-sm font-bold">$14.99</p>
              <p className="text-sm">Available instantly</p>
            </button>
            <button className="w-full md:w-1/2 py-4 px-2 border border-customAsh rounded-lg">
              <p>Hardcopy</p>
              <p className="text-sm font-bold">$25.89</p>
              <p className="text-sm">Available instantly</p>
            </button>
          </div>
          <div className="flex flex-col pt-6">
            <button className="w-full py-4 px-2 border border-customAsh rounded-lg">
              <p>Audiobook</p>
              <p className="text-sm font-bold">$20.99</p>
              <p className="text-sm">Available instantly</p>
            </button>
            <button className="w-full border rounded-lg px-4 py-2 focus:outline-none text-customWhite bg-orange-500 mt-6">
              Limited-time Offer
            </button>
            <small className="mt-4 text-sm">
              Save over 20% off for all Copies of your choice
            </small>
            <button className="w-80 border rounded-full px-4 py-2 focus:outline-none text-customBlack bg-yellow-400 mt-6">
              Get this Deal
            </button>
            <ul className="text-xs pt-4 list-disc pl-5 text-gray-600">
              <li>1000 Softcopies are available for 20% discount </li>
              <li>500 Hardcopies are available for 20% discount </li>
              <li>700 Audiobooks are available for 20% discount </li>
            </ul>
          </div>
        </div>
      </div>
      <Popular />
      <RecentlySold />
    </div>
  );
}

export default PaymentDashboard;
