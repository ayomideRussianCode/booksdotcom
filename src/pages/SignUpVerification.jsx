import axios from "axios";
import { useEffect, useState } from "react";
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

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    console.log("Saved token in useEffect:", savedToken);
    if (!savedToken) {
      setError(
        "Your session has expired. Please request a new verification code."
      );
      setTimeout(() => navigate("/login"), 3000);
    }
  }, [navigate]);


  async function handleVerification(code) {
    if (!code) {
      setError("Please enter the verification code.");
      return;
    }

    setLoading(true);
    setError("");

    const currentToken = localStorage.getItem("authToken");
    if (!currentToken) {
      setError(
        "Your session has expired. Please request a new  verification code."
      );
      setLoading(false);
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("otp", code);

      console.log("Using Token:", currentToken);

      console.log(`Bearer ${currentToken}`);
      console.log("Bearer " + currentToken )
      const response = await axios.patch(
        "https://booksdotcom.onrender.com/api/v1/auth/activation",
        formData,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      

      


     
      console.log("Token before API call:", currentToken);
      console.log("Full API response:", response.data);

      const newToken = response.data?.currentToken || currentToken;
      if (newToken) {
        localStorage.setItem("authToken", newToken);
        console.log(
          "Token stored after verification:",
          localStorage.getItem("authToken")
        );
      }

      if (response.status === 200) {
        if (newToken) {
          localStorage.setItem("authToken", newToken);
          console.log("Token stored after verification:", newToken);
        }
        alert("Verification successful! You can now pick a role.");
        navigate("/roleselection");
      }
      
    } catch (err) {
      console.error("Error details:", err);
      if (!err.response) {
        setError("Network error. Please check your connection and try again.");
      } else if (err.response.status === 400) {
        setError("Invalid code. Please try again.");
      } else {
        setError(
          err.response?.data?.message ||
            "An error occurred during verification."
        );
      }
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
            onVerify={handleVerification}
            onResend={() => navigate("/resendverification")}
            disabled={loading || !token}
          />
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default SignUpVerification;
