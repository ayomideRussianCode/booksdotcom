import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

function ContactUs() {
  const handleformSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };
  return (
    <>
      <NavBar />
      <ContactForm onSubmit={handleformSubmit} />
    </>
  );
}
export default ContactUs;
