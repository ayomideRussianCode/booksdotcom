import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const { state } = useLocation();
  const { book } = state;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-gray-600">{book.author}</p>
      <p className="mt-4">{book.description}</p>
      <p className="mt-2">Price: ${book.price}</p>
    </div>
  );
};

export default BookDetails;