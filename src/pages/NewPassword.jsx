function NewPassword() {
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
            Set new Password
          </h2>
          <p className="text-xs text-center text-customAsh mb-6">
            Must be at least 8 characters
          </p>

          <form>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-customAsh text-sm font-medium"
              ></label>
              <input
                type="password"
                id="password"
                placeholder="Enter your new password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-customAsh text-sm font-medium"
              ></label>
              <input
                type="password"
                id="password"
                placeholder="Confirm your new password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>
            <button className="w-full bg-customBlue text-customWhite py-2 mt-10 rounded-full">
              Send in 4-digit code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
