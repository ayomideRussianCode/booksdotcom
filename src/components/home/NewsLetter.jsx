function NewsLetter() {
  return (
    <section id="newsletter">
      <div className=" container font-font1 mx-auto flex justify-center items-center p-20 mt-10 border bg-customBlue rounded-3xl overflow-hidden shadow-md md:flex-row">
        <div className="flex flex-col md:flex-row">
          <h2 className=" w-full mx-auto items-center text-customWhite text-xl font-medium">
            Subscribe our newsletter to get latest news & updates
          </h2>
          <div className="pt-8 flex flex-row gap-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className=" w-full placeholder-customWhite border-2 bg-customBlue focus:outline-none focus:ring-customWhite rounded-full px-2 py-2"
            />
            <button
              type="submit"
              placeholder="Subscribe"
              className=" w-full placeholder-customBlue bg-customWhite focus:outline-none rounded-full px-2 py-2"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter;
