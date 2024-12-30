function NewsLetter() {
  return (
    <section id="newsletter">
      <div className=" container font-font1 mx-auto flex p-10 mt-10 border bg-customBlue rounded-3xl overflow-hidden shadow-md md:flex-row">
        <div>
          <h2 className="mx-auto items-center text-customWhite text-4xl font-medium">
            Subscribe our newsletter to get latest news & updates
          </h2>
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            className="border-2 border-customWhite"
          />
        </div>
      </div>
    </section>
  );
}
export default NewsLetter;
