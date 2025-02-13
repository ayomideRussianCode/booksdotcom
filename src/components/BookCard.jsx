import React from "react";
import { useCart } from "../context/CartContext";


const BookCard = ({ book }) => {
  const { toggleCartItem } = useCart();

  if (!book || !book.coverImage) {
    return <div className="text-red-500">Error: Book data is missing.</div>;
  }

  const formatDetails = book.formats?.map((format) => ({
    type: format.type,
    price: format.price ? `$${format.price.toFixed(2)}` : "Price not available",
  })) || [];

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-6 bg-white shadow-md rounded-lg w-full max-w-4xl mx-auto font-font1 capitalize">
      <div className="w-full md:w-1/3 flex justify-center">
        {book.coverImage.length > 0 ? (
          <img
            src={book.coverImage[0]} 
            alt={book.title || "No title"}
            className="w-48 h-64 object-cover rounded-lg shadow"
          />
        ) : (
          <div className="flex items-center justify-center w-48 h-64 bg-gray-200 text-gray-500 rounded-lg shadow">
            No Image
          </div>
        )}
      </div>

      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
            {book.title || "Unknown Title"}
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            {book.description || "No description available."}
          </p>
          <small className="text-gray-500 text-xs md:text-sm block mb-2">
            ISBN: {book.ISBN || "N/A"}
          </small>
          <p className="text-customBlue text-sm md:text-base font-bold">
            Author:{" "}
            {book.author && book.author.length > 0
              ? book.author.join(", ")
              : "Unknown Author"}
          </p>

          <div className="mt-2">
            <h4 className="text-gray-800 font-semibold">Formats & Prices:</h4>
            {formatDetails.length > 0 ? (
              formatDetails.map((format, index) => (
                <p key={index} className="text-gray-600 text-sm">
                  {format.type.charAt(0).toUpperCase() + format.type.slice(1)}:{" "}
                  <span className="font-bold">{format.price}</span>
                </p>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No format available</p>
            )}
          </div>
        </div>

        <button
          onClick={() => toggleCartItem(book)}
          className="mt-4 w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-customBlack px-4 py-2 rounded-full transition-all duration-300"
          disabled={!book}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};


export default BookCard;
