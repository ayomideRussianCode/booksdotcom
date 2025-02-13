import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from "../components/Logo";
import Title from "../components/Title";

const AuthorProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    biography: '',
    img: ''
  });
  
//   const [achievement, setAchievement] = useState({
//     title: '',
//     description: ''
//   });
  
  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!profile.biography.trim()) {
      newErrors.biography = 'Biography is required';
    }
    if (!profile.img.trim()) {
      newErrors.img = 'Profile image URL is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({
        message: 'Please fill in all required fields',
        type: 'error'
      });
      return;
    }

    try {
      const response = await axios.post('https://booksdotcom.onrender.com/api/v1/auth/author/profile', profile);
      
      if (response.status === 200) {
        // if (achievement.title && achievement.description) {
        //   await axios.post('https://booksdotcom.onrender.com/api/v1/auth/author/achievement', achievement);
        // }

        setStatus({
          message: 'Profile created successfully! Redirecting to login...',
          type: 'success'
        });
        
        setTimeout(() => {
          localStorage.removeItem('token');
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setStatus({
          message: 'Unauthorized. Please log in again.',
          type: 'error'
        });
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setStatus({
          message: 'Error creating profile: ' + (error.response?.data?.message || error.message),
          type: 'error'
        });
      }
    }
  };

  return (
   <>
   <Logo src="/Logo.png"/>
   <Title text="Create  Author's Profile" className='mb-6 font-font2 text-4xl'/>

   <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 space-y-6 font-font1">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Author Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Biography <span className="text-red-500">*</span>
            </label>
            <textarea 
              value={profile.biography}
              onChange={(e) => setProfile({...profile, biography: e.target.value})}
              placeholder="Tell us about yourself..."
              className={`w-full min-h-32 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                ${errors.biography ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.biography && (
              <p className="mt-1 text-sm text-red-500">{errors.biography}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image URL <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              value={profile.img}
              onChange={(e) => setProfile({...profile, img: e.target.value})}
              placeholder="Enter image URL"
              className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.img ? 'border-red-500' : 'border-gray-300'}`}
            />
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
        <div className={`p-4 rounded-md ${
          status.type === 'error' 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {status.message}
        </div>
      )}
    </form>
   </>
    
  );
};

export default AuthorProfile;