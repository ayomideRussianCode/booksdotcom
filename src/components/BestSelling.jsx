import BestSelling1 from '../assets/product-1 1.png';
import BestSelling2 from '../assets/product-2 1.png';
import BestSelling3 from '../assets/product-6 1.png';
import BestSelling4 from '../assets/product-item3 1.png';

function BestSelling() {
  return (
    <section id="best-selling">
      <div className="max-w-6xl flex flex-col px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-extralight text-center uppercase font-font2 mb-4">Best selling books</h2>
      </div>
      <div>
        <img src={BestSelling1} alt=""/>
        <img src={BestSelling2} alt=""/>
        <img src={BestSelling3} alt=""/>
        <img src={BestSelling4} alt=""/>
      </div>

    </section>
  );
}

export default BestSelling;
