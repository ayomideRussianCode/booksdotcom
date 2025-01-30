import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import FormField from "../components/FormField";
import Button from "../components/Button";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    setLoading(true);
    setError("");
    setSuccessMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/forget",
        { email }
      );
      if (response.status === 200) {
        setSuccessMessage("Password reset code sent! Please check your email.");
        setTimeout(() => navigate("/resetcode"), 2000);
      }
    } catch (err) {
      console.error("Resend error:", err.response);
      setError(
        err.response?.data?.message ||
          "Failed to process forgot password request."
      );
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccessMessage("");
  };

  return (
    <LayOutWrapper>
      <div className="flex w-full max-w-4xl bg-customWhite">
        <Illustration src="/SigninImg.png" alt="Forgot Password" />
        <div className="w-full md:w-1/2 p-8">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
          <Title text="Enter registered Email Address" />

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}

          <FormField
            label="Enter your Email Address"
            type="email"
            value={email}
            onChange={handleInputChange}
          />

          <Button
            text={loading ? "Sending..." : "Send Reset Code "}
            onClick={handleForgotPassword}
            disabled={loading}
          />
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default ForgotPassword;
