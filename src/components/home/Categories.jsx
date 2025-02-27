import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import Logo from '../Logo'
import Title from '../Title';
import Description from "../Description";
import { useNavigate } from 'react-router-dom';

function Categories  ()  {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const api = useMemo(() => axios.create({
    baseURL: 'https://booksdotcom.onrender.com/api/v1',
  }), []);
  

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    console.log("Token before API request:", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  const fetchCategories = useCallback(async () => {
  try {
      const response = await api.get('/category');
      console.log("Fetched categories:", response.data); 
      
      setCategories(response.data.categories || []);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError(err.response?.data?.message || 'Failed to fetch categories');
      setIsLoading(false);
    }
  }, [api]);
  

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const toggleCategory = useCallback((categoryId) => {
    setSelectedCategories((prev) => 
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  }, []);
  

  
  const savePreferences = async () => {

    try {
      const token = localStorage.getItem("authToken");

  
      if (!token) {
        console.error("No token found in localStorage");
        setError("Authentication required. Please log in.");
        navigate("/login");  
        return;
      }
  
      const headers = {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json",
      };
  
      const response = await api.post(
        "/auth/user/preference/recommend",
        { preferences: selectedCategories },  
        { headers }
      );
  
      console.log("Preferences saved successfully:", response.data);
  
      localStorage.removeItem("authToken"); 
  
      navigate("/login");
  
    } catch (err) {
      console.error("Error saving preferences:", err.response);
      setError(err.response?.data?.message || "Failed to save preferences");
    }
  };
  
  
      
    
  const skipSelection = () => {
    console.log("User skipped selection");
    localStorage.removeItem("authToken");
    navigate("/login");  }

  if (isLoading) return <div className="text-center p-4">Loading categories...</div>;
  if (error) {
    return (
      <div className="text-red-500 p-4">
        {error}
        <button onClick={fetchCategories} className="underline ml-2">Retry</button>
      </div>
    );
  }
  
  return (
   
    <section className="p-6 max-w-4xl mx-auto">
         <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
        <Title text="Indicate Your Books Categories"  className='font-font2 text-customBlack mb-2 text-3xl'/>
        <Description text="Let us know your book categories as a member in our community" className='font-font1 mb-8 text-customAsh  text-xs ' />
      <div className="flex flex-wrap gap-2 mb-12">
      {Array.isArray(categories) && categories.length > 0 ? (
  categories.map(category => (
    <button
      key={category._id}
      onClick={() => toggleCategory(category._id)}
      className={`px-6 py-2 rounded-full border transition-colors
        ${selectedCategories.includes(category._id)
          ? 'bg-blue-500 text-white border-customBlue hover:bg-customBlue'
          : 'bg-white text-gray-700 border-customBlack hover:border-blue-500'
        }`}
    >
      {category.name}
    </button>
  ))
) : (
  <p>Loading categories...</p>
)}

      </div>
      <div className="flex  justify-end gap-2">
        <button onClick={skipSelection}
        className='px-6 py-2 bg-customWhite border-2 border-customBlue text-customBlue rounded-full hover:bg-customBlue hover:text-customWhite'>
          Skip
        </button>
        <button
          onClick={savePreferences}
          disabled={selectedCategories.length === 0}
          className="px-6 py-2 rounded-full bg-blue-500  text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Submit 
        </button>
      </div>
    </section>
  );
};

export default Categories;