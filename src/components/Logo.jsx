function Logo({ src, alt, className = "" }) {
  return <img className={`hidden md:flex ${className}`} src={src} alt={alt} />;
}
export default Logo;
