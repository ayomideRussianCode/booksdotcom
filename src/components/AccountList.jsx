function AccountList() {
  const accts = [
    {
      name: "Philip King",
      email: "philip@chou.design",
      image: "/roundimg.png",
    },
    {
      name: "Philip King",
      email: "philip@chou.design",
      image: "/roundimg.png",
    },
  ];
  return (
    <div className="flex flex-col ">
      {accts.map((acct, index) => (
        <div
          key={index}
          className="flex items-center justify-between  mb-4 hover:customAsh cursor-pointer"
        >
          <div>
            <img
              src={acct.image}
              alt="Profile"
              className="w-12 h-10rounded-full"
            />
          </div>
          <p> {acct.name}</p>
          <p> {acct.email}</p>
        </div>
      ))}
      <hr />
    </div>
  );
}
export default AccountList;

// import AccountList from "../components/AccountList";
// function GoogleSignUp() {
//   return (
//     <div className="min-h-screen flex flex-col justify-between items-center bg-customColor1 font-font1">
//       <div className="w-full max-w-6xl h-96 shadow-lg rounded-3xl p-6  bg-customWhite">
//         <div className="flex flex-row mb-32 space-y-12 md:w-1/2">
//           <div>
//             <h1 className="flex flex-row gap-4 text-2xl font-medium text-customAsh pb-2  ">
//               {" "}
//               <img src="/google.png" alt="Googlelogo" /> Sign in with Google
//             </h1>
//             <hr className="w-100 bg-customAsh " />
//           </div>
//         </div>
//         <div className="flex flex-row justify-between">
//           <div className="">
//             <h2 className="p-4 text-4xl text-customBlack font-medium">
//               Choose an Account to Sign Up
//             </h2>
//           </div>
//           <div>
//             <AccountList />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GoogleSignUp;
