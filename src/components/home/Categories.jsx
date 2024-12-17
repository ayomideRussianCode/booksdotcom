import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section
      id="bestselling"
      className="relative container pb-8 mx-auto flex flex-col"
    >
      <div className="flex flex-col font-font2 text-customBlack text-center ">
        <h1 className=" text-5xl font-light font-font2 mb-6">Categories</h1>
      </div>
      <div className=" container mx-auto flex ">
        <ul className=" flex flex-wrap justify-center gap-4">
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Games & Activities</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Classics</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Action & Adventure Fiction</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Art</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Children's</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Business</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Career & Growth</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Contemporary Fiction</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Fantasy</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Comics & Graphics Novels</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Biography & Memoir</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">General Fiction</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Crime</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Foreign Language Studies</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Mystery</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Finance & Money Management</Link>
            </button>
          </li>
          <li>
            {" "}
            <button className="bg-customWhite text-customBlack font-medium py-2 px-6 border-2 border-customBlack rounded-full ">
              <Link href="a">Computers</Link>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
