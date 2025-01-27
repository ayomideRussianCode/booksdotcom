function Illustration({ src, alt, className = "" }) {
  return (
    <div
      className={`hidden rounded-lg w-1/2 items-center justify-center md:flex ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}
export default Illustration;
