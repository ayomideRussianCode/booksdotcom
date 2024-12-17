import kidBooks from "../../Fixtures/BestKidsBooks.json";

function BestKidsBooks() {
  return (
    <section id="best-selling">
      <div className="max-w-6xl font-font1 flex flex-col mx-auto">
        <h2 className="text-2xl text-left font-extralight font-font2 py-4">
          Best Children's Books
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6 font-font1">
        {kidBooks.map((book) => (
          <div
            key={book.id}
            className="border border-customAsh rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={book.image}
              alt={book.title}
              className=" w-full h-full object-cover p-6"
            />
            <div className="pl-6">
              <h2 className="text-lg font-medium text-customBlack">
                {book.title}
              </h2>
              <p className="text-sm  text-customAsh">{book.author}</p>
              <small className="text-sm text-customBlue font-bold ">
                {book.price}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestKidsBooks;
