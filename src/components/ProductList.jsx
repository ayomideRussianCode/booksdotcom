
import BookCard from "./BookCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((book) => (
        <BookCard key={book._id} book={book} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
