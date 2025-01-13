import LayOutWrapper from "../components/LayOutWrapper";
import Illustration from "../components/Illustration";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Description from "../components/Description";
import SocialMediaAuthButton from "../components/SocialMediaAuth";
import Divider from "../components/Divider";
import Form from "../components/Form";
import RedirectMessage from "../components/RedirectMessage";
import { useState } from "react";

function SignUpPage() {
  const [name, setName] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

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
