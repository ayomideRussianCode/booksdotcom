import heroImage from "../../assets/18 1 (1).png";

function Hero() {
  return (
    <section id="hero">
      <div className="container bg-customWhite flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className=" mt-32 max-w-md text-4xl font-normal font-font2 text-center md:text-5xl md:text-left ">
            Get your new book with the best prize{" "}
          </h1>
          <p className=" max-w-sm text-center text-customAsh font-font1 md:text-left">
            Online marketplace for book vendors and authors to readers looking
            for various types of books.
          </p>
          <div className=" flex justify-center md:justify-start">
            <a
              className="p-2 px-16 pt-2 text-customBlue font-font1 bg-customWhite"
              href="a"
            >
              <button className="text-customWhite bg-customBlue p-2 px-20 pt-2 rounded-full">Search</button>
            </a>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="HeroImage" />
        </div>
        {/* achievements */}
      </div>
    </section>
  );
}
export default Hero;
