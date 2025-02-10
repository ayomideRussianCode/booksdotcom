function Book({ book }) {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-auto">
        {book.coverImage ? (
          <img src={book.coverImage[0]} alt={book.title} className="max-w-sm" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 lg:w-96">
        <h3 className="text-2xl font-bold">{book.title}A Novel</h3>
        <p className="text-gray-500">Softcopy</p>
        <div>
          <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-700 mb-1">{book.description}</p>
          <p className="text-gray-500 text-sm">ISBN: {book.ISBN}</p>
          <p className="text-gray-500 text-sm">
            Author:{" "}
            {Array.isArray(book.author) ? book.author.join(", ") : book.author}
          </p>
        </div>
        <small>
          <a href="/featuredauthors" className="text-blue-500">
            {book.author}
          </a>{" "}
          (Author, Narrator)
        </small>
      </div>
    </>
  );
}

export default Book;
