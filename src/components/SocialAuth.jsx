function SocialAuth() {
  return (
    <div className="flex justify-center space-x-4">
      <button
        className="py-2 px-8 border rounded-lg hover:bg-gray-50"
        onClick={() => console.log("Google login")}
      >
        <img src="/google.png" alt="Google" className="h-6 w-6" />
      </button>
      <button
        className="py-2 px-8 border rounded-lg hover:bg-gray-50"
        onClick={() => console.log("Facebook login")}
      >
        <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
      </button>
      <button
        className="py-2 px-8 border rounded-lg hover:bg-gray-50"
        onClick={() => console.log("Apple login")}
      >
        <img src="/basil_apple.png" alt="Apple" className="h-6 w-6" />
      </button>
    </div>
  );
}

export default SocialAuth;
