import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import FormField from "../components/FormField";
import Button from "../components/Button";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Get token from URL
  const token = new URLSearchParams(location.search).get("token");

  const handleReset = async () => {
    setLoading(true);
    setError("");

    try {
      // Validation checks
      if (!token) {
        setError("Invalid reset link. Please request a new one.");
        setLoading(false);
        return;
      }

      if (!newPassword || !confirmPassword) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      if (newPassword !== confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      if (newPassword.length < 6) {
        setError("Password must be at least 6 characters long");
        setLoading(false);
        return;
      }

      // Make reset request with bearer token
      await axios.put(
        "https://booksdotcom.onrender.com/api/v1/auth/reset",
        {
          password: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // Show success message and redirect
      alert("Password has been reset successfully!");
      navigate("/login");
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            setError("Invalid password format or token expired.");
            break;
          case 401:
            setError(
              "Invalid or expired reset token. Please request a new one."
            );
            console.log("response from backend", err);
            break;
          default:
            setError("Failed to reset password. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  // If no token is present, show error and redirect
  if (!token) {
    return (
      <LayOutWrapper>
        <div className="flex w-full max-w-4xl bg-customWhite">
          <div className="w-full p-8 text-center">
            <p className="text-red-500">
              Invalid reset link. Please request a new one.
            </p>
            <button
              onClick={() => navigate("/forgotpassword")}
              className="mt-4 text-blue-600 hover:text-blue-500"
            >
              Back to Forgot Password
            </button>
          </div>
        </div>
      </LayOutWrapper>
    );
  }

  return (
    <LayOutWrapper>
      <div className="flex w-full max-w-4xl bg-customWhite">
        <Illustration src="/SigninImg.png" alt="Reset Password" />
        <div className="w-full md:w-1/2 p-8">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
          <Title text="Reset Password" />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="space-y-4">
            <FormField
              label="New Password"
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <FormField
              label="Confirm Password"
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              text={loading ? "Resetting..." : "Reset Password"}
              onClick={handleReset}
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
      </div>
    </LayOutWrapper>
  );
};

export default ResetPassword;
