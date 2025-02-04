import React from "react";

const BookCard = ({ book, onViewDetails }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="w-full md:w-1/3 h-48 bg-gray-200">
        {book.coverImage ? (
          <img
            src={book.coverImage[0]}
            alt={book.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between w-full md:w-2/3">
        <div>
          <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-700 mb-1">{book.description}</p>
          <p className="text-gray-500 text-sm">ISBN: {book.ISBN}</p>
          <p className="text-gray-500 text-sm">
            Author:{" "}
            {Array.isArray(book.author) ? book.author.join(", ") : book.author}
          </p>
        </div>
        <button
          onClick={() => onViewDetails(book)}
          className="mt-4 self-start bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
