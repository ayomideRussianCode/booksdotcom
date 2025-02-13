
function ProductItem({ product, addToCart }) {
  console.log(addToCart);

  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
