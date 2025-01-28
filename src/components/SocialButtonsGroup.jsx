import SocialButton from "./SocialButton";
function SocialButtonsGroup() {
  const socialButtons = [
    { iconSrc: "/google.png", altText: "Google" },
    { iconSrc: "/facebook.png", altText: "Facebook" },
    { iconSrc: "/basil_apple.png", altText: "Apple" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {socialButtons.map((button, index) => (
        <SocialButton
          key={index}
          iconSrc={button.iconSrc}
          altText={button.altText}
        />
      ))}
    </div>
  );
}

export default SocialButtonsGroup;
