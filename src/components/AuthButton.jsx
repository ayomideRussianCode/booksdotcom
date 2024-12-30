function AuthButton({ imgSrc, altText, onClick }) {
  return (
    <button
      className="px-8 py-2 rounded-lg border-2 border-customAsh"
      onClick={onClick}
    >
      <img src={imgSrc} alt={altText} className="w-4 h-4" />
    </button>
  );
}

export default AuthButton;
