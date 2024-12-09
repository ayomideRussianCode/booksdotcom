function Hero() {
  return (
    <section id="hero">
      <div className="container bg-customWhite flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className=" mt-32 max-w-md text-4xl font-normal font-font2 text-center md:text-5xl md:text-left ">
            Feast on Interesting Literatures
          </h1>
          <p className=" max-w-sm text-center text-customAsh font-font1 md:text-left">
            Online marketplace for book vendors and authors to readers looking
            for various types of books.
          </p>
          <div className=" flex justify-center md:justify-start">
            <a
              className="p-2 px-16 pt-2  text-customWhite font-font1 bg-customBlue rounded-full"
              href="a"
            >
              Shop Collections
            </a>
          </div>
        </div>
        <div>
          <img src="/Heroimage1.png" alt="HeroImage" />
        </div>
        {/* achievements */}
      </div>
    </section> 
  );
}
export default Hero;
