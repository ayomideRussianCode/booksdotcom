import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import FormField from "../components/FormField";
import Button from "../components/Button";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      if (!email) {
        setError("Please enter your email address.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/forget",
        { email }
      );

      // Handle successful response (200)
      if (response.status === 200) {
        setSuccessMessage(
          "Reset link has been sent to your email. Please check your inbox."
        );
        // Wait for 3 seconds before redirecting to login
        setTimeout(() => {
          navigate("/resetpassword");
        }, 3000);
      }
    } catch (err) {
      // Handle specific error status codes
      if (err.response) {
        switch (err.response.status) {
          case 400:
            setError("Invalid email format. Please check your email address.");
            break;
          case 404:
            setError("User not found. Please check your email address.");
            break;
          default:
            setError("An error occurred. Please try again later.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayOutWrapper>
      <div className="flex w-full max-w-4xl bg-customWhite">
        <Illustration src="/SigninImg.png" alt="Reset Password" />
        <div className="w-full md:w-1/2 p-8">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
          <Title text="Forgot Password" />

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}

          <FormField
            label="Email Address"
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            text={loading ? "Processing..." : "Send Reset Link"}
            onClick={handleSubmit}
            disabled={loading}
          />

          <button
            onClick={() => navigate("/login")}
            className="mt-4 text-sm text-blue-600 hover:text-blue-500"
          >
            Back to Login
          </button>
        </div>
      </div>
    </LayOutWrapper>
  );
};

export default ForgotPasswordPage;
