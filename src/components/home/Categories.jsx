import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: "https://booksdotcom.onrender.com/api/v1",
  timeout: 10000,
});

const CategoryButton = ({ name, href, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      bg-customWhite 
      text-customBlack 
      font-medium 
      py-2 
      px-6 
      border-2 
      border-customBlack 
      rounded-full
      transition-colors 
      ${isActive ? "bg-customBlue" : "hover:bg-customBlue"}
    `}
  >
    <Link href={href}>{name}</Link>
  </button>
);

function Categories({
  title = "Categories",
  containerClassName = "",
  onCategoryClick = () => {},
  activeCategory = null,
}) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/category/");

        let processedData = response.data;

        if (response.data && response.data.categories) {
          processedData = response.data.categories;
        }

        if (!Array.isArray(processedData)) {
          if (typeof processedData === "object") {
            processedData = Object.values(processedData);
          } else {
            throw new Error("Invalid data format received from API");
          }
        }

        const validCategories = processedData
          .map((category) => ({
            _id: category._id || category.id || String(Math.random()),
            name: category.name || category.title || "Unnamed Category",
            href: category.href || "#",
          }))
          .filter((category) => category.name);

        setCategories(validCategories);
        setError(null);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to fetch categories. Please try again later."
        );
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-customBlack"></div>
    </div>
  );

  const ErrorMessage = ({ message }) => (
    <div className="text-red-500 p-4 rounded-md bg-red-50 border border-red-200">
      <p>{message}</p>
    </div>
  );

  if (isLoading) {
    return (
      <section className="container mx-auto py-8 text-center">
        <LoadingSpinner />
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-8 text-center">
        <ErrorMessage message={error} />
      </section>
    );
  }

  const categoriesToRender = Array.isArray(categories) ? categories : [];

  return (
    <section
      id="categories"
      className={`relative container pb-8 mx-auto flex flex-col ${containerClassName}`}
    >
      <div className="flex flex-col font-font2 text-customBlack text-center">
        <h1 className="text-5xl font-light font-font2 mb-6">{title}</h1>
      </div>
      <div className="container mx-auto flex">
        <ul className="flex flex-wrap justify-center gap-4">
          {categoriesToRender.map((category) => (
            <li key={category._id}>
              <CategoryButton
                name={category.name}
                href={category.href}
                isActive={activeCategory === category._id}
                onClick={() => onCategoryClick(category)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Categories;
