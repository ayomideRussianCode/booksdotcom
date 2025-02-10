import { useContext } from "react";
import { CartContext } from "./CartContext";

function AddToCartButton({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <button onClick={() => addToCart(book)}>
      <img src="./cart.png" alt="Cart" className="h-6 w-6" />
    </button>
  );
}

export default AddToCartButton;
