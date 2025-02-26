import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar2 from "../components/NavBar2";
import SearchResults from "../components/SearchResults";
import Popular from "../components/home/Popular";
import RecentlySold from "../components/home/RecentlySold";
import Footer from "../components/Footer";

const CATEGORIES = [
  "Games & Activities",
  "Classic",
  "Action & Adventure",
  "Children's",
  "Business & Career Growth",
  "Comics",
  "Fantasy",
];

const BREADCRUMBS = ["Books", "Literature & Fiction", "Genre Fiction"];

function ReadersDashboard () {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addToCart = useCallback((item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.some((cartItem) => cartItem._id === item._id)
        ? prevCart
        : [...prevCart, item];
  
      localStorage.setItem("cart", JSON.stringify(updatedCart)); 
      console.log(localStorage.getItem("cart"));

      return updatedCart;
      
    });

    navigate("/cartsummary"); 
  }, [navigate]);

  const handleSearch = useCallback(async (searchQuery, filterType) => {
    setQuery(searchQuery);
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://booksdotcom.onrender.com/api/v1/products/search?${filterType}=${encodeURIComponent(
          searchQuery
        )}`
      );

      const fetchedProducts =
        response.data.products?.products || response.data.products || [];
        fetchedProducts.forEach((book) => {
          console.log("Book:", book.title, "Formats:", book.formats); 
        });
      setResults(fetchedProducts);
    } catch (err) {
      console.error("Error fetching books:", err);
      setError("Failed to fetch books. Please try again later.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar2
        cartItems={cart}
        cartItemCount={cart.length}
        addToCart={addToCart}
        onSearch={handleSearch}
      />

      <div className="w-full flex flex-row gap-3 font-font1 mt-4 overflow-x-auto whitespace-nowrap px-4">
        {CATEGORIES.map((category, index) => (
          <button
            key={category}
            className="hover:text-orange-600 transition-colors duration-200 focus:outline-none"
          >
            {category} {index < CATEGORIES.length - 1 && "|"}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-3 pt-12 px-4">
        {BREADCRUMBS.map((item, index) => (
          <p key={item} className="text-gray-600">
            {item} {index < BREADCRUMBS.length - 1 && ">"}
          </p>
        ))}
      </div>

      {query && (
        <div className="mt-6 px-4">
          {loading ? (
            <div className="flex items-center justify-center">
              <p className="text-lg">🔄 Loading Books...</p>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center p-4 bg-red-50 rounded">
              {error}
            </div>
          ) : (
            <SearchResults
              query={query}
              results={results}
              addToCart={addToCart}
            />
          )}
        </div>
      )}

     

      <div className="px-4 py-8">
        <Popular />
        <RecentlySold />
        <Footer/>
      </div>
    </div>
  );
};

export default ReadersDashboard;
