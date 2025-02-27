import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
 

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
   
    const urlToken = new URLSearchParams(location.search).get("token");

   console.log("URL Token:", urlToken);
   console.log("Full URL:", window.location.href);

    
    if (urlToken) {
      setToken(urlToken);
    } else {
       const storedToken = localStorage.getItem("resetToken");
       if (storedToken) {
        setToken(storedToken);
      } else {
        setError("Invalid reset link. Please request a new one.");
      }
    }
  }, [location]);

   

  const handleReset = async () => {
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
      console.log("Sending token:", token);

      const response = await axios.put(
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
      />

      <input
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={handleReset} disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </button>
    </div>
  );
}

export default ResetPassword;
