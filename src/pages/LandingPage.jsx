import React from "react";
import Hero from "../components/Hero";
import BestSelling from "../components/BestSelling";
import Services1 from "../components/Services1";
import Services2 from "../components/Services2";
import Services3 from "../components/Services3";
import Services4 from "../components/Services4";
import Services5 from "../components/Services5";
import Reviews from "../components/Reviews";
import LatestPosts from "../components/LatestPosts";
import NavBar from "../components/NavBar";
import Discount from "../components/Discount";

const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <BestSelling />
      <Discount/>
      <Services1 />
      <Services2/>
      <Services3/>
      <Services4/>
      <Services5/>
      <Reviews />
      <LatestPosts />
    </>
  );
};
export default LandingPage;
