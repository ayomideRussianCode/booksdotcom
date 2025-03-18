import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("title");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query, filterType);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex w-full gap-2 items-center px-2 sm:px-0"
    >
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border rounded-full px-2 py-2 text-sm w-24 sm:w-auto"
      >
        <option value="title">Title</option>
        <option value="isbn">ISBN</option>
        <option value="author">Author</option>
        <option value="publisher">Publisher</option>
        <option value="category">Category</option>
      </select>

      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)} 
          className="border rounded-full px-10 py-2 w-full text-sm sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="hidden sm:block bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
