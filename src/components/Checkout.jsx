
function Checkout({ cart }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Proceed to Payment
        </button>
      )}
    </div>
  );
}

export default Checkout;
