import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/BookCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResultsPage() {
  const queryParams = useQuery();
  const filterType = queryParams.get("filterType") || "title";
  const query = queryParams.get("query") || "";

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchResults = async () => {
      setLoading(true);
      let apiUrl = `https://booksdotcom.onrender.com/api/v1/products/search`;
      if (filterType === "title") {
        apiUrl += `?title=${query}`;
      } else if (filterType === "isbn") {
        apiUrl += `?isbn=${query}`;
      } else if (filterType === "author") {
        apiUrl += `?author=${query}`;
      } else if (filterType === "publisher") {
        apiUrl += `?publisher=${query}`;
      } else if (filterType === "category") {
        apiUrl += `?category=${query}`;
      } else {
        apiUrl += `?query=${query}`;
      }

      try {
        const response = await axios.get(apiUrl);
        setResults(
          response.data.products?.products || response.data.products || []
        );
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, filterType]);

  return (
    <div className="container mx-auto px-4 py-8 font-font1 capitalize">
      <h2 className="text-3xl font-bold mb-10">
        Search Results for "
        <span className="text-customBlue font-font2">{query}</span>"
      </h2>
      {loading ? (
        <p className="text-gray-500">Loading search results...</p>
      ) : results.length === 0 ? (
        <p className="text-gray-600">No results found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {results.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onViewDetails={() => console.log(book)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
