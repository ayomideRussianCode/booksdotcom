import { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const BookSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query, filterType) => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://booksdotcom.onrender.com/api/v1/products/search?${filterType}=${query}`
      );
      console.log("Full Response:", response);
      setResults(response.data.products || []);
    } catch (error) {
      console.error("Error fetching search results", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search for Books</h2>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((book) => (
              <li key={book.id}>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>
                <p>Category: {book.category}</p>
                <p>Publisher: {book.publisher}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
