import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Cart Summary</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 shadow-md rounded-lg">
          {cart.map((item) => (
            <div key={item._id} className="border-b py-2">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">{item.author}</p>
            </div>
          ))}
          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
