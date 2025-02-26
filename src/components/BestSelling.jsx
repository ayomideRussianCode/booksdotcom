import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function BestSelling () {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationID = useRef(0);
  const isDragging = useRef(false);

  const slidesPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const getSlidesToShow = () => {
    if (window.innerWidth >= 1024) return slidesPerView.desktop;
    if (window.innerWidth >= 640) return slidesPerView.tablet;
    return slidesPerView.mobile;
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <AiFillStar key={i} className="text-yellow-500" />
        ) : (
          <AiOutlineStar key={i} className="text-gray-400" />
        )
      );
    }
    return stars;
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

  useEffect(() => {
    const handleResize = () => setCurrentIndex(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const touchStart = (index) => (event) => {
    isDragging.current = true;
    startX.current = event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
    animationID.current = requestAnimationFrame(animation);
    sliderRef.current.style.transition = "none";
  };

  const touchMove = (event) => {
    if (isDragging.current) {
      const currentPosition = event.type.includes("mouse")
        ? event.pageX
        : event.touches[0].clientX;
      currentTranslate.current =
        prevTranslate.current + currentPosition - startX.current;
    }
  };

  const touchEnd = () => {
    isDragging.current = false;
    cancelAnimationFrame(animationID.current);

    const movedBy = currentTranslate.current - prevTranslate.current;

    if (movedBy < -100 && currentIndex < books.length - getSlidesToShow()) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (movedBy > 100 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    sliderRef.current.style.transition = "transform 0.3s ease-out";
    currentTranslate.current = currentIndex * -100 / getSlidesToShow();
    prevTranslate.current = currentTranslate.current;
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}%)`;
  };

  const animation = () => {
    sliderRef.current.style.transform = `translateX(${currentTranslate.current}%)`;
    if (isDragging.current) requestAnimationFrame(animation);
  };

  return (
    <section id="best-selling" className="relative py-12 font-font1">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extralight uppercase font-font2">
            Best Selling Books
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            ref={sliderRef}
            style={{
              transform: `translateX(-${
                currentIndex * (100 / getSlidesToShow())
              }%)`,
            }}
            onMouseDown={touchStart(currentIndex)}
            onMouseMove={touchMove}
            onMouseUp={touchEnd}
            onMouseLeave={() => {
              if (isDragging.current) touchEnd();
            }}
            onTouchStart={touchStart(currentIndex)}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
          >
            {books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book._id}
                  className="min-w-[100%] md:min-w-[50%] lg:min-w-[25%] px-3"
                >
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
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2 capitalize">
                        {book.description}
                      </p>
                      <div className="flex items-center mb-2">
                        {renderStars(book.averageRating)}
                        <span className="ml-2 text-sm text-gray-500">
                          ({book.numberOfReviews} reviews)
                        </span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-lg font-bold text-customBlue">
                          {book.price}
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
      </div>
    </section>
  );
};

export default BestSelling;
