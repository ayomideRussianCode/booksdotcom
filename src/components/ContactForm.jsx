function ContactForm({ onSubmit }) {
  return (
    <section className=" flex justify-center items-center min-h-screen bg-customWhite">
      <div className="bg-customWhite flex flex-col gap-2 md:gap-6 justify-center items-center h-56 sm:h-72 md:h-96 px-4 sm:px-8 md:px-16">
        <h2 className="font-font2 text-customBlack text-2xl sm:text-3xl md:text-4xl">
          Contact Us
        </h2>
        <p className="font-font1 text-sm text-customAsh font-medium mt-2 md:text-sm sm:text-sm">
          We would love to hear from you if you have any enquiries to make from
          us
        </p>
        <form onSubmit={onSubmit} className="space-y-6 font-font1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-customBlue rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBlue"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-customBlue rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBlue"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full border border-customBlue rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBlue"
            required
          />
          <input
            type="text"
            placeholder="Subject "
            className="w-full border border-customBlue rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBlue"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-customBlue rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBlue "
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-customBlue text-customWhite rounded-full font-semibold "
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
}
export default ContactForm;
