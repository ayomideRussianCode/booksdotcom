import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import CodeField from "../components/CodeField";

function SignUpVerification() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleVerification(code) {
    if (!code) {
      setError("Please enter the verification code.");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError(
          "Your session has expired. Please request a new verification code."
        );
        setLoading(false); // Stop loading here to prevent indefinite spinner
        return;
      }

      const formData = new URLSearchParams();
      formData.append("otp", code);

      const response = await axios.patch(
        "https://booksdotcom.onrender.com/api/v1/auth/activation",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`, // Fixed extra space
          },
        }
      );

      if (response.status === 200) {
        alert("Verification successful! You can now log in.");
        navigate("/login");
      }
    } catch (err) {
      console.error("Error details:", err.response);
      setError(
        err.response?.data?.message || "An error occurred during verification."
      );
    } finally {
      setLoading(false);
    }
  }

  const handleResend = async () => {
    setLoading(true);
    setError(""); // Clear any previous errors
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("User is not authenticated. Please log in again.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/init/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Verification code resent! Please check your email.");
      }
    } catch (err) {
      console.error("Resend error:", err.response);
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
        <Illustration src="/SigninImg.png" alt="Sign Up" />
        <div className="w-full md:w-1/2 p-8">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
          <Title text="Enter the verification code sent to your email." />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <CodeField
            onVerify={handleVerification}
            onResend={handleResend}
            disabled={loading}
          />
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default SignUpVerification;
