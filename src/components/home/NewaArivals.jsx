import newBooks from "../../Fixtures/PopularBooks.json";

function NewArrivals() {
  return (
    <section id="popular-books">
      <div className="max-w-6xl font-font1 flex flex-col px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-extralight text-center uppercase font-font2 pb-6">
          Popular Books
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-font1">
        {newBooks.map((newBook) => (
          <div
            key={newBook.id}
            className="border border-customAsh rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={newBook.image}
              alt={newBook.title}
              className=" w-64 h-64 p-6"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-medium text-customBlack">
                {newBook.title}
              </h2>
              <p className="text-xl  text-customAsh">{newBook.author}</p>
              <small className="text-sm text-customBlue font-bold ">
                {newBook.price}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
