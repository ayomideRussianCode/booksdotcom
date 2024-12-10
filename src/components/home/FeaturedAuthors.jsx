import authorsImg from '../../Fixtures/FeaturedAuthors.json';

function FeaturedAuthors() {
  return (
    <section id="featured-authors">
      <div className="max-w-6xl font-font1 flex flex-col px-2 mx-auto mt-32">
        <h2 className="text-4xl font-extralight text-start uppercase font-font2 pb-4">
          Featured Authors
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-font1">
        {authorsImg.map((img) => (
          <div
            key={img.id}
            className=" overflow-hidden"
          >
            <img
              src={img.image}
              alt={img.title}
              className=" "
            />
            <div className="text-center">
              <h2 className="text-lg font-medium text-customBlack">
                {img.title}
                <p className="text-sm  text-customWhite">{img.author}</p>
              </h2>             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedAuthors;
