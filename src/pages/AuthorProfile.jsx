import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from "../components/Logo";
import Title from '../components/Title';

function AuthorProfile  () {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    biography: '',
    img: ''
  });
  
  const [achievement, setAchievement] = useState({
    title: '',
    description: ''
  });
  
  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const createProfile = async () => {
    try {
      const response = await axios.post('/auth/author/profile', profile);
      
      if (response.status === 200) {
        setStatus({
          message: 'Profile created successfully! Redirecting to login...',
          type: 'success'
        });
        setTimeout(() => {
          handleLogout();
        }, 2000);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setStatus({
          message: 'Unauthorized. Please log in again.',
          type: 'error'
        });
        handleLogout();
      } else {
        setStatus({
          message: 'Error creating profile: ' + (error.response?.data?.message || error.message),
          type: 'error'
        });
      }
    }
  };

  const updateProfile = async () => {
    try {
      const response = await axios.patch('/auth/author/profile', profile);
      
      if (response.status === 200) {
        setStatus({
          message: 'Profile updated successfully!',
          type: 'success'
        });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setStatus({
          message: 'Unauthorized. Please log in again.',
          type: 'error'
        });
        handleLogout();
      } else if (error.response?.status === 400) {
        setStatus({
          message: 'Invalid profile data',
          type: 'error'
        });
      } else {
        setStatus({
          message: 'Error updating profile: ' + (error.response?.data?.message || error.message),
          type: 'error'
        });
      }
    }
  };

  const addAchievement = async () => {
    try {
      const response = await axios.post('/auth/author/achievement', achievement);
      
      if (response.status === 200) {
        setStatus({
          message: 'Achievement added successfully!',
          type: 'success'
        });
        setAchievement({ title: '', description: '' });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setStatus({
          message: 'Unauthorized. Please log in again.',
          type: 'error'
        });
        handleLogout();
      } else {
        setStatus({
          message: 'Error adding achievement: ' + (error.response?.data?.message || error.message),
          type: 'error'
        });
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 font-font1">
        <Logo src='/Logo.png'/>
        <Title text="Create your Profile as an Author" className='text-4xl  font-font2 mb-6'/>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Author's Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Biography
            </label>
            <textarea 
              value={profile.biography}
              onChange={(e) => setProfile({...profile, biography: e.target.value})}
              placeholder="Tell us about yourself..."
              className="w-full min-h-32 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input 
              type="text"
              value={profile.img}
              onChange={(e) => setProfile({...profile, img: e.target.value})}
              placeholder="Enter image URL"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex space-x-2">
            <button
              onClick={createProfile}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Profile
            </button>
            <button
              onClick={updateProfile}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Add Achievement</h2>
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

          <button
            onClick={addAchievement}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Achievement
          </button>
        </div>
      </div>

      {status.message && (
        <div className={`p-4 rounded-md ${
          status.type === 'error' 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {status.message}
        </div>
      )}
    </div>
  );
};

export default AuthorProfile;