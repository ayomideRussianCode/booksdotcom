import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token); 
      navigate("/home"); 
    } else {
      console.error("Authentication failed: No token found");
      navigate("/login");
    }
  }, [navigate]);

  return <p>Authenticating...</p>;
};

export default AuthRedirect;
