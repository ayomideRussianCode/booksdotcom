import { useState } from "react";
import Logo from "../components/Logo";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavBar2({ onSearch }) {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const {cart} = useCart();
  const cartItemCount = cart.length;
    console.log("Cart Length from Context:", cartItemCount);
  const handleSearch = async (query, filterType) => {
    if (!query) return;

    let apiUrl = "https://booksdotcom.onrender.com/api/v1/products";

    switch (filterType) {
      case "title":
        apiUrl += `/search?title=${query}`;
        break;
      case "isbn":
        apiUrl += `/search?isbn=${query}`;
        break;
      case "author":
        apiUrl += `/search?author=${query}`;
        break;
      case "publisher":
        apiUrl += `/search?publisher=${query}`;
        break;
      case "category":
        apiUrl += `/search?category=${query}`;
        break;
      default:
        console.error("Invalid filter type");
        return;
    }

    try {
      console.log(`Sending request to: ${apiUrl}`);
      const response = await axios.get(apiUrl);
      console.log("Search results:", response.data);

      setSearchResults(response.data.products || []);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  console.log("Cart Item Count in NavBar2:", cartItemCount);

  return (
    <div>
      <nav className="relative w-full bg-customColor1 p-4 sm:p-6 shadow-lg rounded-none font-font1">
        <div className="flex items-center justify-between">
          <div>
            <Logo src="/Logo.png" alt="Logo" />
          </div>
          <div className="hidden sm:block">
            <SearchBar
              type="text"
              placeholder="Search Books, Authors etc."
              className="w-96 border rounded-full px-4 py-2 focus:outline-none"
              onSearch={onSearch}
            />
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="relative cursor-pointer" onClick={() => navigate("/checkout")}>
              <img src="./cart.png" alt="Cart" className="h-8 w-8" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>

            <div>
              <img src="./notification.png" alt="Notification" className="h-6 w-6" />
            </div>

            <div>
              <img src="./usericon.png" alt="User" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>

      {searchResults.length > 0 && (
        <div className="mt-6 p-4 bg-customWhite shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Search Results</h2>
          <ul className="capitalize font-font1">
            {searchResults.map((book) => (
              <li key={book._id} className="border-b py-2">
                <strong>{book.title}</strong> - {book.description} <br />
                <span className="text-sm text-customAsh">
                  ISBN: {book.ISBN}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar2;
