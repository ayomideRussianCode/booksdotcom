import Logo from "../components/Logo";

function Info1() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customColor1 font-font1">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-3xl p-6 md:p-10">
        <div className="flex justify-center">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" className="" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-font3 text-3xl  text-customBlack font-bold">
            Indicate your Personality
          </h2>
          <small className="text-customAsh pt-2 pb-4">
            Let us know who you want to be identified as in our membership
            community
          </small>

          <div className="pb-4">
            <input
              type="text"
              placeholder="User"
              className="w-full  border border-customBlack rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBlack"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Creator"
              className="w-full border border-customBlack rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-customBlack"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info1;
