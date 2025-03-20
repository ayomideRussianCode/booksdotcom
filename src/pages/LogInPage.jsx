import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import FormField from "../components/FormField";
import Button from "../components/Button";
import Description from "../components/Description";
import Divider from "../components/Divider";
import RedirectMessage from "../components/RedirectMessage";
import SocialAuth from "../components/SocialAuth";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !password) {
      setError("Both email and password are required.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return; 

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/login",
        { email, password }
        
      );
      console.log("Full Login Response:", response.data);

      if (response.status === 200 && response.data?.token) {
        const { token } = response.data;
        console.log("Login Successful! Token:", response.data.token);

        localStorage.setItem("authToken", token);

        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        navigate("/home");
      }
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);

      setError(
        err.response?.data?.message ||
          err.message ||
          "An error occurred while logging in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayOutWrapper>
      <Illustration src="/SigninImg.png" alt="Login" />
      <div className="w-full md:w-1/2 p-8">
        <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
        <Title text="Log in to your account" />
        <Description text="Welcome Back! Select Method to login" />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <SocialAuth />
        <Divider text="OR" />
        <div className="space-y-4">
          <FormField
            label="Email Address"
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Enter your email address"
          />
          <FormField
            label="Password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Enter your password"
          />

          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                aria-label="Remember my email"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button
              onClick={() => navigate("/forgotpassword")}
              className="text-sm text-blue-600 hover:text-blue-500"
              aria-label="Forgot password"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            text={loading ? "Logging in..." : "Log In"}
            onClick={handleLogin}
            disabled={loading}
            aria-label="Login button"
          />

          <RedirectMessage
            message="New user?"
            linkText="Create an account"
            linkHref="/signup"
          />
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default LogInPage;
