import newBooks from "../../Fixtures/PopularBooks.json";

function NewArrivals() {
  return (
    <section id="popular-books">
      <div className="max-w-6xl font-font1 flex flex-col mx-auto ">
        <h2 className="text-2xl text-left font-extralight  font-font2 py-4">
          New Arrivals
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6 font-font1">
        {newBooks.map((newBook) => (
          <div
            key={newBook.id}
            className="border border-customAsh rounded-lg shadow-md overflow-hidden"
          >
            <div>
              <img
                src={newBook.image}
                alt={newBook.title}
                className=" w-full h-full p-6 object-cover"
              />
            </div>
            <div className="pl-6 ">
              <h2 className="text-lg font-medium text-customBlack">
                {newBook.title}
              </h2>
              <p className="text-sm  text-customAsh">{newBook.author}</p>
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
