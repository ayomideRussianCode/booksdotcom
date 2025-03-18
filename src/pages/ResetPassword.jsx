import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setToken(token);
    } else {
      setError("Invalid reset link. Please request a new one.");
    }
  }, []);

  const handleReset = async () => {

    console.log("Reset button clicked");
    console.log("Current token:", token);
    console.log("New password:", newPassword);
    console.log("Confirm password:", confirmPassword);
    
    setLoading(true);
    setError("");

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

    try {
      console.log("Using token from localStorage:", token);

      await axios.put(
        "https://booksdotcom.onrender.com/api/v1/auth/reset",
        { password: newPassword },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Password has been reset successfully!");
      localStorage.removeItem("authToken"); 
      navigate("/login");
    } catch (err) {
      console.error("Error resetting password:", err);

      if (err.response) {
        switch (err.response.status) {
          case 400:
            setError("Invalid password format or token expired.");
            break;
          case 401:
            setError("Invalid or expired reset token. Please request a new one.");
            break;
          case 404:
            setError("User not found. Please check your email and try again.");
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

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={loading}
      />

      <button  onClick={(e) => {
    console.log("Button clicked via direct handler");
    handleReset();}} disabled={loading} className=" px-4 py-2 rounded-full bg-customBlue">
        {loading ? "Resetting..." : "Reset Password"}
      </button>
    </div>
  );
}

export default ResetPassword;