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
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map((book) => (
              <li key={book._id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author?.join(", ") || "Unknown"}</p>
                <p><strong>ISBN:</strong> {book.ISBN || "N/A"}</p>
                <p><strong>Category:</strong> {book.categoryid?.name || "N/A"}</p>
                <p><strong>Publisher:</strong> {book.publisher || "N/A"}</p>

                {book.formats && book.formats.length > 0 ? (
                  <>
                    <p><strong>Available Formats:</strong></p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {book.formats.map((format) => (
                        <li key={format._id} style={{ marginBottom: "10px" }}>
                          <strong>Type:</strong> {format.type} - <strong>Price:</strong> ${format.price}
                          {format.type === "ebook" || format.type === "audiobook" ? (
                            <span> | <a href={format.downloadLink} target="_blank" rel="noopener noreferrer">Download</a></span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>No available formats</p>
                )}
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