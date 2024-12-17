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
      <div className="container w-full h-64 justify-center border bg-customColor1 my-8 rounded-none shadow-md overflow-hidden md:flex-row ">
        <div>
          <h2 className="text-xl font-font2 text-center my-6 uppercase text-customBlack ">
            Customers Reviews
          </h2>
        </div>
        <div></div>
      </div>
    </section>
  );
}
export default Reviews;
