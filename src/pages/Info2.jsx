import Categories from "../components/home/Categories";
import Logo from "../components/Logo";

function Info2() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customColor1 font-font1">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-3xl p-6 md:p-10">
        <div className="flex justify-center">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" className="" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-font3 text-3xl  text-customBlack font-bold">
            Indicate your Books Categoriess
          </h2>
          <small className="text-customAsh pt-2 pb-4 font-font1">
            Let us know who you want to be identified as in our membership
            community
          </small>
        </div>
        <Categories />
      </div>
    </div>
  );
}

export default Info2;
