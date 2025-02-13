import BookCard from "./BookCard";

const SearchResults = ({ query, results, addToCart }) => {
  console.log("Rendering SearchResults with:", results);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Search Results for "<span className="text-blue-500">{query}</span>"
      </h2>
      {results.length === 0 ? (
        <p className="text-gray-600">No results found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {results.map((book) => (
            <BookCard
              key={book._id  }
              book={book}
              className="block p-4 border-b hover:bg-gray-100"
              />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
