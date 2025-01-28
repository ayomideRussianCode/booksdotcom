function SocialButton({ iconSrc, altText, onClick }) {
  <button
    onClick={onClick}
    className="px-8 py-2 rounded-lg border-2 border-customAsh flex items-center justify-center"
  >
    <img src={iconSrc} alt={altText} className="w-4 h-4" />
  </button>;
}

export default SocialButton;
