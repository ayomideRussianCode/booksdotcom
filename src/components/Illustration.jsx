function Illustration({
  src,
  alt,
  className = "",
  size = "w-1/2",
  rounded = "rounded-lg",
}) {
  return (
    <div
      className={`hidden ${size} ${rounded} items-center justify-center md:flex ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}
export default Illustration;
