import NavBar from "../components/NavBar";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="bg-customWhite flex flex-col gap-2 md:gap-6 justify-center items-center h-56 sm:h-72 md:h-96 px-4 sm:px-8 md:px-16">
        <div>
          <h1 className="font-font2 text-customBlack text-2xl sm:text-3xl md:text-4xl ">
            Who we are
          </h1>
          <p className="font-font1 text-sm text-customAsh font-medium mt-2 md:text-sm sm:text-sm">
            We would love to hear from you if you have any enquiries to make
            from us
          </p>
        </div>
        <div className="pt-10">
          <img src="/Aboutus.png" alt="About Us" />
        </div>
      </div>
    </>
  );
}
export default AboutUs;
