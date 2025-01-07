import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function ContactUs() {
  const handleformSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };
  return (
    <>
      <NavBar />
      <ContactForm onSubmit={handleformSubmit} />
      <Footer />
    </>
  );
}
export default ContactUs;
