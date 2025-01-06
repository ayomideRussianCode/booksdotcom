import FormField from "../components/FormField";
import NavBar from "../components/NavBar";

function ContactUs({ className = "" }) {
  return (
    <>
      <NavBar />
      <div className="bg-customWhite flex flex-col gap-2 dm:gap-4 md:gap-6 justify-center items-center h-56 sm:h-72 md:h-96 px-4 sm:px-8 md:px-16">
        <h1 className="font-font2 text-customBlack text-2xl sm:text-3xl md:text-4xl ">
          Contact Us
        </h1>
        <p className="font-font1 text-sm text-customAsh font-medium mt-2 md:text-sm sm:text-sm">
          We would love to hear from you if you have any enquiries to make from
          us
        </p>
        <FormField
          type="text"
          id="firstname"
          placeholder="First Name"
          className="w-full py-2 px-4 border rounded-full focus:ring-2 focus:ring-customBlue"
        />
      </div>
    </>
  );
}
export default ContactUs;
