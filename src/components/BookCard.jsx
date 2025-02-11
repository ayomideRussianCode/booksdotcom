import React from "react";
import { useCart } from "../context/CartContext";


const BookCard = ({ book, addToCart }) => {
  const { toggleCartItem } = useCart();

  
  return (
    <div className="flex flex-col md:flex-row pt-6 gap-6 capitalize font-font1">
      <div className="w-full md:w-1/2 lg:w-auto">
        {book.coverImage ? (
          <img src={book.coverImage[0]} alt={book.title} className="max-w-sm" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 lg:w-96">
        <div>
          <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-700 mb-1">{book.description}</p>
          <small className="text-gray-500 text-sm">ISBN: {book.ISBN}</small>
          <p className="text-customBlue text-sm font-bold">
            Author:{" "}
            {Array.isArray(book.author) ? book.author.join(", ") : book.author}
          </p>
        </div>
        <button
          onClick={() => toggleCartItem(book)}
          className="mt-4 self-start bg-yellow-500 hover:bg-yellow-700 text-customBlack px-4 py-2 rounded-full"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
