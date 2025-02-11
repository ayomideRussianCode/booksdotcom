import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar2 from "../components/NavBar2";
import SearchResults from "../components/SearchResults";
import Popular from "../components/home/Popular";
import RecentlySold from "../components/home/RecentlySold";
import ProductList from "../components/ProductList";

function PaymentDashboard() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addToCart = (item) => {
    console.log("Adding to cart:", item);
    setCart((prevCart) => {
      if (prevCart.some((cartItem) => cartItem._id === item._id)) {
        console.log("Adding to cart:", item);
        return prevCart; 
      }
      return [...prevCart, item];
    });
  };

  const handleSearch = async (searchQuery, filterType) => {
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

      setResults(fetchedProducts);
    } catch (error) {
      console.error("Error fetching books:", error);
      setResults([]);
      setError("Failed to fetch books. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  }, [results]);

  return (
    <div>
      <NavBar2
        cartItems={cart} 
        cartItemCount={cart.length}
        addToCart={addToCart}
        onSearch={handleSearch}
      />
      <div className="w-full flex flex-row gap-3 font-font1 mt-4 overflow-x-auto whitespace-nowrap">
        {[
          "Games & Activities",
          "Classic",
          "Action & Adventure",
          "Children's",
          "Business & Career Growth",
          "Comics",
          "Fantasy",
        ].map((category, index) => (
          <p key={index} className="cursor-pointer hover:text-orange-600">
            {category} |
          </p>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-3 pt-12">
        {["Books >", "Literature & Fiction >", "Genre Fiction"].map(
          (item, index) => (
            <p key={index} className="text-gray-600">
              {item}
            </p>
          )
        )}
      </div>
      {query && (
        <div className="mt-6">
          {loading ? (
            <p className="text-center">🔄Loading Books...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <SearchResults query={query} results={results} addToCart={addToCart} />
          )}
        </div>
      )}
      <div className="flex flex-col md:flex-row pt-6 gap-6">
        <div className="w-full md:w-1/2 lg:w-96 border-4 border-customColor1 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row gap-2">
            {[
              { type: "SoftCopy", price: "$14.99" },
              { type: "HardCopy", price: "$25.99" },
            ].map((item, index) => (
              <button
                key={index}
                className="w-full md:w-1/2 py-4 px-2 border border-customAsh rounded-lg"
              >
                <p>{item.type}</p>
                <p className="text-sm font-bold">{item.price}</p>
                <p className="text-sm">Available instantly</p>
              </button>
            ))}
          </div>
          <div className="flex flex-col pt-6">
            <button className="w-full py-4 px-2 border border-customAsh rounded-lg">
              <p>Audiobook</p>
              <p className="text-sm font-bold">$20.99</p>
              <p className="text-sm">Available instantly</p>
            </button>
            <button className="w-full border rounded-lg px-4 py-2 focus:outline-none text-customWhite bg-orange-500 mt-6">
              Limited-time Offer
            </button>
            <small className="mt-4 text-sm">
              Save over 20% off for all Copies of your choice
            </small>
            <button className="w-80 border rounded-full px-4 py-2 focus:outline-none text-customBlack bg-yellow-400 mt-6">
              Get this Deal
            </button>
          </div>
        </div>
      </div>
      <ProductList products={results} addToCart={addToCart} />
      <Popular />
      <RecentlySold />
    </div>
  );
}

export default PaymentDashboard;
