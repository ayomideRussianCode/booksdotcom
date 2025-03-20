import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";
import Title from "../components/Title";

const AuthorProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    biography: "",
    img: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfile({ ...profile, img: file });

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
    }
  };

  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!profile.biography.trim()) {
      newErrors.biography = "Biography is required";
    }
    if (!profile.img) {
      newErrors.img = "Profile image URL is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        message: "Please fill in all required fields",
        type: "error",
      });
      return;
    }

  
    try {

      const token = localStorage.getItem("authToken");

      
      const formData = new FormData();
      formData.append('biography', profile.biography);
      formData.append('img', profile.img); 
  
      console.log("Submitting file:", profile.img);
      
  
      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/author/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setStatus({
          message: "Profile created successfully! Redirecting to login...",
          type: "success",
        });

        setTimeout(() => {
          localStorage.removeItem("authToken");
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error("Error creating profile:", error);

      if (error.response) {
        setStatus({
          message:
            error.response.data?.message ||
            "An error occurred. Please try again later.",
          type: "error",
        });
      } else if (error.request) {
        setStatus({
          message: "Network error. Please check your internet connection.",
          type: "error",
        });
      } else {
        setStatus({
          message: "Unexpected error. Please try again.",
          type: "error",
        });
      }
    }
  };

  return (
    <>
      <Logo src="/Logo.png" />
      <Title
        text="Create  Author's Profile"
        className="mb-6 font-font2 text-4xl"
      />

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-4 space-y-6 font-font1"
      >
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Author Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Biography <span className="text-red-500">*</span>
              </label>
              <textarea
                value={profile.biography}
                onChange={(e) =>
                  setProfile({ ...profile, biography: e.target.value })
                }
                placeholder="Tell us about yourself..."
                className={`w-full min-h-32 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                ${errors.biography ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.biography && (
                <p className="mt-1 text-sm text-red-500">{errors.biography}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Profile Image <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="w-32 h-32 object-cover rounded-full mt-2"
                />
              )}

              {errors.img && (
                <p className="mt-1 text-sm text-red-500">{errors.img}</p>
              )}
            </div>
          </div>
        </div>

        {/* <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Add Achievement (Optional)</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input 
              value={achievement.title}
              onChange={(e) => setAchievement({...achievement, title: e.target.value})}
              placeholder="Achievement title"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea 
              value={achievement.description}
              onChange={(e) => setAchievement({...achievement, description: e.target.value})}
              placeholder="Achievement description"
              className="w-full min-h-20 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div> */}

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>

        {status.message && (
          <div
            className={`p-4 rounded-md ${
              status.type === "error"
                ? "bg-red-50 text-red-700 border border-red-200"
                : "bg-green-50 text-green-700 border border-green-200"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </>
  );
};

export default AuthorProfile;
