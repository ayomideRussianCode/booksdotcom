import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";

const BestSelling = () => {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://booksdotcom.onrender.com/api/v1/products/best/sellers",
          { params: { page: 1, limit: 10 } }
        );

        const bookList = response.data.products.products || [];
        setBooks(bookList);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < totalStars; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={`star-${i}`}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalf
            key={`half-star-${i}`}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        );
      } else {
        stars.push(
          <Star key={`empty-star-${i}`} className="w-4 h-4 text-gray-300" />
        );
      }
    }

    return stars;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= books.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? books.length - 1 : prev - 1));
  };

  return (
    <section id="best-selling" className="relative py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extralight uppercase font-font2">
            Best Selling Books
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesPerView.desktop)
                }%)`,
              }}
            >
              {books.length > 0 ? (
                books.map((book) => (
                  <div key={book._id} className="min-w-[25%] px-3">
                    <div className="border border-customAsh rounded-lg shadow-md overflow-hidden">
                      <div className="relative">
                        {book.isDiscounted && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                            Discount
                          </div>
                        )}
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="w-full h-64 object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `/api/placeholder/300/400`;
                          }}
                        />
                      </div>
                      <div className="p-6 font-font1">
                        <h2 className="text-base font-medium text-customBlack mb-1 capitalize">
                          {book.title}
                        </h2>
                        <p className="text-sm text-customAsh mb-2 capitalize">
                          {book.author.join(", ")}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {renderStars(book.averageRating || 0)}
                          </div>
                          <span className="text-sm text-gray-500">
                            ({book.numberOfReviews}{" "}
                            {book.numberOfReviews > 1 ? "reviews" : "review"})
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2 capitalize">
                          {book.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div></div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <p className="text-lg font-bold text-customBlue">
                            ${(10 + Math.random() * 20).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 w-full">
                  No books available
                </p>
              )}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
