import Footer from "../components/Footer";
import NewsLetter from "../components/home/NewsLetter";
import NavBar from "../components/NavBar";

function AboutUs() {
  return (
    <>
      <NavBar />
      <section className="py-10 bg-customWhite">
        <div className="max-w-7xl mx-auto px-6 md:px-6">
          <h2 className="font-font2 text-2xl md:text-3xl font-medium text-center mt-6 mb-2">
            Who we are
          </h2>
          <p className="font-font1 text-customAsh text-center mb-8 text-sm ">
            {" "}
            Booksdotcom is your go-to destination for a curated selection of
            books, blending timeless classics with the latest bestsellers to
            ignite your love for reading.
          </p>
          <div className="flex justify-center">
            <img
              src="/Aboutus.png"
              alt="About Us"
              className=" w-full max-w-lg md:max-w-2xl"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-customWhite  overflow-hidden flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
          <div className="flex flex-col font-font1 mb-32 space-y-12 md:w-1/2">
            <h1 className=" mt-32 max-w-lg text-xl font-normal text-customBlack text-center md:text-4xl md:text-left ">
              Our Vision
            </h1>
            <p className="text-sm  text-customAsh">
              Our vision is to establish a vibrant and inclusive bookstore that
              serves as a hub for intellectual growth, creative exploration, and
              meaningful connections, where readers of all ages and backgrounds
              can discover inspiring stories, expand their knowledge, and feel a
              sense of belonging in a space that celebrates the transformative
              power of books.
            </p>
          </div>
          <div>
            <img src="/vision.png" alt="VisionImage" />
          </div>
        </div>
      </section>
      <section>
        <div className="container border border-customBlack bg-customWhite rounded-3xl  shadow-md overflow-hidden flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
          <div className="flex flex-col font-font1 mb-32 space-y-12 md:w-1/2">
            <h1 className=" mt-32 max-w-lg text-xl font-normal text-customBlack text-center md:text-4xl md:text-left ">
              Our Mission
            </h1>
            <p className="text-sm text-customAsh">
              Our mission is to curate a diverse and thoughtfully selected
              collection of books that ignite curiosity, foster lifelong
              learning, and celebrate the joy of reading, while creating a
              welcoming environment where customers feel valued, supported, and
              inspired to explore, connect, and grow as part of a community that
              cherishes the written word
            </p>
          </div>
          <div>
            <img src="/mission.png" alt="MissionImage" />
          </div>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </>
  );
}
export default AboutUs;
