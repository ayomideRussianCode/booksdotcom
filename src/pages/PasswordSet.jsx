function PasswordSet() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customWhite font-font1">
      <div className="flex w-full max-w-4xl  bg-customWhite">
        <div className="hidden rounded-lg w-1/2 items-center justify-center md:flex">
          <img
            src="/forgotpassword.png"
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div>
            <img className="hidden md:flex" src="/Logo.png" alt="Logo" />
          </div>
          <h2 className="text-2xl pb-2 font-bold text-center text-customBlack">
            All done!
          </h2>
          <p className="text-xs text-center text-customAsh mb-6">
            Your password has been reset
          </p>

          <div>
            <button className="w-full bg-customBlue py-2 mt-10 rounded-full">
              <a className="text-customWhite" href="/login">
                Log In
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordSet;
