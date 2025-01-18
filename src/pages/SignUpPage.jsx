import { useState } from "react";
import axios from "axios";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Description from "../components/Description";
import Divider from "../components/Divider";
import Form from "../components/Form";
import Button from "../components/Button";
import RedirectMessage from "../components/RedirectMessage";

function SignUpPage() {
  const [formData, setFormData] = useState({});

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword =
        "Incorrect password. Please input correct password.";
    } else if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Password is required";

      // if (!checkBoxData)
      //   newErrors.checkBoxData =
      //     "Kindly agree with the privacy policy to proceed.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      try {
        const response = await axios.post(
          "https://booksdotcom.onrender.com/api/v1/auth/register",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        alert("Signed Up successfully", response.data);
      } catch (error) {
        if (error.response) {
          alert("Error data:", error.response.data);
        } else if (error.request) {
          alert("No response from server. Please try again.");
        } else {
          alert("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
  }

  const formFields = [
    {
      type: "text",
      name: "username",
      placeholder: "Name",
      value: formData.username,
      onChange: handleChange,
      error: errors.username,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: formData.email,
      onChange: handleChange,
      error: errors.email,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      value: formData.password,
      onChange: handleChange,
      error: errors.password,
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      value: formData.confirmPassword,
      onChange: handleChange,
      error: errors.confirmPassword,
      disabled: loading,
    },
  ];

  const checkBoxData = {
    label: "I agree with the",
    linkText: "Privacy Policy",
    linkHref: "/privacypolicy",
  };

  return (
    <LayOutWrapper>
      <div className="flex w-full max-w-4xl bg-customWhite">
        <Illustration src="/SigninImg.png" alt="/Signin-Illustration" />

        <div className="w-full md:w-1/2 p-8">
          <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
          <Title text="Sign Up to BOOKS.COM" />
          <Description text="Create your account with just few steps" />
          <Divider text="OR" />
          <Form fields={formFields} checkbox={checkBoxData} />
          <Button text="Sign Up" onClick={handleSubmit} />
          <RedirectMessage
            message="Already have an account"
            linkText="Log in"
            linkHref="/login"
          />
        </div>
      </div>
    </LayOutWrapper>
  );
}

export default SignUpPage;
