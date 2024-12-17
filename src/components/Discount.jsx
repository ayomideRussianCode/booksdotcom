function Discount() {
  return (
    <section id="discount">
      <div className="container bg-customWhite flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <img src="/Discountimage.png" alt="DiscountImage" />
        </div>
        <div>
          <h2 className="max-w-xs text-4xl font-font1 font-normal text-center md:text-right ">
            30% Discount On All Items.
            Hurry Up!
          </h2>
          <div className=" flex justify-center md:text-right">
            <a
              className=" mt-6 px-10 py-2 text-customWhite font-font1 bg-customBlue rounded-full"
              href="a"
            >
              Shop Collections
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
