import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("title");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query, filterType);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border rounded-full px-2"
      >
        <option value="title">Title</option>
        <option value="isbn">ISBN</option>
        <option value="author">Author</option>
        <option value="publisher">Publisher</option>
        <option value="category">Category</option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-full px-4 py-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
