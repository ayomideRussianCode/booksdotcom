import React from "react";
import BestSelling1 from "../assets/product-1 1.png";
import BestSelling2 from "../assets/product-2 1.png";
import BestSelling3 from "../assets/product-6 1.png";
import BestSelling4 from "../assets/product-item3 1.png";

const Categories = () => {
  return (
    <section id="best-selling">
      <div className="max-w-6xl font-font1 flex flex-col px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-extralight text-center uppercase font-font2 mb-4">
          Best selling books
        </h2>
      </div>
      <div className="flex items-center justify-center  ">
        <div className="h-full flex p-8 font-font1 ">
          <div className="border border-customAsh rounded-md  ">
            <div>
              <img
                src={BestSelling1}
                alt="BestSelling1"
                className=" w-64 object-contain rounded-md p-8"
              />
            </div>
            <div className="pl-4 pb-2">
              <h2 className="text-customBlack  font-font1 font-medium pb-4">
                The Secrets
              </h2>
              <p className="text-customAsh pb-4">Jonas Nill Barton</p>
              <small className="text-customBlue  font-bold pb-4">$8</small>
            </div>
          </div>
        </div>
        <div className="h-full flex p-8 font-font1 ">
          <div className="border border-customAsh rounded-md  ">
            <div>
              <img
                src={BestSelling2}
                alt="BestSelling2"
                className=" w-64 object-contain rounded-md p-8"
              />
            </div>
            <div className="pl-4 pb-2">
              <h2 className="text-customBlack  font-font1 font-medium pb-4">
                The Secrets
              </h2>
              <p className="text-customAsh pb-4">Jonas Nill Barton</p>
              <small className="text-customBlue  font-bold pb-4">$8</small>
            </div>
          </div>
        </div>
        <div className="h-full flex p-8 font-font1 ">
          <div className="border border-customAsh rounded-md  ">
            <div>
              <img
                src={BestSelling3}
                alt="BestSelling3"
                className=" w-64 object-contain rounded-md p-8"
              />
            </div>
            <div className="pl-4 pb-2">
              <h2 className="text-customBlack  font-font1 font-medium pb-4">
                The Secrets
              </h2>
              <p className="text-customAsh pb-4">Jonas Nill Barton</p>
              <small className="text-customBlue  font-bold pb-4">$8</small>
            </div>
          </div>
        </div>
        <div className="h-full flex p-8 font-font1 ">
          <div className="border border-customAsh rounded-md  ">
            <div>
              <img
                src={BestSelling4}
                alt="BestSelling4"
                className=" w-64 object-contain rounded-md p-8"
              />
            </div>
            <div className="pl-4 pb-2">
              <h2 className="text-customBlack  font-font1 font-medium pb-4">
                The Secrets
              </h2>
              <p className="text-customAsh pb-4">Jonas Nill Barton</p>
              <small className="text-customBlue  font-bold pb-4">$8</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
