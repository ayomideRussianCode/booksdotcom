import kidBooks from "../../Fixtures/BestKidsBooks.json";

function BestKidsBooks() {
  return (
    <section id="best-selling">
      <div className="max-w-6xl font-font1 flex flex-col px-5 mx-auto mt-32 text-center">
        <h2 className="text-xl font-extralight  uppercase font-font2 pb-6">
          Best Children's Books
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-font1">
        {kidBooks.map((book) => (
          <div
            key={book.id}
            className=" mx-auto border border-customAsh rounded-lg shadow-md overflow-hidden"
          >
            <img src={book.image} alt={book.title} className=" w-56 h-64 p-4 mx-auto" />
            <div className="p-4 text-center">
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
