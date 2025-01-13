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
    <div className="flex ">
      {accts.map((acct, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 border rounded-lg mb-4 hover:customAsh cursor-pointer"
        >
          <div>
            <img
              src={acct.image}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <p>{acct.name}</p>
          <p>{acct.email}</p>
        </div>
      ))}
    </div>
  );
}
export default AccountList;
