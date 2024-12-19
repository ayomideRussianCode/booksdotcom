function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customWhite font-font1">
      <div className="flex w-full max-w-4xl  bg-customWhite">
        <div className="hidden rounded-lg w-1/2 items-center justify-center md:flex">
          <img
            src="/Loginimg.png"
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div>
            <img className="hidden md:flex" src="/Logo.png" alt="Logo" />
          </div>
          <h2 className="text-2xl pb-2 font-bold text-center text-customBlack">
            Login to Your Account
          </h2>
          <p className="text-xs text-center text-customAsh mb-6">
            Welcome back! Select a method to log in.
          </p>

          <div className="flex space-x-4 justify-center mb-6">
            <button className="px-8 py-2 rounded-lg border-2 border-customAsh ">
              <img src="/google.png" alt="Google" className="w-4 h-4" />
            </button>
            <button className="px-8 rounded-lg border-2 border-customAsh ">
              <img src="/facebook.png" alt="Facebook" className="w-4 h-4" />
            </button>
            <button className="px-8 rounded-lg border-2 border-customAsh ">
              <img src="/Basil_apple.png" alt="Apple" className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <hr className="w-1/3 border-customAsh" />
            <span className="text-customAsh text-sm">OR</span>
            <hr className="w-1/3 border-customAsh" />
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium"
              ></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-customBlue text-sm font-medium"
              ></label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-customBlack">Remember me</span>
              </label>
              <a
                href="/forgotpassword"
                className="text-sm text-customBlack hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button className="w-full bg-customBlue py-2 mt-10 rounded-full">
              <a className="text-customWhite" href="/home">
                Log In
              </a>
            </button>
          </form>

          <p className="text-sm text-center text-customBlack mt-6">
            New user?{" "}
            <a href="/signup" className="text-customBlue hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
