import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import AuthButton from "../components/AuthButton";

function SignUpPage() {
  return (
    <LayOutWrapper>
      <div className="flex w-full max-w-4xl  bg-customWhite">
        <Illustration className="hidden rounded-lg w-1/2 items-center justify-center md:flex">
          <img
            src="/SigninImg.png"
            alt="Illustration"
            className="w-full h-auto"
          />
        </Illustration>

        <div className="w-full md:w-1/2 p-8">
          <div>
            <img className="hidden md:flex" src="/Logo.png" alt="Logo" />
          </div>
          <h2 className="text-2xl pb-2 font-bold text-center text-customBlack">
            Sign Up to BOOKS.COM
          </h2>
          <p className="text-xs text-center text-customAsh mb-6">
            Create your account with just few steps
          </p>

          <div className="flex space-x-4 justify-center mb-6">
            <AuthButton imgSrc="/google.png" altText="Google" />
            <AuthButton imgSrc="/facebook.png" altText="Facebook" />
            <AuthButton imgSrc="/basil_apple.png" altText="Apple" />
          </div>

          <div className="flex items-center justify-between mb-4">
            <hr className="w-1/3 border-customAsh" />
            <span className="text-customAsh text-sm">OR</span>
            <hr className="w-1/3 border-customAsh" />
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-customAsh text-sm font-medium"
              ></label>
              <input
                type="name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-customAsh text-sm font-medium"
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
                className="block text-customAsh text-sm font-medium"
              ></label>
              <input
                type="password"
                id="password"
                placeholder="Password"
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
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-customBlack">
                  I agree with the{" "}
                  <a
                    className="text-sm text-customBlue hover:underline"
                    href="privacypolicy"
                  >
                    Privacy Policy
                  </a>{" "}
                </span>
              </label>
            </div>

            <button className="w-full bg-customBlue py-2 mt-10 rounded-full">
              <a className="text-customWhite" href="/home">
                Sign Up
              </a>
            </button>
          </form>

          <p className="text-sm text-center text-customBlack mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-customBlue hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default SignUpPage;
