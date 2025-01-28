import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Description from "../components/Description";

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState("User");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRoleSelection = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Authentication failed. Please log in again.");
        return;
      }

      const response = await axios.patch(
        "https://booksdotcom.onrender.com/api/v1/auth/assignrole",
        { role: selectedRole.toLowerCase() },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        navigate(selectedRole === "User" ? "/categories" : "/creator");
      }
    } catch (err) {
      console.error("Role assignment error:", err.response);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-customColor1">
      <div className="bg-customWhite p-6 rounded-3xl shadow-lg w-full max-w-5xl">
        <div className="flex justify-center mb-4">
          <Logo src="/logo.png" alt="BOOKSDOTCOM" />
        </div>

        <Title
          className="text-4xl font-font2 font-normal text-center mb-2"
          text="Indicate your Role"
        />
        <Description
          className="text-customAsh font-font1 text-center mb-6"
          text="Let us know how you want to be identified in our community."
        />

        {error && (
          <p className="text-red-500 text-sm font-font1 text-center mb-4">
            {error}
          </p>
        )}

        <div className="space-y-4 font-font1">
          <button
            onClick={() => setSelectedRole("User")}
            className={`w-full py-3 rounded-xl border ${
              selectedRole === "User"
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            } transition duration-200`}
          >
            User
          </button>
          <button
            onClick={() => setSelectedRole("Creator")}
            className={`w-full py-3 rounded-xl border ${
              selectedRole === "Creator"
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            } transition duration-200`}
          >
            Creator
          </button>
        </div>

        <div className="flex flex-row gap-4 pt-48 font-font1">
          <button
            onClick={() => navigate("/login")}
            className="text-customBlue  rounded-full border-2 border-customBlue px-8 py-2"
          >
            Skip
          </button>
          <button
            onClick={handleRoleSelection}
            disabled={loading}
            className="px-8 py-2 bg-customBlue text-customWhite rounded-full hover:bg-customBlue disabled:bg-gray-300"
          >
            {loading ? "Processing..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
