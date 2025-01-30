import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import CodeField from "../components/CodeField";

function ResetCode() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleResetCode(code) {
    if (!code) {
      setError("Please enter the verification code.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError("Your session has expired. Please request a new reset code.");
        setLoading(false);
        return;
      }

      const formData = new URLSearchParams();
      formData.append("otp", code);

      console.log("Sending Request with:");
      console.log("Token:", token);
      console.log("OTP:", code);
      console.log("Using Token:", token);

      const response = await axios.patch(
        "https://booksdotcom.onrender.com/api/v1/auth/activation",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Verification successful! You can now set a new password.");
        localStorage.removeItem("authToken");
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

  return (
    <LayOutWrapper>
      <div className="flex w-full max-w-4xl bg-customWhite">
        <Illustration src="/SigninImg.png" alt="Sign Up" />
        <div className="w-full md:w-1/2 p-8">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
          <Title text="Enter the verification code sent to your email." />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <CodeField
            onVerify={handleResetCode}
            onResend={() => navigate("/setnewpassword")}
            disabled={loading}
          />
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default ResetCode;
