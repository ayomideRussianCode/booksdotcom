import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import FormField from "../components/FormField";
import Button from "../components/Button";

function ResendVerification() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown); // Cleanup the interval
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleResend = async () => {
    setError("");
    setSuccessMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Please enter your email address.");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setResendDisabled(true);
    setTimer(60);

    setLoading(true);
    setResendDisabled(true);
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);

      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/init/verify",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("authToken", token);
        setSuccessMessage(
          "Verification code resent successfully! Check your email."
        );
        setTimeout(() => navigate("/verify"), 2000);
      }
    } catch (err) {
      console.error("Error response:", err.response?.data?.errors);
      setError(
        err.response?.data?.message ||
          "An error occurred while resending the code."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayOutWrapper>
      <div className="flex w-full max-w-4xl bg-customWhite">
        <Illustration src="/SigninImg.png" alt="Resend Verification" />
        <div className="w-full md:w-1/2 p-8">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
          <Title text="Enter registered email" />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}
          <FormField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            text={
              loading
                ? "Resending..."
                : resendDisabled
                ? `Resend Code (${timer}s)`
                : "Resend Code"
            }
            onClick={handleResend}
            disabled={loading || resendDisabled}
          />
          {successMessage && (
            <button
              className="mt-4 text-customBlue underline"
              onClick={() => navigate("/verify")}
            >
              Go to Verification
            </button>
          )}
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default ResendVerification;
