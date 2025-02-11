import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cart } = useCart();
  const [email, setEmail] = useState("");
  const publicKey = "paystack-public-key";
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    price: totalPrice * 100,
    publicKey: publicKey,
    currency: "NGN",
  };

  const onSuccess = async (response) => {
    console.log("Payment Success:", response);

    try {
      await axios.post("http://localhost:4001/api/v1/pay/", {
        email: email,
        price: totalPrice,
        cartItems: cart,
        transactionRef: response.reference,
      });

      alert("Payment Successful!");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Payment was successful, but order could not be saved.");
    }
  };

  const onClose = () => {
    alert("Payment cancelled.");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <p className="mb-2">Total: ₦{totalPrice}</p>

      <input
        type="email"
        placeholder="Enter your email"
        className=" border border-customBlue p-2 w-96 mb-4 outline-customBlue"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={() => initializePayment(onSuccess, onClose)}
        className="bg-customBlue rounded-lg px-4 py-2 text-customWhite">
        Pay with Paystack
      </button>
    </div>
  );
};

export default Checkout;
