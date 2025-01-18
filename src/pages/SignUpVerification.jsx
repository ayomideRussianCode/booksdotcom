import axios from "axios";
import { useState } from "react";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Description from "../components/Description";
import CodeField from "../components/CodeField";

function SignUpVerification() {
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleVerification(params) {
    if (!verificationCode) {
      setError("Please enter the verification code.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/activation",
        { code: verificationCode },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      alert("Verification successful! You can now log in");
    } catch (err) {
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
          <Description text="Enter the verification code sent to your email." />
          <CodeField
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button className="{`p-2">
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>
    </LayOutWrapper>
  );
}
export default SignUpVerification;
