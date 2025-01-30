import axios from "axios";
import { useState } from "react";
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

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      if (!email || !password) {
        setError("Both email and password are required.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/login",
        { email, password }
      );

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
        navigate("/home");
      }
    } catch (err) {
      console.error("Login error:", err.response);
      setError(
        err.response?.data?.message ||
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
          />
          <FormField
            label="Password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button
              onClick={() => navigate("/forgotpassword")}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            text={loading ? "Logging in..." : "Log In"}
            onClick={handleLogin}
            disabled={loading}
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
