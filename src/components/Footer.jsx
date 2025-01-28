import Logo from "../components/Logo";
import Description from "./Description";

function Footer() {
  return (
    <footer className="flex p-6 md:p-10 bg-customWhite font-font1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Logo src="/Logo.png" alt="Logo" />
          <Description
            text="Online marketplace for book vendors and authors to readers looking for various types of books."
            className="font-font1"
          />
          <div className="flex space-x-4 mt-4">
            <a href="a" aria-label="Twitter" className="text-customBlue">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="a" aria-label="LinkedIn" className="text-customBlue">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="a" aria-label="Facebook" className="text-customBlue">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="a" aria-label="Instagram" className="text-customBlue">
              <i className="fab fa-fa-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="/home" className="hover:text-customBlue">
                Home
              </a>
            </li>
            <li>
              <a href="/home" className="hover:text-customBlue">
                Books
              </a>
            </li>
            <li>
              <a href="/Blogs" className="hover:text-customBlue">
                Blogs
              </a>
            </li>
            <li>
              <a href="/home" className="hover:text-customBlue">
                Authors
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-customBlue">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="a" className="hover:text-customBlue">
                Order Track
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-customBlue">
                Contact Us
              </a>
            </li>
            <li>
              <a href="a" className="hover:text-customBlue">
                Find My Product
              </a>
            </li>
            <li>
              <a href="a" className="hover:text-customBlue">
                Help Desk
              </a>
            </li>
            <li>
              <a href="a" className="hover:text-customBlue">
                Writer/Publisher Request
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Policies</h2>
          <ul className="space-y-2 text-sm ">
            <li>
              <a href="a" className="hover:text-customBlue">
                Order Track
              </a>
            </li>
            <li>
              <a href="a" className="hover:text-customBlue">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="a" className="hover:text-customBlue">
                Return Policy
              </a>
            </li>
          </ul>
        </div>
        <div className=" w-full flex justify-center items-center mt-6 pt-4 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-md font-font1"> BOOKSDOTCOM </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
