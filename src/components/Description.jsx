function Description({ text, className = "" }) {
  return (
    <p className={`text-xs text-center text-customAsh mb-6 ${className}`}>
      {text}
    </p>
  );
}
export default Description;
