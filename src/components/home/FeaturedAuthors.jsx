import authorsImg from "../../Fixtures/FeaturedAuthors.json";

function FeaturedAuthors() {
  return (
    <section id="featured-authors">
      <div className="max-w-6xl font-font1 flex flex-col mx-auto ">
        <h2 className="text-2xl font-extralight  font-font2 py-4">
          Featured Authors
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6 font-font1">
        {authorsImg.map((img) => (
          <div key={img.id} className=" overflow-hidden">
            <div>
              <img src={img.image} alt={img.title} className=" " />
            </div>
            <div className="text-center">
              {img.title}
              <h3 className="text-sm  text-customWhite">{img.author}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedAuthors;
