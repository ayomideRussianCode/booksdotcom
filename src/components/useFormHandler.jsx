import { useState } from "react";
import { apiFetch } from "./apiFetch";

function useFormHandler(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, apiFetch) => {
    e.preventDefault();
    try {
      const response = await apiFetch(formData);
      return response;
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return { formData, handleChange, handleSubmit };
}
export default useFormHandler;
