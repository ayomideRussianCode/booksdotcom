import React from "react";
import NavBar from "../components/home/NavBar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import BestSelling from "../components/BestSelling"

const HomePage = () => {
  return (
    <>
      <NavBar/>     
      <Hero/>
      <Categories/>
      <BestSelling/>
    </>
  );
};
export default HomePage;
