

const SignUpPage = () => {
  return (
    <div className="bg-customWhite min-h-screen font-font1 flex flex-col  md:flex-row">
      <div className="w-ful bg-customWhite shadow-lg md:w-1/2">
      <img src="../../public/Signupimg.png" alt="Sign Up" className="w-full h-full  object-cover   hidden lg:flex"/>
      </div>
      <div className="  bg-customWhite  flex items-center justify-center">
        <img src="../../public/Logo.png"alt="BOOKS.COM" />
        <h2 className="text-4xl text-customBlack font-semibold mb-4">Sign up your BOOKS.COM</h2>
      </div>
    </div>
  );
};

export default SignUpPage;








// import React from "react";
// import signUpImg from '../assets/Frame 53.png';
// import logo from "../assets/logo.svg";
// import googleLogo from "../assets/Frame 24.png";
// import facebookLogo from "../assets/Frame 25.png";
// import appleLogo from "../assets/Frame 26.png";

// const SignUpPage = () => {
//   return (
//     <div className="container bg-customWhite font-font1 flex items-center justify-center mx-auto md:space-y-0 md:flex-row ">
//       <div className="flex max-w-4xl  ">
//         <div className="items-center justify-center md:flex hidden ">
//           <img
//             src={signUpImg}
//             alt="Sign Up"
//             className="w-full h-full object-contain flex ml-[-200px] mt-16 "
//           />
//         </div>

//         <div className="w-full p-14 md:w-1/2 ">
//         <img  className="pb-10 pt-6 "src={logo}alt="logo" />
//           <h2 className="text-2xl font-bold text-center text-customBlack">
//             Sign Up to Your BOOKS.COM
//           </h2>
//           <p className="text-sm text-center text-customAsh mb-6">
//             Create Your Account with just a Few Steps
//           </p>

//           <div className="flex space-x-4 justify-center mb-6">
//             <button className="p-2 px-4 pt-2 rounded-full ">
//               <img src={googleLogo} alt="Google" className="w-16 h-6" />
//             </button>
//             <button className="p-2 px-4 pt-2 rounded-full ">
//               <img src={facebookLogo} alt="Facebook" className="w-16 h-6" />
//             </button>
//             <button className="p-2 px-4 pt-2 rounded-full ">
//               <img src={appleLogo }alt="Apple" className="w-16 h-6" />
//             </button>
//           </div>

//           <div className="flex items-center justify-between mb-4">
//             <hr className="w-1/3 border-customAsh" />
//             <span className="text-customAsh text-sm">OR</span>
//             <hr className="w-1/3 border-customAsh" />
//           </div>

//           <form>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-customAsh text-sm font-medium">

//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Name"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-customAsh text-sm font-medium">

//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-customAsh text-sm font-medium">

//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="confirm-password" className="block text-customAsh text-sm font-medium">

//               </label>
//               <input
//                 type="password"
//                 id="confirm-password"
//                 placeholder="Confirm your password"
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             <div className="mb-6 flex items-center">
//               <input type="checkbox" className="mr-2" />
//               <span className="text-sm text-customAsh">
//                 I agree with the{" "}
//                 <a href="a" className="text-customBlue hover:underline">
//                   Privacy Policy
//                 </a>
//               </span>
//             </div>

//             <button className="w-full bg-customBlue text-white py-2 rounded-lg hover:bg-customBlue">
//               Sign Up
//             </button>
//           </form>

//           <p className="text-sm text-center text-customWhite mt-6">
//             Already have an account?{" "}
//             <a href="a" className="text-customBlue hover:underline">
//               Log In here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
