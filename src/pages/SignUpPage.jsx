import React from "react";
import signUpImg from '../assets/Frame 23.png';
import googleLogo from "../assets/Frame 24.png";
import facebookLogo from "../assets/Frame 25.png";
import appleLogo from "../assets/Frame 26.png";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customWhite font-font1">
      <div className="flex w-full max-w-4xl  ">
        <div className="hidden w-1/2 items-center justify-center md:flex ">
          <img
            src={signUpImg}
            alt="Bookshelf Illustration"
            className="max-w-xl h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-14">
          <h2 className="text-2xl font-bold text-center text-customBlack">
            Sign Up to Your BOOKS.COM
          </h2>
          <p className="text-sm text-center text-customAsh mb-6">
            Create Your Account with just a Few Steps
          </p>

          <div className="flex space-x-4 justify-center mb-6">
            <button className="p-2 px-4 pt-2 rounded-full ">
              <img src={googleLogo} alt="Google" className="w-16 h-6" />
            </button>
            <button className="p-2 px-4 pt-2 rounded-full ">
              <img src={facebookLogo} alt="Facebook" className="w-16 h-6" />
            </button>
            <button className="p-2 px-4 pt-2 rounded-full ">
              <img src={appleLogo }alt="Apple" className="w-16 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <hr className="w-1/3 border-customAsh" />
            <span className="text-customAsh text-sm">OR</span>
            <hr className="w-1/3 border-customAsh" />
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-customAsh text-sm font-medium">
                
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-customAsh text-sm font-medium">
                
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-customAsh text-sm font-medium">
                
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirm-password" className="block text-customAsh text-sm font-medium">
                
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6 flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-customAsh">
                I agree with the{" "}
                <a href="a" className="text-customBlue hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button className="w-full bg-customBlue text-white py-2 rounded-lg hover:bg-customBlue">
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-customWhite mt-6">
            Already have an account?{" "}
            <a href="a" className="text-customBlue hover:underline">
              Log In here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

