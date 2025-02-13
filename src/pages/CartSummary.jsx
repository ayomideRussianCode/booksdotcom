import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ onClose }) => {
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  console.log("Cart Items:", cartItems);

  const [selectedFormats, setSelectedFormats] = useState({});
  const navigate = useNavigate();

  if (!Array.isArray(cartItems)) {
    return <p>No items in cart</p>;
  }

  const handleFormatChange = (bookId, format) => {
    setSelectedFormats((prev) => ({
      ...prev,
      [bookId]: format,
    }));
    updateCartItem(bookId, format);
  };

  const totalPrice = (cartItems ?? []).reduce((total, item) => {
    const selectedFormat = selectedFormats[item.id] || item.formats[0];
    return total + (selectedFormat?.price || 0);
  }, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold">Cart Summary</h2>
      <button onClick={onClose} className="absolute top-2 right-2">✖</button>

      {(cartItems?.length ?? 0) === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((book) => (
            <div key={book.id} className="border-b py-2">
              <h4 className="font-medium">{book.title}</h4>
              <select
                onChange={(e) =>
                  handleFormatChange(book.id, JSON.parse(e.target.value))
                }
                className="border p-1 rounded"
              >
                {book.formats.map((format, index) => (
                  <option key={index} value={JSON.stringify(format)}>
                    {format.type} - ${format.price.toFixed(2)}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeFromCart(book.id)}
                className="text-red-500 text-sm ml-2"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-4 font-bold">Total: #{totalPrice.toFixed(2)}</div>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-customBlue  hover:bg-customBlue w-full py-2 mt-3 rounded-full"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartSummary;
