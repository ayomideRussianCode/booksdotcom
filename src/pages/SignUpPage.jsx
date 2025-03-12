// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import LayOutWrapper from "../components/LayOutWrapper";
// import Illustration from "../components/Illustration";
// import Logo from "../components/Logo";
// import Title from "../components/Title";
// import Description from "../components/Description";
// import Divider from "../components/Divider";
// import Form from "../components/Form";
// import Button from "../components/Button";
// import RedirectMessage from "../components/RedirectMessage";
// import SocialAuth from "../components/SocialAuth";

// function SignUpPage() {
//   const [formData, setFormData] = useState({});

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const navigate = useNavigate();
//   async function handleSubmit() {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }
//     if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword =
//         "Incorrect password. Please input correct password.";
//     } else if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Password is required";
//     }
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setLoading(true);
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });

//       try {
//         const response = await axios.post(
//           "https://booksdotcom.onrender.com/api/v1/auth/register",
//           formData,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         localStorage.setItem("authToken", response.data.token);
//         alert("Signed Up successfully", response.data);
//         navigate("/verify");
//       } catch (error) {
//         if (error.response) {
//           alert("Error data:", error.response.data);
//         } else if (error.request) {
//           alert("No response from server. Please try again.");
//         } else {
//           alert("An unexpected error occurred");
//         }
//       } finally {
//         setLoading(false);
//       }
//     }
//   }

//   const formFields = [
//     {
//       type: "text",
//       name: "name",
//       placeholder: "Name",
//       value: formData.name,
//       onChange: handleChange,
//       error: errors.name,
//     },
//     {
//       type: "email",
//       name: "email",
//       placeholder: "Email",
//       value: formData.email,
//       onChange: handleChange,
//       error: errors.email,
//     },
//     {
//       type: "password",
//       name: "password",
//       placeholder: "Password",
//       value: formData.password,
//       onChange: handleChange,
//       error: errors.password,
//     },
//     {
//       type: "password",
//       name: "confirmPassword",
//       placeholder: "Confirm Password",
//       value: formData.confirmPassword,
//       onChange: handleChange,
//       error: errors.confirmPassword,
//       disabled: loading,
//     },
//   ];

//   const checkBoxData = {
//     label: "I agree with the",
//     linkText: " Privacy Policy ",
//     linkHref: "/privacypolicy",
//   };

//   return (
//     <LayOutWrapper>
//       <Illustration src="/SigninImg.png" alt="/Signin-Illustration" />
//       <div className="w-full md:w-1/2 p-8">
//         <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
//         <Title text="Sign Up to BOOKS.COM" />
//         <Description text="Create your account with just few steps" />
//         <SocialAuth />
//         <Divider text="OR" />
//         <Form fields={formFields} checkbox={checkBoxData} />
//         <Button text="Sign Up" onClick={handleSubmit} />
//         <RedirectMessage
//           message=" Already have an account? "
//           linkText=" Log in "
//           linkHref="/login"
//         />
//       </div>
//     </LayOutWrapper>
//   );
// }

// export default SignUpPage;






import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Description from "../components/Description";
import Divider from "../components/Divider";
import Form from "../components/Form";
import Button from "../components/Button";
import RedirectMessage from "../components/RedirectMessage";
import SocialAuth from "../components/SocialAuth";

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    

    setLoading(true);
    try {
      const signupData = {
        name: formData.name.trim(),
        email: formData.email.toLowerCase().trim(),
        password: formData.password
      };

      const response = await axios.post(
        "https://booksdotcom.onrender.com/api/v1/auth/register",
        signupData,
        {
          headers: {
            "Content-Type": "application/json"
          },
          timeout:50000
        }
      );
      
      if (response.status === 201 || response.status === 200) {
        console.log("Signup successful:", response.data);
        
        if (response.data.token) {
          localStorage.setItem("authToken", JSON.stringify(response.data.token));
          console.log("Token saved:", JSON.parse(localStorage.getItem("authToken")));
        }
        
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      
        navigate("/verify");
      } else {
        console.warn("Unexpected response format:", response.data);
      }
      
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        if (error.response.data?.errors) {
          const serverErrors = {};
          error.response.data.errors.forEach(err => {
            serverErrors[err.path] = err.msg;
          });
          setErrors(serverErrors);
        } else if (error.response.data?.message) {
          alert(error.response.data.message);
        } else {
          alert("An unexpected server error occurred. Please try again.");
        }
      } else if (error.request) {
        alert("No response from server. Please check your network and try again.");
      } else {
        alert("An error occurred while sending the request.");
      }
      
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      value: formData.name,
      onChange: handleChange,
      error: errors.name,
      disabled: loading,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: formData.email,
      onChange: handleChange,
      error: errors.email,
      disabled: loading,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      value: formData.password,
      onChange: handleChange,
      error: errors.password,
      disabled: loading,
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
    required: true,
  };

  return (
    <LayOutWrapper>
      <Illustration src="/SigninImg.png" alt="Signin Illustration" />
      <div className="w-full md:w-1/2 p-8">
        <Logo src="/Logo.png" alt="BOOKSDOTCOM" />
        <Title text="Sign Up to BOOKS.COM" />
        <Description text="Create your account with just few steps" />
        <SocialAuth />
        <Divider text="OR" />
        <Form fields={formFields} checkbox={checkBoxData} />
        <Button 
          text={loading ? "Creating Account..." : "Sign Up"} 
          onClick={handleSubmit}
          disabled={loading}
        />
        <RedirectMessage
          message="Already have an account?"
          linkText="Log in"
          linkHref="/login"
        />
      </div>
    </LayOutWrapper>
  );
}

export default SignUpPage;