import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import Title from "../"

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
       
        <div className="flex justify-center mb-4">
          <Logo src="/logo.png" alt="BOOKSDOTCOM" className="h-10" />
        </div>

        <Title className="text-lg font-semibold text-center mb-2" text="Indicate your Role"/>
        <Description className="text-gray-500 text-center mb-6" text="Let us know how you want to be identified in our community."/>

       
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <div className="space-y-4">
          <button
            onClick={() => setSelectedRole("User")}
            className={`w-full py-3 rounded-lg border ${
              selectedRole === "User"
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            } transition duration-200`}
          >
            User
          </button>
          <button
            onClick={() => setSelectedRole("Creator")}
            className={`w-full py-3 rounded-lg border ${
              selectedRole === "Creator"
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300"
            } transition duration-200`}
          >
            Creator
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-500 underline"
          >
            Skip
          </button>
          <button
            onClick={handleRoleSelection}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
          >
            {loading ? "Processing..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
