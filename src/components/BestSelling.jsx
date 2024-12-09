import books from "../../src/Fixtures/Books.json";

function BestSelling() {
  return (
    <section id="best-selling">
      <div className="max-w-6xl font-font1 flex flex-col px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-extralight text-center uppercase font-font2 pb-6">
          Best selling books
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-font1">
        {books.map((book) => (
          <div
            key={book.id}
            className="border border-customAsh rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={book.image}
              alt={book.title}
              className=" p-6"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-medium text-customBlack">
                {book.title}
              </h2>
              <p className="text-xl  text-customAsh">{book.author}</p>
              <small className="text-sm text-customBlue font-bold">{book.price}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSelling;
