function Button({ text, href, className = "", type = "button" }) {
  return (
    <button
      type={type}
      className={`w-full bg-customBlue py-2 rounded-full ${className}`}
    >
      <a className="text-customWhite" href={href}>
        {text}
      </a>
    </button>
  );
}
export default Button;
