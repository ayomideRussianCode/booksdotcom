import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Description from "../components/Description";
import SocialMediaAuthButton from "../components/SocialMediaAuth";
import Divider from "../components/Divider";
import Form from "../components/Form";
import RedirectMessage from "../components/RedirectMessage";
import useFormHandler from "../components/useFormHandler";
import Button from "../components/Button";

function SignUpPage() {
  const initialValues = { username: "", email: "", password: "" };
  const { formData, handleChange, handleSubmit } =
    useFormHandler(initialValues);

  const apiFetch = async (data) => {
    try {
      const response = await fetch("https://your-api-endpoint.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Signup successful:", result);
      return result;
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const socialAuthPlatforms = [
    { imgSrc: "/google.png", alt: "Google" },
    { imgSrc: "/facebook.png", alt: "Facebook" },
    { imgSrc: "/basil_apple.png", alt: "Apple" },
  ];

  const formFields = [
    { type: "text", id: "name", placeholder: "Name" },
    { type: "email", id: "email", placeholder: "Email" },
    { type: "password", id: "password", placeholder: "Password" },
    {
      type: "password",
      id: "confirmPassword",
      placeholder: "Confirm Password",
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
          <SocialMediaAuthButton platforms={socialAuthPlatforms} />
          <Divider text="OR" />
          <Form
            fields={formFields}
            checkbox={checkBoxData}
            buttonText="Sign Up"
            buttonHref="/home"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={(e) => handleSubmit(e, apiFetch)}
          />

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
