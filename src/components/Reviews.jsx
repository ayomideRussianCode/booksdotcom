import React, { useState } from "react";
import reviews from "../Fixtures/Reviews.json";

function Reviews() {
  const [curIndex, setCurIndex] = useState(0);
  const reviewsPerView = 1;

  const displayedReviews = reviews.slice(curIndex, curIndex + reviewsPerView);

  const handleNext = () => {
    setCurIndex((prevIndex) =>
      prevIndex + reviewsPerView >= reviews.length
        ? 0
        : prevIndex + reviewsPerView
    );
  };

  const handlePrev = () => {
    setCurIndex((prevIndex) =>
      prevIndex - reviewsPerView < 0
        ? reviews.length
        : prevIndex - reviewsPerView
    );
  };

  return (
    <section id="reviews">
      <div className="container w-full h-64 justify-center border bg-customColor1 flex flex-col  my-8 rounded-none shadow-md overflow-hidden md:flex-row ">
        <h2 className="text-xl font-font2 text-center my-6 uppercase text-customBlack ">
          Customers Reviews
        </h2>
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-16  w- h-64 border bg-customWhite shadow-lg rounded-xl"></div>
      </div>
      
    </section>
  );
}
export default Reviews;
