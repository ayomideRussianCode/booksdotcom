function GoogleSignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-customColor1 font-font1">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-3xl p-6 md:p-10">
        <h1 className=" flex flex-row gap-3 pb-4 text-2xl font-medium text-customAsh">
          <img src="/google.png" alt="Google" /> Sign in with Google
        </h1>
        <hr />
        <div className="flex flex-col md:flex-row pt-20">
          <div className="flex-1">
            <p className="text-3xl medium text-customBlack mt-4">
              Choose an account to continue{" "}
              {/* <span className="text-blue-600 cursor-pointer hover:underline">
                books.com
              </span> */}
            </p>
          </div>

          <div className="flex-1 mt-6 md:mt-0">
            <div className="space-y-4">
              <div className="flex items-center pt-6 cursor-pointer">
                <img
                  src="/roundimg.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-medium text-gray-800">Philip King</p>
                  <p className="text-sm text-gray-500">philip@chou.design</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center  cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full">
                  P
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">Philip King</p>
                  <p className="text-sm text-gray-500">philip@chou.design</p>
                </div>
              </div>
              <hr />

              <div className="flex items-center  cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-customAsh rounded-full">
                  <span className="material-icons"></span>
                </div>
                <div className="ml-4 ">
                  <p className="font-medium text-gray-800">
                    Use Another Account
                  </p>
                  <hr className="mt-6" />
                  <p className="mt-6 text-xs text-customAsh">
                    To continue, Google will share your name, email address,
                    language preference, and profile picture with books.com.
                    Before using this app, you can review{" "}
                    <a href="/" className="text-customBlue hover:underline">
                      books.com's privacy policy
                    </a>{" "}
                    and{" "}
                    <a href="/" className="text-blue-600 hover:underline">
                      terms of service
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <p>English (United States)</p>
          <div className="flex space-x-4">
            <a href="/" className="hover:underline">
              Help
            </a>
            <a href="/" className="hover:underline">
              Privacy
            </a>
            <a href="/" className="hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleSignUp;
