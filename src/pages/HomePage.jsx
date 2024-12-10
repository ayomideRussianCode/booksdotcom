import React from "react";
import NavBar from "../components/home/NavBar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import BestSelling from "../components/BestSelling"
import PopularBooks from "../components/home/Popular";
import RecentlySold from "../components/home/RecentlySold";
import NewArrivals from "../components/home/NewaArivals";
import BestKidsBooks from "../components/home/BestKidsBooks";
import FeaturedAuthors from "../components/home/FeaturedAuthors";

const HomePage = () => {
  return (
    <>
      <NavBar/>     
      <Hero/>
      <Categories/>
      <BestSelling/>
      <PopularBooks/>
      <RecentlySold/>
      <NewArrivals/>
      <BestKidsBooks/>
      <FeaturedAuthors/>

    </>
  );
};
export default HomePage;
