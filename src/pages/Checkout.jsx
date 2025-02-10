import { useNavigate } from "react-router-dom";

function Checkout({cartItems}) {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border p-4 mb-3 rounded-lg">
            <p>
              {item.name} - {item.price}
            </p>
          </div>
        ))
      )}
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4"
        onClick={() => "alert proceed to payment gateway"}
      >
        Pay Now
      </button>
    </div>
  );
}
export default Checkout;
