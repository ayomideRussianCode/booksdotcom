// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart }) => {
  // const [isRegistered, setIsRegistered] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("#", "")),
    0
  );

  const handleCheckout = () => {
    // if (!isRegistered) {
    //   alert("Please register before proceeding.");
    //   return navigate("/register");
    // }
    // window.location.href = "https://checkout.paystack.com/your-public-key";
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg">
      <h2 className="text-xl font-bold">Checkout</h2>
      <p className="mt-2">
        Total: <span className="font-semibold">#{totalAmount.toFixed(2)}</span>
      </p>
      <button
        onClick={handleCheckout}
        className="w-full bg-green-600 text-white py-2 mt-4 rounded-lg"
      >
        Pay
      </button>
    </div>
  );
};

export default Checkout;
