import Footer from "../components/Footer";
import BestSelling from "../components/home/BestSelling";
import Categories from "../components/home/Categories";
import FeaturedAuthors from "../components/home/FeaturedAuthors";
import NavBar from "../components/home/NavBar";
import NewArrivals from "../components/home/NewArrivals";
import NewsLetter from "../components/home/NewsLetter";
import PopularBooks from "../components/home/Popular";
import RecentlySold from "../components/home/RecentlySold";

function ReadersDashboard() {
  return (
    <>
      <NavBar />
      <Categories />
      <BestSelling />
      <PopularBooks />
      <RecentlySold />
      <NewArrivals />
      <FeaturedAuthors />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default ReadersDashboard;
