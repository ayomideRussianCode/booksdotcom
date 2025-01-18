import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import CodeField from "../components/CodeField";

function SignUpVerification() {
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleVerification(code) {
    if (!code) {
      setError("Please enter the verification code.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/activation",
        { code: verificationCode },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      alert("Verification successful! You can now log in");
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during verification."
      );
    } finally {
      setLoading(false);
    }
  }
  const handleResend = async () => {
    alert("Verification code resent!");
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
            onChange={(e) => setVerificationCode(e.target.value)}
            disabled={loading}
          />
        </div>
      </div>
    </LayOutWrapper>
  );
}
export default SignUpVerification;
