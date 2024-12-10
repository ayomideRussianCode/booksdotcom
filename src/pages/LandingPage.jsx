import React from "react";
import Hero from "../components/Hero";
import BestSelling from "../components/BestSelling";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import LatestPosts from "../components/LatestPosts";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <BestSelling />
      <Services />
      <Reviews />
      <LatestPosts />
    </>
  );
};
export default LandingPage;
