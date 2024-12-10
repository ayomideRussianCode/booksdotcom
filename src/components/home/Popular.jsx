import popularBooks from "../../Fixtures/PopularBooks.json";

function PopularBooks() {
  return (
    <section id="popular-books">
      <div className="max-w-6xl font-font1 flex flex-col px-5 mx-auto mt-32 text-center">
        <h2 className="text-xl font-extralight uppercase font-font2 pb-6">
          Popular Books
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-font1">
        {popularBooks.map((popularBook) => (
          <div
            key={popularBook.id}
            className=" mx-auto border border-customAsh rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={popularBook.image}
              alt={popularBook.title}
              className=" w-56 h-64 p-4 object-contain mx-auto"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-medium text-customBlack">
                {popularBook.title}
              </h2>
              <p className="text-sm  text-customAsh">{popularBook.author}</p>
              <small className="text-sm text-customBlue font-bold ">
                {popularBook.price}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularBooks;
