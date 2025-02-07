import React from "react";

const FeaturedBook = ({ book }) => {
  return (
    <div className="flex flex-col md:flex-row pt-6 gap-6">
      <div className="w-full md:w-1/2 lg:w-auto">
        <img src={"/Bestselling1.png"} alt="A Novel" className="max-w-sm" />
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
          suspenseful psychological thriller centered on themes of hidden truths
          and moral ambiguity. The story follows a protagonist grappling with a
          buried secret that threatens to upend their life. As the narrative
          unfolds, it explores the lengths people go to protect their past and
          the consequences of deception. The novel delves into the complexities
          of trust, relationships, and the impact of secrets on human
          connections, culminating in a gripping and unexpected resolution{" "}
          <a href="a" className="text-blue-500">
            Read more
          </a>
        </small>
      </div>
    </div>
  );
};

export default FeaturedBook;
