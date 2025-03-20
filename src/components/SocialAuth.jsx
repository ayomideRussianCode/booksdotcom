import React, { useEffect, useState } from 'react';

const SocialAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getQueryParams = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get('token'); 
    };

    const tokenFromUrl = getQueryParams();
    if (tokenFromUrl) {
      setToken(tokenFromUrl); 
      localStorage.setItem('authToken', tokenFromUrl); 
      // window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleGoogleSignup = () => {
    window.location.href = 'http://booksdotcom.onrender.com/api/v1/auth/google';
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        className="py-2 px-8 border rounded-lg hover:bg-gray-50 flex items-center justify-center"
        onClick={handleGoogleSignup}
      >
        <img src="/google.png" alt="Google" className="h-6 w-6" />
      </button>

      {token && <p>Token: {token}</p>}
      <button
        className="py-2 px-8 border rounded-lg hover:bg-gray-50 flex items-center justify-center"
        onClick={() => console.log("Facebook login")}
      >
        <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
      </button>
      <button
        className="py-2 px-8 border rounded-lg hover:bg-gray-50 flex items-center justify-center"
        onClick={() => console.log("Apple login")}
      >
        <img src="/basil_apple.png" alt="Apple" className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SocialAuth;